import { withMainLayout } from "shared/ui/layout";
import styles from "../styles/FriendsPage.module.scss";
import { Header } from "widgets/header";
import { Sidebar } from "widgets/sidebar";
import { FriendsList } from "widgets/friends";

const FriendsPage = () => {
  return (
    <div className={styles.FriendsPage}>
      <FriendsList />
    </div>
  );
};

export default withMainLayout(FriendsPage, {
  sidebar: <Sidebar />,
  header: <Header />,
});
