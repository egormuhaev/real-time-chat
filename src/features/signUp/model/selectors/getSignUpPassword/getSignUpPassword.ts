import { StateSchema } from "app/providers/store";

export const getSignUpPassword = (state: StateSchema) => state.signUp.password;
