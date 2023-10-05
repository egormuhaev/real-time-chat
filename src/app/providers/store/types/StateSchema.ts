import { ProfileSchema } from "entities/Profile/model/types/profileSchema";
import { UserSchema } from "entities/User";
import { EditProfileSchema } from "features/ProfileEdit/model/types/editProfileSchema";
import { SignInSchema } from "features/SignInByEmail";
import { SignUpSchema } from "features/SignUpByEmail";

export interface StateSchema {
  user: UserSchema;
  signIn?: SignInSchema;
  signUp?: SignUpSchema;
  profile?: ProfileSchema;
  editProfile?: EditProfileSchema;
}
