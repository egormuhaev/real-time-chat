import { Button } from "shared/ui/button";
import { Input } from "shared/ui/input";
import styles from "./SignInFrom.module.scss";
import { MdAlternateEmail, MdPassword } from "react-icons/md";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { FormProps } from "../types/FormProps";

export const SignInForm: React.FC<FormProps> = ({ switchForm }) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const { t, i18n } = useTranslation();

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

      <Button appearence="blue" className={styles.loginBtn} size="large">
        {t("Войти")}
      </Button>
      <p onClick={switchForm}>
        <span>{t("Создать ")}</span>
        {t("новую учетную запись")}
      </p>
    </div>
  );
};
