import { Button } from "shared/ui/button";
import { Input } from "shared/ui/input";
import styles from "./SignUpForm.module.scss";
import { MdAlternateEmail, MdPassword } from "react-icons/md";
import { useTranslation } from "react-i18next";
import { memo, useCallback } from "react";
import { BiUser } from "react-icons/bi";
import { FormProps } from "../types/FormProps";
import { useSelector } from "react-redux";
import { getSignUpState } from "features/SignUpByEmail/model/selectors/getSignUpState/getSignUpState";
import { signUpActions } from "features/SignUpByEmail/model/slice/signUpSlice";
import { useAppDispatch } from "shared/hooks";
import { signUpByEmail } from "features/SignUpByEmail/model/services/signUpByEmail/signUpByEmail";

export const SignUpForm: React.FC<FormProps> = memo(({ switchForm }) => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const { email, password, username, confirmPassword } =
    useSelector(getSignUpState);

  const onChangeInputValue = useCallback(
    (action) => {
      return (e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = e.target.value;
        dispatch(action(newValue));
      };
    },
    [dispatch]
  );

  const onClickLogin = useCallback(() => {
    const response = {
      email: email.value,
      password: password.value,
      username: username.value,
    };
    dispatch(signUpByEmail(response));
  }, [dispatch, email, password, username]);

  return (
    <div className={styles.form}>
      <h1 className={styles.formTitle}>{t("Регистрация")}</h1>
      <Input
        placeholder={t("Электронная почта")}
        size="large"
        value={email.value}
        label={<MdAlternateEmail />}
        onChange={onChangeInputValue(signUpActions.setEmail)}
      />
      <Input
        placeholder={t("Имя пользователя")}
        size="large"
        value={username.value}
        label={<BiUser />}
        onChange={onChangeInputValue(signUpActions.setUsername)}
      />
      <Input
        placeholder={t("Пароль")}
        type="password"
        size="large"
        value={password.value}
        label={<MdPassword />}
        onChange={onChangeInputValue(signUpActions.setPassword)}
      />
      <Input
        placeholder={t("Повторите пароль")}
        type="password"
        size="large"
        value={confirmPassword.value}
        onChange={onChangeInputValue(signUpActions.setConfirmPassword)}
        label={<MdPassword />}
      />

      <Button
        onClick={onClickLogin}
        appearence="blue"
        className={styles.loginBtn}
        size="large"
      >
        {t("Зарегистрироваться")}
      </Button>
      <p onClick={switchForm}>
        {t("Уже есть аккаунт ")}
        <span>{t("войти")}</span>
      </p>
    </div>
  );
});
