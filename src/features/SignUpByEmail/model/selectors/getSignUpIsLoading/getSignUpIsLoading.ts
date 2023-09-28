import { StateSchema } from "app/providers/store";

export const getSignUpIsLoading = (state: StateSchema) =>
  state.signUp.isLoading;
