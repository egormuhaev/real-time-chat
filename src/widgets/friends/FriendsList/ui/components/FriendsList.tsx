import { memo, useMemo } from "react";
import styles from "../styles/FriendsList.module.scss";
import { FriendsListProps } from "../types/FriendsList.props";
import { FriendsListItem } from "./FriendsListItem";
import { useFriendsList } from "features/friends/lib/useFriendsList/hook/useFriendsList";
import { FriendListHeader } from "./FriendListHeader";

const FriendsList: React.FC<FriendsListProps> = memo(({}) => {
  const { friendProfiles, search, onSearchInput, onSort, sortOptions } =
    useFriendsList();

  const friends = useMemo(
    () =>
      friendProfiles.map(({ first_name, id, avatar_url }) => (
        <FriendsListItem
          key={id}
          name={first_name}
          id={id}
          avatar={avatar_url ? avatar_url : undefined}
        />
      )),
    [friendProfiles]
  );

  return (
    <div className={styles.FriendsList}>
      <div className={styles.header}>
        <FriendListHeader
          onSort={onSort}
          sortOptions={sortOptions}
          search={search}
          onInputSeach={onSearchInput}
        />
      </div>
      <div className={styles.friends}>{friends}</div>
    </div>
  );
});

export default FriendsList;
