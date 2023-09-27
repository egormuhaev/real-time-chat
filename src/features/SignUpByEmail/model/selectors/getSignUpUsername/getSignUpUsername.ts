import { StateSchema } from "app/providers/store";

export const getSignUpUsername = (state: StateSchema) => state.signUp.username;
