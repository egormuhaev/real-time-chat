import { StateSchema } from "app/providers/store";

export const getProfilePageEditState = (state: StateSchema) =>
  state.editProfile;
