import styles from "./SelectOptions.module.scss";
import { SelectOptionsProps } from "../types/SelectOptions.props";
import { useMemo } from "react";
import cn from "classnames";

export const SelectOptions: React.FC<SelectOptionsProps> = ({
  options,
  select,
  setOptions,
}) => {
  const onClickCounter = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  const optionsList = useMemo(() => {
    return options.map(({ title, key }) => (
      <div
        onClick={setOptions(key)}
        key={key}
        className={cn(styles.selectOptionsItem, {
          [styles.active]: key === select,
        })}
      >
        {title}
      </div>
    ));
  }, [options, select, setOptions]);

  return (
    <div onClick={onClickCounter} className={styles.selectOptions}>
      {optionsList}
    </div>
  );
};
