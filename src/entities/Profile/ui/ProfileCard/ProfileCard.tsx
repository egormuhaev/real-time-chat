import { ProfileCardProps } from "entities/Profile/ui/types/ProfileCardProps";
import styles from "./ProfileCard.module.scss";
import { memo } from "react";
import cn from "classnames";
import { AvatarIcon } from "shared/ui/avatar";
import { useSelector } from "react-redux";
import { getProfileState } from "entities/Profile/model/selectors/getProfileState/getProfileState";
import { BiLogOut } from "react-icons/bi";
import { Button } from "shared/ui/button";
import { Link } from "react-router-dom";
import { routerConfig } from "shared/config";

export const ProfileCard: React.FC<ProfileCardProps> = memo(
  ({ className, onClickLogout, ...props }) => {
    const { firstName, lastName, avatar } = useSelector(getProfileState);

    return (
      <Link className={styles.link} to={routerConfig.privateRoute.profile.path}>
        <div className={cn(styles.ProfileCard, className)} {...props}>
          <AvatarIcon
            className={styles.avatar}
            avatar={
              avatar &&
              `https://cbfnsxrpyjrgkdbxhunm.supabase.co/storage/v1/object/public/avatars/${avatar}`
            }
            size={45}
          />
          <div className={styles.info}>
            <p>{firstName}</p>
            <p>{lastName}</p>
          </div>

          {onClickLogout && (
            <Button onClick={onClickLogout} className={styles.logout}>
              <BiLogOut />
            </Button>
          )}
        </div>
      </Link>
    );
  }
);
