import { Input } from "shared/ui/input";
import styles from "../styles/FriendListHeader.module.scss";
import { FriendListHeaderProps } from "../types/FriendListHeader.props";
import { HiSearchCircle } from "react-icons/hi";
import { Select } from "shared/ui/select";
import { GrSort } from "react-icons/gr";

export const FriendListHeader: React.FC<FriendListHeaderProps> = ({
  search,
  onInputSeach,
  sortOptions,
  onSort,
}) => {
  return (
    <div className={styles.FriendListHeader}>
      <div className={styles.search}>
        <Input
          value={search}
          onChange={onInputSeach}
          label={<HiSearchCircle />}
          size="medium"
        />
      </div>
      <div className={styles.sort}>
        <Select
          setOptionsInside={onSort}
          label={<GrSort />}
          size="medium"
          options={sortOptions}
        />
      </div>
    </div>
  );
};
