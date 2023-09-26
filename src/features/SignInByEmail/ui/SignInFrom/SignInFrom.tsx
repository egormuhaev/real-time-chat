import { Button } from "shared/ui/button";
import { Input } from "shared/ui/input";
import styles from "./SignInFrom.module.scss";
import { MdAlternateEmail, MdPassword } from "react-icons/md";
import { useTranslation } from "react-i18next";
import { memo, useCallback, useReducer } from "react";
import { FormProps } from "../types/FormProps";
import { useSelector } from "react-redux";
import { getSignInState } from "../../model/selectors/getSignInState/getSignInState";
import { signInActions } from "../../model/slice/signInSlice";
import { signInByEmail } from "../../model/services/signInByEmail/signInByEmail";
import { useAppDispatch } from "shared/hooks/useRedux/useRedux";

export const SignInForm: React.FC<FormProps> = memo(({ switchForm }) => {
  const dispatch = useAppDispatch();
  const { email, password, isLoading, error } = useSelector(getSignInState);
  const { t } = useTranslation();

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
    const response = { email: email.value, password: password.value };
    dispatch(signInByEmail(response));
  }, [dispatch, email, password]);

  return (
    <div className={styles.form}>
      <h1 className={styles.formTitle}>{t("Авторизация")}</h1>
      <Input
        placeholder={t("Электронная почта")}
        size="large"
        label={<MdAlternateEmail />}
        value={email.value}
        onChange={onChangeInputValue(signInActions.setEmail)}
      />
      <Input
        placeholder={t("Пароль")}
        type="password"
        size="large"
        label={<MdPassword />}
        value={password.value}
        onChange={onChangeInputValue(signInActions.setPassword)}
      />

      <Button onClick={onClickLogin} appearence="blue" className={styles.loginBtn} size="large">
        {t("Войти")}
      </Button>
      <p onClick={switchForm}>
        <span>{t("Создать ")}</span>
        {t("новую учетную запись")}
      </p>
    </div>
  );
});
