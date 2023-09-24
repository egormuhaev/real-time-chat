import { SignInForm } from "features/AuthByLogin";
import styles from "./LoginPage.module.scss";

const LoginPage = () => {
  return (
    <div className={styles.LoginPage}>
      <SignInForm />
    </div>
  );
};

export default LoginPage;
