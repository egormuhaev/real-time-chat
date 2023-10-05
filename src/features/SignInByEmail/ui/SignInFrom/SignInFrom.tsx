import styles from "./SignInFrom.module.scss";
import { useTranslation } from "react-i18next";
import { memo, useCallback, useMemo } from "react";
import { FormProps } from "../types/FormProps";
import { useSelector } from "react-redux";
import { getSignInState } from "../../model/selectors/getSignInState/getSignInState";
import { signInActions } from "../../model/slice/signInSlice";
import { signInByEmail } from "../../model/services/signInByEmail/signInByEmail";
import { useAppDispatch } from "shared/hooks/useRedux/useRedux";
import { InputEmailField } from "../InputEmailField/InputEmailField";
import { InputPasswordField } from "../InputPasswordField/InputPasswordField";
import { getSignInValidation } from "features/SignInByEmail/model/selectors/getSignInValidation/getSignInValidation";
import { ActionButtonForm } from "../ActionButtonForm/ActionButtonForm";
import { Error } from "shared/ui/error/ui/Error/Error";
import { supabase } from "shared/config/supabase";

export const SignInForm: React.FC<FormProps> = memo(({ switchForm }) => {
  const dispatch = useAppDispatch();
  const { email, password, error } = useSelector(getSignInState);
  const validation = useSelector(getSignInValidation);
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

  const onClickLogin = useCallback(async () => {
    const response = { email: email.value, password: password.value };
    const { data, error } = await supabase.auth.signInWithPassword(response);
    if (validation) {
      dispatch(signInByEmail(response));
    }
  }, [dispatch, email, password, validation]);

  const onCloseLoginMessage = useCallback(() => {
    if (error) {
      dispatch(signInActions.resetError());
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
      <h1 className={styles.formTitle}>{t("Авторизация")}</h1>
      <InputEmailField
        onChangeInput={onChangeInputValue(signInActions.setEmail)}
      />
      <InputPasswordField
        onChangeInput={onChangeInputValue(signInActions.setPassword)}
      />
      {errorMessage}
      <div className={styles.actionContainer}>
        <ActionButtonForm className={styles.loginBtn} onClick={onClickLogin} />
        <p className={styles.switchForm} onClick={switchForm}>
          <span>{t("Создать ")}</span>
          {t("новую учетную запись")}
        </p>
      </div>
    </div>
  );
});
