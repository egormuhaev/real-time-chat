import { ProfileSchema } from "entities/Profile";
import { getProfileState } from "entities/Profile/model/selectors/getProfileState/getProfileState";
import { getUserAuthState } from "entities/User/model/selectors/getUserAuthState/getUserAuthState";
import { uploadAvatar } from "../../model/services/uploadAvatar/uploadAvatar";
import { useCallback, useEffect, useMemo } from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "shared/lib/hooks";
import { EditProfileSchema } from "../../model/types/editProfileSchema";
import { editProfileActions } from "../../model/slice/editProfileSlice";
import { editProfileData } from "../../model/services/editProfileData/editProfileData";
import { getProfilePageEditState } from "../../model/selectors/getProfilePageEditState/getProfilePageEditState";

interface ProfileResolve {
  profile: ProfileSchema;
  editProfile: EditProfileSchema;
  onInputFile: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSave: () => void;
  onInputValue: {
    firstName: (e: React.ChangeEvent<HTMLInputElement>) => void;
    lastName: (e: React.ChangeEvent<HTMLInputElement>) => void;
  };
}

export const useProfile = (): ProfileResolve => {
  const dispatch = useAppDispatch();

  const profile = useSelector(getProfileState);
  const editProfile = useSelector(getProfilePageEditState);
  const { user } = useSelector(getUserAuthState);

  useEffect(() => {
    dispatch(editProfileActions.setFirstName(profile.firstName));
    dispatch(editProfileActions.setLastName(profile.lastName));
    dispatch(editProfileActions.setAvatar(profile.avatar));
  }, [dispatch, profile]);

  const onInputFile = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files[0];
      dispatch(uploadAvatar(file));
    },
    [dispatch]
  );

  const onInputValue = useMemo(
    () => ({
      firstName: (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(editProfileActions.setFirstName(e.target.value));
      },
      lastName: (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(editProfileActions.setLastName(e.target.value));
      },
    }),
    [dispatch]
  );

  const onSave = useCallback(() => {
    if (user !== null) {
      if (
        user.id &&
        editProfile.lastName &&
        editProfile.firstName &&
        editProfile.avatar
      ) {
        dispatch(
          editProfileData({
            userId: user.id,
            firstName: editProfile.firstName,
            lastName: editProfile.lastName,
            avatar: editProfile.avatar,
          })
        );
      }
    }
  }, [dispatch, editProfile, user]);

  return {
    profile,
    editProfile,
    onInputFile,
    onSave,
    onInputValue,
  };
};
