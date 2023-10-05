import { BiUserCircle } from "react-icons/bi";
import { CircleLoader } from "shared/ui/loader";
import { AvatarIconeProps } from "../types/ProfileEdit.props";
import styles from "./AvatarIcon.module.scss";
import { memo } from "react";

export const AvatarIcon: React.FC<AvatarIconeProps> = memo(
  ({ isLoading, avatar }) => {
    if (isLoading) {
      return <CircleLoader size={40} />;
    }
    if (avatar) {
      return (
        <img
          style={{ height: 300, width: 400 }}
          src={`https://cbfnsxrpyjrgkdbxhunm.supabase.co/storage/v1/object/public/avatars/${avatar}`}
          alt="avatar"
        />
      );
    }
    return <BiUserCircle className={styles.nonAvatar} />;
  }
);
