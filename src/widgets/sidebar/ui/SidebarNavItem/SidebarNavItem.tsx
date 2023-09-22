import { Link } from "react-router-dom";
import styles from "./SidebarNavItem.module.scss";
import { SidebarNavItemProps } from "../../types/Sidebar.props";
import cn from "classnames";

export const SidebarNavItem: React.FC<SidebarNavItemProps> = ({
  url = "#",
  active = false,
  title = "",

  icon,
}) => {
  return (
    <Link
      className={cn(styles.SidebarNavItem, {
        [styles.active]: active,
      })}
      to={url}
    >
      {icon}
      <div className={styles.title}>{title}</div>
    </Link>
  );
};
