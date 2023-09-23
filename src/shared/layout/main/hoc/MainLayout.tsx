import styles from "./MainLayout.module.scss";
import cn from "classnames";
import { Header } from "widgets/header";
import { Sidebar } from "widgets/sidebar";

export interface MainLayoutProps {
  children: React.ReactNode;
  sidebar: React.ReactNode;
  header: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({
  children,
  sidebar,
  header,
}) => {
  return (
    <div className={cn(styles.layout)}>
      <div className={styles.header}>{header}</div>
      <div className={styles.sidebar}>{sidebar}</div>
      <div className={styles.content}>{children}</div>
    </div>
  );
};

export const withMainLayout = <T extends Record<string, unknown>>(
  Component: React.FunctionComponent<T>,
  sidebar: React.ReactNode,
  header: React.ReactNode
) => {
  return function withLayoutComponent(props: T): JSX.Element {
    return (
      <MainLayout sidebar={sidebar} header={header}>
        <Component {...props} />
      </MainLayout>
    );
  };
};
