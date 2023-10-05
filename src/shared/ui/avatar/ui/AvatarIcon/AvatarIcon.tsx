import { BiUserCircle } from "react-icons/bi";
import { CircleLoader } from "shared/ui/loader";
import { AvatarIconeProps } from "../../types/Avatar.props";
import styles from "./AvatarIcon.module.scss";
import { memo } from "react";

export const AvatarIcon: React.FC<AvatarIconeProps> = memo(
  ({ isLoading, avatar }) => {
    if (isLoading) {
      return <CircleLoader size={40} />;
    }
    if (avatar) {
      return (
        <img style={{ height: 300, width: 400 }} src={avatar} alt="avatar" />
      );
    }
    return <BiUserCircle className={styles.nonAvatar} />;
  }
);
