import { StateSchema } from "app/providers/store";

export const getUserId = (state: StateSchema) =>
  state.user.authData.user.id || "";
