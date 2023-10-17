import { ProfilesSB } from "shared/config/supabase";

export interface FriendsListSchema {
  friends: ProfilesSB[];
}
