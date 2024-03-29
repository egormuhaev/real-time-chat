import cn from "classnames";
import styles from "./HomePage.module.scss";
import { withMainLayout } from "shared/ui/layout";
import { Input } from "shared/ui/input";
import { Header } from "widgets/header";
import { Sidebar } from "widgets/sidebar";
import { MdDeck } from "react-icons/md";

const HomePage = () => {
  return <div className={cn(styles.Home)}></div>;
};

export default withMainLayout(HomePage, {
  sidebar: <Sidebar />,
  header: <Header />,
});
