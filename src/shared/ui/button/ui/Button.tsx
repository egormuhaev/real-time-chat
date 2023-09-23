import cn from "classnames";
import { ButtonProps } from "../types/Button.props";
import styles from "./Button.module.scss";
import { memo } from "react";

export const Button: React.FC<ButtonProps> = memo(
  ({ children, size = "string", icon, ...props }): JSX.Element => {
    return (
      <button className={cn(styles.Button, styles[size])} {...props}>
        {icon}
        {children}
      </button>
    );
  }
);
