import { ReducersMapObject, combineReducers } from "@reduxjs/toolkit";
import { StateSchema } from "../types/StateSchema";
import { userReducer } from "entities/User";
import { signInReducer } from "features/SignInByEmail";
import { signUpReducer } from "features/SignUpByEmail";
combineReducers;

export const rootReducer = combineReducers({
  user: userReducer,
  signIn: signInReducer,
  signUp: signUpReducer,
});
