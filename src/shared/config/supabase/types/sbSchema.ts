export interface ProfilesSB {
  avatar_url: string;
  created_at: string;
  first_name: string;
  id: string;
  last_name: string;
  user_id: string;
}

export interface FriendsList {
  id: number;
  created_at: string;
  person: string;
  friend: string;
}

export interface FriendsRequest {
  created_at: string;
  from: string;
  id: number;
  status: boolean;
  to: string;
}
