import { BiUserCircle } from "react-icons/bi";
import { CircleLoader } from "shared/ui/loader";
import { AvatarIconeProps } from "../../types/Avatar.props";
import styles from "./AvatarIcon.module.scss";
import { memo, useMemo } from "react";
import cn from "classnames";

export const AvatarIcon: React.FC<AvatarIconeProps> = memo(
  ({ isLoading, avatar, size = "full" }) => {
    const styleMods = useMemo(
      () => cn(styles.container, styles[`size-${size}`]),
      [size, styles]
    );

    if (isLoading) {
      return (
        <div className={styleMods}>
          <CircleLoader size={40} />
        </div>
      );
    }
    if (avatar) {
      return (
        <div className={styleMods}>
          <img src={avatar} alt="avatar" />
        </div>
      );
    }
    return (
      <div className={styleMods}>
        <BiUserCircle className={styles.nonAvatar} />
      </div>
    );
  }
);
