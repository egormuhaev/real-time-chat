import styles from "../styles/UploadAvatar.module.scss";
import { AiOutlineCloudUpload } from "react-icons/ai";
import { Button } from "shared/ui/button";
import { AvatarIcon } from "shared/ui/avatar";
import { memo } from "react";
import { UploadAvatarProps } from "../types/UploadAvatar.props";

export const UploadAvatar: React.FC<UploadAvatarProps> = memo(
  ({ avatar, onChangeInputFile, isLoadingAvatar }) => {
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
      </div>
    );
  }
);
