import cn from "classnames";
import styles from "./SidebarProfile.module.scss";
import { SidebarProfileProps } from "widgets/sidebar/types/Sidebar.props";

export const SidebarProfile: React.FC<SidebarProfileProps> = ({
  img,
  firstName,
  lastName,
  login,
}) => {
  return (
    <div className={cn(styles.SidebarProfile)}>
      <div className={cn(styles.profile)}>
        <img src={img} alt="" />
      </div>
      <div className={cn(styles.info)}>
        <p className={styles.username}>
          {firstName} {lastName}
        </p>
        <p className={styles.login}>{login}</p>
      </div>
    </div>
  );
};
