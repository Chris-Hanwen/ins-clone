//useParams可以拿到路径上的 id 参数
import { useParams } from 'react-router-dom';
import { InfoContainer, Info, Stats, Bio, LoadIcon } from './Profile.styles';

import CheckCircle from '@mui/icons-material/CheckCircle';
import { useEffect, useState } from 'react';
import CreateProfile from './CreateProfile';
import axios from 'axios';
import { useSelector } from 'react-redux/es/hooks/useSelector';

const ProfileInfo = () => {
  const { id } = useParams();
  console.log(id);
  const postData = useSelector((state) => state.post.postData);
  let filteredPosts = postData.filter((post) => {
    return post.userID === id;
  });
  const [profile, setProfile] = useState(null);
  const [isProfileCreated, setIsProfileCreated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const url = `http://localhost:8000/api/profiles/${id}`;
    axios
      .get(url)
      .then((response) => {
        console.log(response.data);
        setProfile(response.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setIsLoading(false);
      });
  }, [id, isProfileCreated]);
  if (isLoading) {
    return <LoadIcon>Loading...</LoadIcon>;
  }
  return (
    <>
      {profile ? (
        <InfoContainer>
          <img
            src={`http://localhost:8000/api/profiles/image/${profile.userID}`}
            alt='profile picture'
          />
          <Info>
            <p className='owner-ID'>
              {profile.userID}
              {profile.verified ? <CheckCircle className='verified' /> : null}
            </p>
            <Stats>
              <p>
                <strong>{filteredPosts.length}</strong> posts
              </p>
              <p>
                <strong>{profile.followers}</strong> followers
              </p>
              <p>
                <strong>{profile.following}</strong> following
              </p>
            </Stats>
            <Bio>
              <p className='name'>
                <strong>{profile.name}</strong>
              </p>
              <p className='category'>
                <strong>{profile.category}</strong>
              </p>
              <p className='name'>{profile.bio}</p>
            </Bio>
          </Info>
        </InfoContainer>
      ) : (
        <InfoContainer>
          <CreateProfile
            userID={id}
            setIsProfileCreated={setIsProfileCreated}
          />
        </InfoContainer>
      )}
    </>
  );
};

export default ProfileInfo;
