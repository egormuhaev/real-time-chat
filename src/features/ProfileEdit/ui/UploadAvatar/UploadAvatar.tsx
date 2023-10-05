import { getProfilePageEditState } from "entities/Profile";
import { uploadAvatar } from "features/ProfileEdit/model/services/uploadAvatar/uploadAvatar";
import { useSelector } from "react-redux";
import { useAppDispatch } from "shared/hooks";
import styles from "./UploadAvatar.module.scss";
import { AiOutlineCloudUpload } from "react-icons/ai";
import { Button } from "shared/ui/button";
import { AvatarIcon } from "shared/ui/avatar";
import { memo, useCallback } from "react";

export const UploadAvatar = memo(() => {
  const dispatch = useAppDispatch();
  const { avatar, isLoadingAvatar } = useSelector(getProfilePageEditState);

  const onChangeInputFile = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const file = event.target.files[0];
      dispatch(uploadAvatar(file));
    },
    [dispatch]
  );

  return (
    <div className={styles.UploadAvatarContainer}>
      <div className={styles.UploadAvatar}>
        <AvatarIcon
          isLoading={isLoadingAvatar}
          avatar={
            avatar &&
            `https://cbfnsxrpyjrgkdbxhunm.supabase.co/storage/v1/object/public/avatars/${avatar}`
          }
        />
        <div className={styles.add}>
          <AiOutlineCloudUpload />
          <input
            className={styles.input}
            type="file"
            onChange={onChangeInputFile}
          />
        </div>
      </div>
      <Button size="large" appearence="blue">
        Загрузить новую
      </Button>
      <Button size="large">Удалить</Button>
    </div>
  );
});
