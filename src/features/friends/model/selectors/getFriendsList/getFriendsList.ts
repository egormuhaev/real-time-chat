import { StateSchema } from "app/providers/store";

export const getFriendsList = (state: StateSchema) => state.friendsList.friends;
