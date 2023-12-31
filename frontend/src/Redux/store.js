import userSlice from './UserData';
import userProfileSlice from './ProfileData';
import postDataSlice from './PostData';
import { configureStore } from '@reduxjs/toolkit';

export default configureStore({
  reducer: {
    user: userSlice,
    profile: userProfileSlice,
    post: postDataSlice,
  },
});
