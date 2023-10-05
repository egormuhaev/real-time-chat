import { Input } from "shared/ui/input";
import styles from "./ProfileEdit.module.scss";
import { useAppDispatch } from "shared/hooks";
import { useSelector } from "react-redux";
import { useCallback, useEffect } from "react";
import { getProfileState } from "entities/Profile/model/selectors/getProfileState/getProfileState";
import { editProfileActions } from "features/ProfileEdit/model/slice/editProfileSlice";
import { UploadAvatar } from "../UploadAvatar/UploadAvatar";
import { Button } from "shared/ui/button";
import { editProfileData } from "features/ProfileEdit/model/services/editProfileData/editProfileData";
import { getProfilePageEditState } from "entities/Profile";
import { CircleLoader } from "shared/ui/loader";
import { getUserAuthState } from "entities/User/model/selectors/getUserAuthState/getUserAuthState";

const ProfileEdit: React.FC = () => {
  const dispatch = useAppDispatch();
  const {
    avatar: avatarProfile,
    firstName: firstNameProfile,
    lastName: lastNameProfile,
  } = useSelector(getProfileState);

  const { avatar, lastName, firstName, isLoadingProfileData } = useSelector(
    getProfilePageEditState
  );
  const { user } = useSelector(getUserAuthState);

  useEffect(() => {
    dispatch(editProfileActions.setFirstName(firstNameProfile));
    dispatch(editProfileActions.setFirstName(lastNameProfile));
    dispatch(editProfileActions.setAvatar(avatarProfile));
  }, []);

  const onChangeInputValue = useCallback(
    (action) => {
      return (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(action(e.target.value));
      };
    },
    [dispatch]
  );

  const onClickSave = useCallback(() => {
    if (user !== null) {
      if (user.id && lastName && firstName && avatar) {
        dispatch(
          editProfileData({ userId: user.id, firstName, lastName, avatar })
        );
      }
    }
  }, [dispatch, avatar, lastName, firstName, user]);

  return (
    <div className={styles.ProfilePageEdit}>
      <UploadAvatar />
      <div className={styles.inputContainer}>
        <p>Имя</p>
        <Input
          value={firstName}
          size="medium"
          onChange={onChangeInputValue(editProfileActions.setFirstName)}
        />
      </div>
      <div className={styles.inputContainer}>
        <p>Фамилия</p>
        <Input
          value={lastName}
          size="medium"
          onChange={onChangeInputValue(editProfileActions.setLastName)}
        />
      </div>
      <Button onClick={onClickSave} size="large" appearence="blue">
        {isLoadingProfileData ? <CircleLoader size={20} /> : "Сохранить"}
      </Button>
    </div>
  );
};

export default ProfileEdit;
