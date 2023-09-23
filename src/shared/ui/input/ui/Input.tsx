import { InputProps } from "../types/Input.props";
import { memo } from "react";
import cn from "classnames";
import styles from "./Input.module.scss";

export const Input: React.FC<InputProps> = memo(
  ({
    className,
    size = "large",
    radius = true,
    label,
    labelStyle = "normal",
    ...props
  }) => {
    return (
      <div
        className={cn(styles.inputWrapper, styles[size], {
          [styles.radius]: radius,
        })}
      >
        {label && (
          <div className={cn(styles.label, styles[labelStyle])}>{label}</div>
        )}
        <input className={cn(styles.input, className)} type="text" {...props} />
      </div>
    );
  }
);
