import styles from "../../styles/SignInFrom.module.scss";
import { useTranslation } from "react-i18next";
import { memo } from "react";
import { FormProps } from "../../types/Form.props";
import { signInActions } from "features/signIn";
import { InputEmailField } from "./InputEmailField";
import { InputPasswordField } from "./InputPasswordField";
import { ActionButtonForm } from "./ActionButtonForm";
import { useSignIn } from "features/signIn";

export const SignInForm: React.FC<FormProps> = memo(({ switchForm }) => {
  const { onInputValue, onLogin, error, signInData } = useSignIn();

  const { t } = useTranslation();

  return (
    <div className={styles.form}>
      <h1 className={styles.formTitle}>{t("Авторизация")}</h1>
      <InputEmailField
        value={signInData.email}
        onChangeInput={onInputValue(signInActions.setEmail)}
      />
      <InputPasswordField
        value={signInData.password}
        onChangeInput={onInputValue(signInActions.setPassword)}
      />
      {error.component}
      <div className={styles.actionContainer}>
        <ActionButtonForm
          validation={signInData.validation}
          isLoading={signInData.loading}
          className={styles.loginBtn}
          onClick={onLogin}
        />
        <p className={styles.switchForm} onClick={switchForm}>
          <span>{t("Создать ")}</span>
          {t("новую учетную запись")}
        </p>
      </div>
    </div>
  );
});
