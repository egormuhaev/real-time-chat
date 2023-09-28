import styles from "./CircleLoader.module.scss";

export interface CircleLoaderProps {
  size: number;
}

export const CircleLoader: React.FC<CircleLoaderProps> = ({ size }) => {
  return (
    <span
      className={styles.loader}
      style={{ width: size, height: size }}
    ></span>
  );
};
