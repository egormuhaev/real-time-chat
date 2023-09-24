import { Button } from "shared/ui/button";
import { Input } from "shared/ui/input";
import styles from "./SignInFrom.module.scss";
import { MdAlternateEmail, MdPassword } from "react-icons/md";
import { useTranslation } from "react-i18next";
import { useState } from "react";

export const SignInForm = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  
  const { t, i18n } = useTranslation();

  const toggle = async () => {
    i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru");
  };

  return (
    <div className={styles.form}>
      <h1 className={styles.formTitle}>{t("Авторизация")}</h1>
      <Input
        placeholder={t("Электронная почта")}
        size="large"
        label={<MdAlternateEmail />}
      />
      <Input
        placeholder={t("Пароль")}
        type="password"
        size="large"
        label={<MdPassword />}
      />

      <Button className={styles.loginBtn} size="large">
        {t("Войти")}
      </Button>
      <Button className={styles.loginBtn} size="large" onClick={toggle}>
        lang
      </Button>
    </div>
  );
};
