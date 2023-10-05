import styles from "./Error.module.scss";
import { ErrorProps } from "../../types/ErrorProps";
import { RxCross2 } from "react-icons/rx";

export const Error: React.FC<ErrorProps> = ({ title, describe, onClose }) => {
  return (
    <div className={styles.Error}>
      <div className={styles.title}>{title}</div>
      <div className={styles.describe}>{describe}</div>
      <div className={styles.close} onClick={onClose}>
        <RxCross2 />
      </div>
    </div>
  );
};
