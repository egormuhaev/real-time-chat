import styles from "./Sidebar.module.scss";
import cn from "classnames";
import { SidebarProps } from "../../types/Sidebar.props";
import { SidebarNavItem } from "../SidebarNavItem/SidebarNavItem";
import { routerConfig } from "shared/config/routerConfig/routerConfig";
import { MdInventory, MdInfo } from "react-icons/md";
import { useLocation } from "react-router";

export const Sidebar: React.FC<SidebarProps> = ({ className, ...props }) => {
  const location = useLocation();

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
        icon={<MdInfo />}
        title="Profile"
        url={routerConfig.privateRoute.profile.path}
        active={routerConfig.privateRoute.profile.path === location.pathname}
      />
    </div>
  );
};
