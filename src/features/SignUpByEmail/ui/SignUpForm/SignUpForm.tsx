import styles from "./SignUpForm.module.scss";
import { useTranslation } from "react-i18next";
import { memo, useCallback, useMemo } from "react";
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
import { ActionButtonForm } from "../ActionButtonForm/ActionButtonForm";
import { Error } from "shared/ui/error/ui/Error/Error";

export const SignUpForm: React.FC<FormProps> = memo(({ switchForm }) => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const { email, password, username, error } = useSelector(getSignUpState);
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
    if (validation) {
      dispatch(signUpByEmail(response));
    }
  }, [dispatch, email, password, username, validation]);

  const onCloseLoginMessage = useCallback(() => {
    if (error) {
      dispatch(signUpActions.resetError());
    }
  }, [dispatch, error]);

  const errorMessage = useMemo(
    () =>
      error && (
        <Error title="Ошибка" describe={error} onClose={onCloseLoginMessage} />
      ),
    [error]
  );

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
      {errorMessage}
      <ActionButtonForm className={styles.loginBtn} onClick={onClickLogin} />
      <p className={styles.switchForm} onClick={switchForm}>
        {t("Уже есть аккаунт ")}
        <span>{t("войти")}</span>
      </p>
    </div>
  );
});
