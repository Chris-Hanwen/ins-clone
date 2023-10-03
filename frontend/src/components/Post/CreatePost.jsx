import {
  FormContainer,
  FormLabel,
  FormInput,
  FormButton,
} from '../Profile/Profile.styles';
import { axiosInstance } from '../../apiConfig';
import Navbar from '../Navbar/Navbar';
import { useState } from 'react';
const CreatePost = () => {
  const [isPostCreated, setIsPostCreated] = useState(false);
  const handleSubmit = () => {};
  const handleImageChange = () => {};
  const handleChange = () => {};

  return (
    <>
      <Navbar />
      {isPostCreated ? (
        'Post is created!'
      ) : (
        <FormContainer>
          <h2>Create Your Post</h2>
          <form onSubmit={handleSubmit}>
            <div>
              <FormLabel htmlFor='postLink'>Post Picture</FormLabel>
              <FormInput
                type='file'
                id='postLink'
                name='postLink'
                onChange={handleImageChange}
              ></FormInput>
            </div>
            <div>
              <FormLabel htmlFor='caption'>Caption</FormLabel>
              <FormInput
                type='text'
                id='caption'
                name='caption'
                onChange={handleChange}
              ></FormInput>
            </div>
            <div>
              <FormLabel htmlFor='location'>Location</FormLabel>
              <FormInput
                type='text'
                id='location'
                name='location'
                onChange={handleChange}
              ></FormInput>
            </div>
            <div>
              <FormButton type='submit'>Create Post</FormButton>
            </div>
          </form>
        </FormContainer>
      )}
    </>
  );
};

export default CreatePost;
