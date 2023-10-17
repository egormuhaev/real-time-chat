import { LoadProfileDataProps } from "../types/LoadProfileDataProps";
import { getUserAuthState } from "entities/User/model/selectors/getUserAuthState/getUserAuthState";
import { useSelector } from "react-redux";
import { useAppDispatch } from "shared/lib/hooks";
import { loadFriendsData } from "entities/Friends/model/services/loadFriendsData/loadFriendsData";
import { useEffect } from "react";

export const LoadFriendsData: React.FC<LoadProfileDataProps> = ({
  children,
}) => {
  const { user } = useSelector(getUserAuthState);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (user) {
      dispatch(loadFriendsData(user.id));
    }
  }, [dispatch, user]);

  return <>{children}</>;
};
