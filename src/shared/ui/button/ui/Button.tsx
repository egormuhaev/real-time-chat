import cn from "classnames";
import { ButtonProps } from "../types/Button.props";
import styles from "./Button.module.scss";

export const Button: React.FC<ButtonProps> = ({
  children,
  size = "string",
  icon,
  ...props
}): JSX.Element => {
  return (
    <button className={cn(styles.Button, styles[size])} {...props}>
      {icon}
      {children}
    </button>
  );
};
