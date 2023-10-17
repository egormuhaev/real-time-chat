import { StateSchema } from "app/providers/store";

export const getSignInPassword = (state: StateSchema) => state.signIn.password;
