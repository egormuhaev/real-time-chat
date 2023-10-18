import { ProfilesSB } from "shared/config/supabase";

export type SearchFriend = string | null;
export type SetValueFunc = (setValue: any | string) => void;
export type InputEventChangeFunc = (
  e: React.ChangeEvent<HTMLInputElement>
) => void;

export type SortOptions = {
  key: string | number;
  title: string;
};

export interface UseFriendsListResolve {
  friendProfiles: ProfilesSB[];
  search: SearchFriend;
  onSearchInput: InputEventChangeFunc;
  sortOptions: SortOptions[];
  onSort: (ket: string | number) => void;
}
