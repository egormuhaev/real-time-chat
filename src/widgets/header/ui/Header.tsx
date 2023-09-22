import cn from "classnames";
import styles from "./Header.module.scss";
import { HeaderProps } from "./Header.props";

export const Header: React.FC<HeaderProps> = ({ className, ...props }) => {
  return <header className={cn(className, styles.Header)} {...props}></header>;
};
