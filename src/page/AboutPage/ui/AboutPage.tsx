import styles from "./AboutPage.module.scss";
import { withMainLayout } from "shared/layout/main";
import { Header } from "widgets/header";
import { Sidebar } from "widgets/sidebar";

const AboutPage: React.FC = () => {
  return <div className={styles.AboutPage}>Aboute page</div>;
};

export default withMainLayout(AboutPage, <Header />, <Sidebar />);
