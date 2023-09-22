import styles from "./AboutPage.module.scss";
import { withMainLayout } from "app/layouts/main";

const AboutPage: React.FC = () => {
  return <div className={styles.AboutPage}>Aboute page</div>;
};

export default withMainLayout(AboutPage);
