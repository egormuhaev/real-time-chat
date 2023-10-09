import { Input } from "shared/ui/input";
import styles from "../styles/ProfileEdit.module.scss";
import { useAppDispatch } from "shared/lib/hooks";
import { useSelector } from "react-redux";
import { useCallback, useEffect } from "react";
import { getProfileState } from "entities/Profile/model/selectors/getProfileState/getProfileState";
import { editProfileActions } from "../../model/slice/editProfileSlice";
import { Button } from "shared/ui/button";
import { editProfileData } from "features/ProfileEdit/model/services/editProfileData/editProfileData";
import { getProfilePageEditState } from "entities/Profile";
import { CircleLoader } from "shared/ui/loader";
import { getUserAuthState } from "entities/User/model/selectors/getUserAuthState/getUserAuthState";
import { uploadAvatar } from "../../model/services/uploadAvatar/uploadAvatar";
import { UploadAvatar } from "./UploadAvatar";

const ProfileEdit: React.FC = () => {
  const dispatch = useAppDispatch();
  const {
    avatar: avatarProfile,
    firstName: firstNameProfile,
    lastName: lastNameProfile,
    init: initProfile,
  } = useSelector(getProfileState);

  const { avatar, lastName, firstName, isLoadingProfileData, isLoadingAvatar } =
    useSelector(getProfilePageEditState);
  const { user } = useSelector(getUserAuthState);

  const onChangeInputFile = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const file = event.target.files[0];
      dispatch(uploadAvatar(file));
    },
    [dispatch]
  );

  useEffect(() => {
    dispatch(editProfileActions.setFirstName(firstNameProfile));
    dispatch(editProfileActions.setLastName(lastNameProfile));
    dispatch(editProfileActions.setAvatar(avatarProfile));
  }, [dispatch, initProfile, avatarProfile, firstNameProfile, lastNameProfile]);

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
      <UploadAvatar
        onChangeInputFile={onChangeInputFile}
        avatar={avatar}
        isLoadingAvatar={isLoadingAvatar}
      />
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
