import styles from "./Sidebar.module.scss";
import cn from "classnames";
import { SidebarProps } from "../../types/Sidebar.props";
import { SidebarNavItem } from "../SidebarNavItem/SidebarNavItem";
import { routerConfig } from "shared/config/routerConfig/routerConfig";
import { MdInventory, MdInfo } from "react-icons/md";
import { useLocation } from "react-router";
import { ProfileCard } from "entities/Profile";
import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { userActions } from "entities/User";
import { FaUserFriends } from "react-icons/fa";

export const Sidebar: React.FC<SidebarProps> = ({ className, ...props }) => {
  const location = useLocation();
  const dispatch = useDispatch();

  const onClickLogout = useCallback(() => {
    dispatch(userActions.logout());
  }, [dispatch]);

  return (
    <div id="sidebar" className={cn(className, styles.Sidebar)} {...props}>
      <SidebarNavItem
        icon={<MdInventory />}
        title="Главная"
        url={routerConfig.privateRoute.home.path}
        active={routerConfig.privateRoute.home.path === location.pathname}
      />
      <SidebarNavItem
        icon={<MdInfo />}
        title="О сайте"
        url={routerConfig.privateRoute.about.path}
        active={routerConfig.privateRoute.about.path === location.pathname}
      />
      <SidebarNavItem
        icon={<FaUserFriends />}
        title="Друзья"
        url={routerConfig.privateRoute.friends.path}
        active={routerConfig.privateRoute.friends.path === location.pathname}
      />
      <div className={styles.otherContainer}>
        <ProfileCard style={{ paddingTop: 25 }} onClickLogout={onClickLogout} />
      </div>
    </div>
  );
};
