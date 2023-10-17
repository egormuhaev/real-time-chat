import { StateSchema } from "app/providers/store";

export const getSignUpConfPassword = (state: StateSchema) =>
  state.signUp.confirmPassword;
