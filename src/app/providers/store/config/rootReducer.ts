import { combineReducers } from "@reduxjs/toolkit";
import { profileReducer } from "entities/Profile/model/slice/profileSlice";
import { userReducer } from "entities/User";
import { signInReducer } from "features/SignInByEmail";
import { signUpReducer } from "features/SignUpByEmail";
import { StateSchema } from "../types/StateSchema";
import { editProfileReducer } from "features/ProfileEdit/model/slice/editProfileSlice";

export const rootReducer = combineReducers<StateSchema>({
  user: userReducer,
  signIn: signInReducer,
  signUp: signUpReducer,
  profile: profileReducer,
  editProfile: editProfileReducer,
});
