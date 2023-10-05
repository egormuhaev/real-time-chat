import { useTranslation } from "react-i18next";
import styles from "./NotFoundPage.module.scss";
import cn from "classnames";
import { Button } from "shared/ui/button";
import { Link, useLocation } from "react-router-dom";
import { routerConfig } from "shared/config/routerConfig/routerConfig";

const NotFoundPage = () => {
  const { t } = useTranslation();
  const location = useLocation();

  return (
    <div className={cn(styles.NotFound)}>
      <div className={styles.info}>
        <h1>{t("Страница не найдена")}</h1>

        <p>URL: {location.pathname}</p>

        <Link
          className={styles.backBtn}
          to={routerConfig.privateRoute.home.path}
        >
          <Button size="large">{t("Вернутся на главную страницу")}</Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
