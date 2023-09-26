import { UserSchema } from "entities/User";
import { SignInSchema } from "features/SignInByEmail";
import { SignUpSchema } from "features/SignUpByEmail";

export interface StateSchema {
  user: UserSchema;
  signIn?: SignInSchema;
  signUp?: SignUpSchema;
}
