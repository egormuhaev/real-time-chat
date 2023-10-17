import cn from "classnames";
import { ButtonProps } from "../types/Button.props";
import styles from "./Button.module.scss";
import { memo } from "react";

export const Button: React.FC<ButtonProps> = memo(
  ({
    children,
    appearence = "appearence",
    size = "string",
    icon,
    className,
    ...props
  }): JSX.Element => {
    return (
      <button
        className={cn(className, styles.Button, styles[size], {
          [styles.blue]: appearence === "blue",
          [styles.red]: appearence === "red",
        })}
        {...props}
      >
        {icon}
        {children}
      </button>
    );
  }
);
