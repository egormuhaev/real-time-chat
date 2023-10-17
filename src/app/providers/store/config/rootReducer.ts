import { combineReducers } from "@reduxjs/toolkit";
import { profileReducer } from "entities/Profile/model/slice/profileSlice";
import { userReducer } from "entities/User";
import { signInReducer } from "features/signIn";
import { signUpReducer } from "features/signUp";
import { StateSchema } from "../types/StateSchema";
import { editProfileReducer } from "features/profile";
import { friendsReducer } from "entities/Friends";
import { friendsListReducer } from "features/friends";

export const rootReducer = combineReducers<StateSchema>({
  user: userReducer,
  signIn: signInReducer,
  signUp: signUpReducer,
  profile: profileReducer,
  editProfile: editProfileReducer,
  friends: friendsReducer,
  friendsList: friendsListReducer,
});
