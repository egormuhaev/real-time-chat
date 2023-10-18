import styles from "./Select.module.scss";
import { SelectProps } from "../types/Select.props";
import cn from "classnames";
import { memo, useCallback, useMemo, useState } from "react";
import { SelectOptions } from "./SelectOptions";

export const Select: React.FC<SelectProps> = memo(
  ({
    size = "large",
    radius = true,
    className,
    labelStyle = "normal",
    label,
    options,
    setOptionsInside,
    ...props
  }) => {
    const [selected, setSelected] = useState<string | number>();
    const [focuse, setFocuse] = useState(false);

    const onSelectOption = (key: string | number) => {
      return () => {
        setSelected(key);
        setOptionsInside(key);
      };
    };

    const onFocuse = useCallback(() => {
      setFocuse(true);
    }, [focuse, setFocuse]);

    const onBlur = useCallback(() => {
      setTimeout(() => {
        setFocuse(false);
      }, 500);
    }, [focuse, setFocuse]);

    const inputValue = useMemo(() => {
      const value =
        options.filter(({ key }) => key === selected)[0]?.title ?? "";
      return value;
    }, [selected, options]);

    return (
      <div className={styles.container}>
        <div
          className={cn(styles.inputWrapper, styles[size], {
            [styles.radius]: radius,
          })}
        >
          {label && (
            <div className={cn(styles.label, styles[labelStyle])}>{label}</div>
          )}
          <input
            value={inputValue}
            onFocus={onFocuse}
            onBlur={onBlur}
            className={cn(styles.input, className)}
            type="text"
            {...props}
          />
        </div>
        {focuse && (
          <SelectOptions
            select={selected}
            options={options}
            setOptions={onSelectOption}
          />
        )}
      </div>
    );
  }
);
