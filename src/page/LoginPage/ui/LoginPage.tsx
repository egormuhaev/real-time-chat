import { SignInForm } from "features/SignInByEmail";
import { SignUpForm } from "features/SignUpByEmail";
import styles from "./LoginPage.module.scss";
import { useCallback, useState } from "react";

const LoginPage = () => {
  const [isAuth, setIsAuth] = useState(false);

  const switchForm = useCallback(() => {
    setIsAuth(!isAuth);
  }, [isAuth]);

  return (
    <div className={styles.LoginPage}>
      {isAuth ? (
        <SignInForm switchForm={switchForm} />
      ) : (
        <SignUpForm switchForm={switchForm} />
      )}
    </div>
  );
};

export default LoginPage;
