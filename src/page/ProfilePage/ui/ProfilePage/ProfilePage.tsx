import { withMainLayout } from "shared/layout/main";
import { Header } from "widgets/header";
import { Sidebar } from "widgets/sidebar";
import styles from "./ProfilePage.module.scss";
import { useState } from "react";
import { ProfileEdit } from "features/ProfileEdit";

const ProfilePage: React.FC = () => {
  const [isEdit, setIsEdit] = useState(false);

  return (
    <div className={styles.ProfilePage}>
      <div className={styles.nav}></div>
      <div className={styles.view}>
        <ProfileEdit />
      </div>
    </div>
  );
};

export default withMainLayout(ProfilePage, {
  sidebar: <Sidebar />,
  header: <Header />,
});
