import { SignInForm, SignUpForm } from "features/AuthByLogin";
import styles from "./LoginPage.module.scss";
import { useState } from "react";

const LoginPage = () => {
  const [isAuth, setIsAuth] = useState(false);

  return (
    <div className={styles.LoginPage}>
      {isAuth ? <SignInForm /> : <SignUpForm />}
    </div>
  );
};

export default LoginPage;
