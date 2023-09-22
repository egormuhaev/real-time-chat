import styles from "./MainLayout.module.scss";
import cn from "classnames";
import { Header } from "widgets/header";
import { Sidebar } from "widgets/sidebar";

const MainLayout: React.FC = ({ children }) => {
  return (
    <div className={cn(styles.layout)}>
      <Header className={styles.header} />
      <Sidebar className={styles.sidebar} />
      <div className={styles.content}>{children}</div>
    </div>
  );
};

export const withMainLayout = <T extends Record<string, unknown>>(
  Component: React.FunctionComponent<T>
) => {
  return function withLayoutComponent(props: T): JSX.Element {
    return (
      <MainLayout>
        <Component {...props} />
      </MainLayout>
    );
  };
};
