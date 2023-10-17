import { FriendsSchema } from "entities/Friends";
import { ProfileSchema } from "entities/Profile";
import { UserSchema } from "entities/User";
import { FriendsListSchema } from "features/friends";
import { EditProfileSchema } from "features/profile/model/types/editProfileSchema";
import { SignInSchema } from "features/signIn";
import { SignUpSchema } from "features/signUp";

export interface StateSchema {
  user: UserSchema;
  signIn?: SignInSchema;
  signUp?: SignUpSchema;
  profile?: ProfileSchema;
  editProfile?: EditProfileSchema;
  friends?: FriendsSchema;
  friendsList?: FriendsListSchema;
}
