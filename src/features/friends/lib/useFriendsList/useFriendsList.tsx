import { getFriendsIds } from "entities/Friends";
import { getFriendsList } from "features/friends/model/selectors/getFriendsList/getFriendsList";
import { friendsIdsAsProfiles } from "features/friends/model/services/friendsIdsAsProfiles/friendsIdsAsProfiles";
import { friendsListActions } from "features/friends/model/slice/friendListSlice";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "shared/lib/hooks";
import { ProfilesSB } from "shared/config/supabase";

interface UseFriendsListResolve {
  friendProfiles: ProfilesSB[];
}

export const useFriendsList = (): UseFriendsListResolve => {
  const friendsIds = useSelector(getFriendsIds);
  const friendProfiles = useSelector(getFriendsList);
  const dispatch = useAppDispatch();

  console.log(friendProfiles);
  useEffect(() => {
    console.log(friendsIds);
    dispatch(friendsIdsAsProfiles(friendsIds));
  }, [friendsIds]);

  return {
    friendProfiles,
  };
};
