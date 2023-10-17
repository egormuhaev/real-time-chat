import { memo, useState } from "react";
import styles from "../styles/FriendsListItem.module.scss";
import { FriendsListItemProps } from "../types/FriendsListItem.props";
import { AvatarIcon } from "shared/ui/avatar";
import { Button } from "shared/ui/button";
import { SlOptionsVertical } from "react-icons/sl";
import cn from "classnames";
import { FriendsListItemOptions } from "./FriendsListItemOptions";

export const FriendsListItem: React.FC<FriendsListItemProps> = memo(
  ({ name, id, avatar }) => {
    const [options, setOptions] = useState(false);

    const onSwitchOptions = () => {
      setOptions(!options);
    };

    return (
      <div className={styles.FriendsListItem}>
        <AvatarIcon
          avatar={
            avatar &&
            `https://cbfnsxrpyjrgkdbxhunm.supabase.co/storage/v1/object/public/avatars/${avatar}`
          }
          size={70}
        />
        <div>{name}</div>
        <div className={cn(styles.container)}>
          {options && <FriendsListItemOptions />}
          <Button
            onClick={onSwitchOptions}
            className={cn(styles.openMenu)}
            size="small"
            icon={<SlOptionsVertical />}
          />
        </div>
      </div>
    );
  }
);
