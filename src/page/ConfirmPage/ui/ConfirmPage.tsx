import { Button } from "shared/ui/button";
import styles from "./ConfirmPage.module.scss";
import { GiConfirmed } from "react-icons/gi";
import { useNavigate } from "react-router-dom";
import { routerConfig } from "shared/config";

const ConfirmPage: React.FC = () => {
  const navigetion = useNavigate();

  const onClickRedirect = () => {
    navigetion(routerConfig.publicRoute.login.path, {
      state: {
        login: "signIn",
      },
    });
  };

  return (
    <div className={styles.ConfirmPage}>
      <div className={styles.message}>
        <GiConfirmed />
        <h1 className={styles.title}>Почта успешно подтвержденна</h1>
        <Button
          onClick={onClickRedirect}
          className={styles.btn}
          appearence="blue"
          size="large"
        >
          Войти
        </Button>
      </div>
    </div>
  );
};

export default ConfirmPage;
