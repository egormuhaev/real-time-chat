import { SignInForm } from "widgets/login";
import { SignUpForm } from "widgets/login";
import styles from "./LoginPage.module.scss";
import { useCallback, useState } from "react";
import { useLocation } from "react-router-dom";

const LoginPage = () => {
  const location = useLocation();

  const [isAuth, setIsAuth] = useState(
    location.state?.login === "signIn" ? true : false
  );

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
