import { StateSchema } from "app/providers/store";

export const getSignInEmail = (state: StateSchema) => state.signIn.email;
