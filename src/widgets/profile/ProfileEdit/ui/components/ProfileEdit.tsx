import { Input } from "shared/ui/input";
import styles from "../styles/ProfileEdit.module.scss";
import { Button } from "shared/ui/button";
import { CircleLoader } from "shared/ui/loader";
import { UploadAvatar } from "./UploadAvatar";
import { useProfile } from "features/profile";

const ProfileEdit: React.FC = () => {
  const { editProfile, onInputFile, onSave, onInputValue } = useProfile();

  return (
    <div className={styles.ProfilePageEdit}>
      <UploadAvatar
        onChangeInputFile={onInputFile}
        avatar={editProfile.avatar}
        isLoadingAvatar={editProfile.isLoadingAvatar}
      />
      <div className={styles.inputContainer}>
        <p>Имя</p>
        <Input
          value={editProfile.firstName}
          size="medium"
          onChange={onInputValue.firstName}
        />
      </div>
      <div className={styles.inputContainer}>
        <p>Фамилия</p>
        <Input
          value={editProfile.lastName}
          size="medium"
          onChange={onInputValue.lastName}
        />
      </div>
      <Button onClick={onSave} size="large" appearence="blue">
        {editProfile.isLoadingProfileData ? (
          <CircleLoader size={20} />
        ) : (
          "Сохранить"
        )}
      </Button>
    </div>
  );
};

export default ProfileEdit;
