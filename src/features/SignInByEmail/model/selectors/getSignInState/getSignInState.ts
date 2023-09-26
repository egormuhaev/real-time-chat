import type { StateSchema } from "app/providers/store";

export const getSignInState = (state: StateSchema) => state?.signIn;
