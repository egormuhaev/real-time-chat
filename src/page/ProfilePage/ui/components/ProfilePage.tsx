import { withMainLayout } from "shared/ui/layout";
import { Header } from "widgets/header";
import { Sidebar } from "widgets/sidebar";
import styles from "../styles/ProfilePage.module.scss";
import { useCallback, useState } from "react";
import { ProfileEdit } from "widgets/profile";
import { MdModeEditOutline } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { Button } from "shared/ui/button";

export enum ProfileState {
  EDIT = "edit",
  VIEW = "view",
}

const ProfilePage: React.FC = () => {
  const [profileState, setProfileState] = useState<ProfileState>(
    ProfileState.EDIT
  );

  const onSwitchProfileState = useCallback(
    (state: ProfileState) => {
      return () => setProfileState(state);
    },
    [ProfileEdit, profileState]
  );

  return (
    <div className={styles.ProfilePage}>
      <div className={styles.nav}>
        <Button
          appearence={profileState === ProfileState.VIEW ? "blue" : "default"}
          size="medium"
          style={{ width: "100%", border: "none" }}
          icon={<CgProfile />}
          onClick={onSwitchProfileState(ProfileState.VIEW)}
        >
          View
        </Button>
        <Button
          appearence={profileState === ProfileState.EDIT ? "blue" : "default"}
          size="medium"
          style={{ width: "100%", border: "none" }}
          icon={<MdModeEditOutline />}
          onClick={onSwitchProfileState(ProfileState.EDIT)}
        >
          Edit
        </Button>
      </div>
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
