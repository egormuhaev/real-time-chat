import { useLocation, useNavigate } from "react-router-dom";
import styles from "./RequireConfigPage.module.scss";
import { useEffect } from "react";
import { routerConfig } from "shared/config";
import { FaServer } from "react-icons/fa";
import { Button } from "shared/ui/button";

const RequireConfigPage = () => {
  const location = useLocation();
  const navigation = useNavigate();

  useEffect(() => {
    if (location.state?.email || location.state?.password) {
      navigation(routerConfig.publicRoute.login.path);
    }
  }, []);

  const onClickSignIn = () => {
    navigation(routerConfig.publicRoute.login.path, {
      state: {
        login: "signIn",
      },
    });
  };

  return (
    <div className={styles.RequireConfigPage}>
      <div className={styles.message}>
        <FaServer />
        <p className={styles.title}>
          Мы отправили на указынный Вами электронный адресс письмо для
          подтверждения электронной почты.
        </p>
        <Button
          onClick={onClickSignIn}
          className={styles.btn}
          appearence="blue"
          size="large"
        >
          Я уже подтвердил, хочу войти
        </Button>
      </div>
    </div>
  );
};

export default RequireConfigPage;
