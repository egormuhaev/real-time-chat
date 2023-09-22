import styles from "./Sidebar.module.scss";
import cn from "classnames";
import { SidebarProps } from "../../types/Sidebar.props";
import { SidebarNavItem } from "../SidebarNavItem/SidebarNavItem";
import { routerConfig } from "shared/config/routerConfig/routerConfig";
import { MdInventory, MdInfo } from "react-icons/md";
import { useLocation } from "react-router-dom";
import { SidebarProfile } from "../SidebarProfile/SidebarProfile";

export const Sidebar: React.FC<SidebarProps> = ({ className, ...props }) => {
  const location = useLocation();

  return (
    <div className={cn(className, styles.Sidebar)} {...props}>
      <SidebarNavItem
        icon={<MdInventory />}
        title="Главная"
        url={routerConfig.home.path}
        active={routerConfig.home.path === location.pathname}
      />
      <SidebarNavItem
        icon={<MdInfo />}
        title="О сайте"
        url={routerConfig.about.path}
        active={routerConfig.about.path === location.pathname}
      />
      <SidebarProfile
        firstName="Egor"
        lastName="Muhaev"
        login="egormuhaev@yandex.ru"
      />
    </div>
  );
};