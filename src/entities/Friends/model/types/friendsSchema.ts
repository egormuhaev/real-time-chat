import { FriendsList, FriendsRequest } from "shared/config/supabase";

export interface FriendsSchema {
  friendsList: FriendsList[];
  friendsRequestFrom: FriendsRequest[];
  friendsRequestTo: FriendsRequest[];
  isLoading: boolean;
  error?: string;
}
