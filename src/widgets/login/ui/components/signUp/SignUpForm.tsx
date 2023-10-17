import styles from "../../styles/SignUpForm.module.scss";
import { useTranslation } from "react-i18next";
import { memo } from "react";
import { FormProps } from "../../types/Form.props";
import { signUpActions } from "features/signUp/model/slice/signUpSlice";
import { InputPasswordField } from "./InputPasswordField";
import { InputConfPasswordField } from "./InputConfPasswordField";
import { InputEmailField } from "./InputEmailField";
import { InputUsernameField } from "./InputUsernameField";
import { ActionButtonForm } from "./ActionButtonForm";
import { useSignUp } from "features/signUp/lib/useSignUp/hook/useSignUp";

export const SignUpForm: React.FC<FormProps> = memo(({ switchForm }) => {
  const { t } = useTranslation();
  const { signUpData, onLogin, onInputValue, error } = useSignUp();

  return (
    <div className={styles.form}>
      <h1 className={styles.formTitle}>{t("Регистрация")}</h1>
      <InputEmailField
        value={signUpData.email}
        onChangeInput={onInputValue(signUpActions.setEmail)}
      />
      <InputUsernameField
        value={signUpData.username}
        onChangeInput={onInputValue(signUpActions.setUsername)}
      />
      <InputPasswordField
        value={signUpData.password}
        onChangeInput={onInputValue(signUpActions.setPassword)}
      />
      <InputConfPasswordField
        value={signUpData.confirmPassword}
        onChangeInput={onInputValue(signUpActions.setConfirmPassword)}
      />
      {error.component}
      <ActionButtonForm
        isLoading={signUpData.isLoading}
        validation={signUpData.validation}
        className={styles.loginBtn}
        onClick={onLogin}
      />
      <p className={styles.switchForm} onClick={switchForm}>
        {t("Уже есть аккаунт ")}
        <span>{t("войти")}</span>
      </p>
    </div>
  );
});
