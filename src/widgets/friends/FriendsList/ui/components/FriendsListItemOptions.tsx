import { Button } from "shared/ui/button";
import styles from "../styles/FriendsListItemOptions.module.scss";
import { FriendsListItemOptionsProps } from "../types/FriendsListItemOptions.props";
import { AiOutlineUserDelete } from "react-icons/ai";

export const FriendsListItemOptions: React.FC<
  FriendsListItemOptionsProps
> = ({}) => {
  return (
    <div className={styles.FriendsListItemOptions}>
      <Button size="small" appearence="blue">
        Чат
      </Button>
      <Button appearence="red" size="small" icon={<AiOutlineUserDelete />} />
    </div>
  );
};
