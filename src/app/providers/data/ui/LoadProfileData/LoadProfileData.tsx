import { LoadProfileDataProps } from "../types/LoadProfileDataProps";
import { getUserAuthState } from "entities/User/model/selectors/getUserAuthState/getUserAuthState";
import { useSelector } from "react-redux";
import { useAppDispatch } from "shared/lib/hooks";
import { upadateProfileData } from "entities/Profile/model/services/upadateProfileData/upadateProfileData";
import { useEffect } from "react";

export const LoadProfileData: React.FC<LoadProfileDataProps> = ({
  children,
}) => {
  const { user } = useSelector(getUserAuthState);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (user) {
      dispatch(upadateProfileData(user.id));
    }
  }, [dispatch, user]);

  return <>{children}</>;
};
