import { StateSchema } from "app/providers/store";

export const getUserAuthState = (state: StateSchema) =>
  state.user.authData || { user: null, session: null };
