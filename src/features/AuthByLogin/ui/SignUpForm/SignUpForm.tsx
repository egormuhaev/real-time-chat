import { Button } from "shared/ui/button";
import { Input } from "shared/ui/input";
import styles from "./SignUpForm.module.scss";
import { MdAlternateEmail, MdPassword } from "react-icons/md";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { BiUser } from "react-icons/bi";

export const SignUpForm = () => {
  const [email, setEmail] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");

  const { t, i18n } = useTranslation();
  return (
    <div className={styles.form}>
      <h1 className={styles.formTitle}>{t("Регистрация")}</h1>
      <Input
        placeholder={t("Электронная почта")}
        size="large"
        label={<MdAlternateEmail />}
      />
      <Input
        placeholder={t("Имя пользователя")}
        size="large"
        label={<BiUser />}
      />
      <Input
        placeholder={t("Пароль")}
        type="password"
        size="large"
        label={<MdPassword />}
      />
      <Input
        placeholder={t("Повторите пароль")}
        type="password"
        size="large"
        label={<MdPassword />}
      />

      <Button appearence="blue" className={styles.loginBtn} size="large">
        {t("Зарегистрироваться")}
      </Button>
    </div>
  );
};
