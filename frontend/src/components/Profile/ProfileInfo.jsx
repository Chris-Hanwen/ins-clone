//useParams可以拿到路径上的 id 参数
import { useParams } from "react-router-dom";
import { InfoContainer, Info, Stats, Bio } from "./Profile.styles";
import { initialState as profileData } from "../../Redux/ProfileData";
import { initialState as postData } from "../../Redux/PostData";
import CheckCircle from "@mui/icons-material/CheckCircle";

const ProfileInfo = () => {
  const { id } = useParams();
  console.log(id);
  let filteredPosts = postData.filter((post)=>{
      return post.userID === id;
  })
  return (
    <>
      {profileData[id] ? (
        <InfoContainer>
          <img src={profileData[id].profilePic} alt="profile picture" />
          <Info>
            <p className="owner-ID">
              {profileData[id].userID}
              {profileData[id].verified ? (
                <CheckCircle className="verified" />
              ) : null}
            </p>
            <Stats>
              <p>
                <strong>{filteredPosts.length}</strong> posts
              </p>
              <p>
                <strong>{profileData[id].followers}</strong> followers
              </p>
              <p>
                <strong>{profileData[id].following}</strong> following
              </p>
            </Stats>
            <Bio>
              <p className="name">
                <strong>{profileData[id].name}</strong>
              </p>
              <p className="category">
                <strong>{profileData[id].category}</strong>
              </p>
              <p className="name">{profileData[id].bio}</p>
            </Bio>
          </Info>
        </InfoContainer>
      ) : (
        <InfoContainer>
          <h2>
            Sorry, User with id <span>{id}</span> does not exist!
          </h2>
        </InfoContainer>
      )}
    </>
  );
};

export default ProfileInfo;


