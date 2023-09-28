import { StateSchema } from "app/providers/store";

export const getSignInValidation = (state: StateSchema) => {
  return state.signIn.email.validation && state.signIn.password.validation;
};
