import { StateSchema } from "app/providers/store";

export const getSignUpEmail = (state: StateSchema) => state.signUp.email;
