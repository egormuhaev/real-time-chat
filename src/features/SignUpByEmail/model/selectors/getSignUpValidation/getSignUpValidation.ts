import { StateSchema } from "app/providers/store";

export const getSignUpValidation = (state: StateSchema) => {
  return (
    state.signUp.email.validation &&
    state.signUp.password.validation &&
    state.signUp.confirmPassword.validation &&
    state.signUp.username.validation
  );
};
