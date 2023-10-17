import { StateSchema } from "app/providers/store";

export const getFriendsIds = (state: StateSchema) =>
  state.friends.friendsList.map((state) => state.friend);
