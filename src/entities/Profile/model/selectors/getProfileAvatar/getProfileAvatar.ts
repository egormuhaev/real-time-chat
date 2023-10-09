import { StateSchema } from "app/providers/store";

export const getProfileAvatar = (state: StateSchema) => state.profile.avatar;
