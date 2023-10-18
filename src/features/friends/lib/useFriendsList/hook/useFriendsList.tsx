import { getFriendsIds } from "entities/Friends";
import { getFriendsList } from "features/friends/model/selectors/getFriendsList/getFriendsList";
import { friendsIdsAsProfiles } from "features/friends/model/services/friendsIdsAsProfiles/friendsIdsAsProfiles";
import { useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "shared/lib/hooks";
import {
  UseFriendsListResolve,
  SearchFriend,
  InputEventChangeFunc,
  SortOptions,
} from "../types/useFriendsList.types";

const sortOptions: SortOptions[] = [
  { key: 1, title: "A-Я" },
  { key: 2, title: "Новые" },
  { key: 3, title: "Старые" },
];

export const useFriendsList = (): UseFriendsListResolve => {
  const [searchFriend, setSearchFriend] = useState<SearchFriend>(null);
  const [sort, setSort] = useState<string | number>();
  const friendsIds = useSelector(getFriendsIds);
  const friendProfiles = useSelector(getFriendsList);
  const dispatch = useAppDispatch();

  useEffect(() => {
    console.log(friendsIds);
    dispatch(friendsIdsAsProfiles(friendsIds));
  }, [friendsIds]);

  const onSort = (ket: string | number) => {
    setSort(ket);
  };

  const onSearchFriend = useCallback(
    (setSearch: (search: SearchFriend) => void): InputEventChangeFunc => {
      return (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setSearch(value);
      };
    },
    [setSearchFriend]
  );

  return {
    friendProfiles,
    search: searchFriend,
    onSearchInput: onSearchFriend(setSearchFriend),
    sortOptions,
    onSort,
  };
};
