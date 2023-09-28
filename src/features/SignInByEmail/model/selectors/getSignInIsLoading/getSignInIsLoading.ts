import { StateSchema } from "app/providers/store";

export const getSignInIsLoading = (state: StateSchema) =>
  state.signIn.isLoading;
