import { Button } from "shared/ui/button";
import styles from "./SignUpForm.module.scss";
import { useTranslation } from "react-i18next";
import { memo, useCallback } from "react";
import { FormProps } from "../types/FormProps";
import { useSelector } from "react-redux";
import { getSignUpState } from "features/SignUpByEmail/model/selectors/getSignUpState/getSignUpState";
import { signUpActions } from "features/SignUpByEmail/model/slice/signUpSlice";
import { useAppDispatch } from "shared/hooks";
import { signUpByEmail } from "features/SignUpByEmail/model/services/signUpByEmail/signUpByEmail";
import { InputPasswordField } from "../InputPasswordField/InputPasswordField";
import { InputConfPasswordField } from "../InputConfPasswordField/InputConfPasswordField";
import { InputEmailField } from "../InputEmailField/InputEmailField";
import { InputUsernameField } from "../InputUsernameField/InputUsernameField";
import { getSignUpValidation } from "features/SignUpByEmail/model/selectors/getSignUpValidation/getSignUpValidation";

export const SignUpForm: React.FC<FormProps> = memo(({ switchForm }) => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const { email, password, username } = useSelector(getSignUpState);
  const validation = useSelector(getSignUpValidation);

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
      <InputEmailField
        onChangeInput={onChangeInputValue(signUpActions.setEmail)}
      />
      <InputUsernameField
        onChangeInput={onChangeInputValue(signUpActions.setUsername)}
      />
      <InputPasswordField
        onChangeInput={onChangeInputValue(signUpActions.setPassword)}
      />
      <InputConfPasswordField
        onChangeInput={onChangeInputValue(signUpActions.setConfirmPassword)}
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
