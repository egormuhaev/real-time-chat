import { getSignUpState } from "../../../model/selectors/getSignUpState/getSignUpState";
import { getSignUpValidation } from "../../../model/selectors/getSignUpValidation/getSignUpValidation";
import { signUpByEmail } from "../../../model/services/signUpByEmail/signUpByEmail";
import { signUpActions } from "../../../model/slice/signUpSlice";
import { useCallback, useEffect, useMemo } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { routerConfig } from "shared/config";
import { useAppDispatch } from "shared/lib/hooks";
import { Error } from "shared/ui/error/ui/Error/Error";
import { IUseSignUpResolve } from "../types/useSignUp.types";

export const useSignUp = (): IUseSignUpResolve => {
  const dispatch = useAppDispatch();
  const navigation = useNavigate();

  const {
    email,
    password,
    username,
    error,
    registrSuccess,
    confirmPassword,
    isLoading,
  } = useSelector(getSignUpState);

  const validation = useSelector(getSignUpValidation);

  useEffect(() => {
    if (registrSuccess)
      navigation(routerConfig.publicRoute.req_confirm_email.path, {
        state: {
          password: password,
          email: email,
        },
      });
  }, [registrSuccess]);

  const onInputValue = useCallback(
    (action) => {
      return (e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = e.target.value;
        dispatch(action(newValue));
      };
    },
    [dispatch]
  );

  const onLogin = useCallback(() => {
    const response = {
      email: email.value,
      password: password.value,
      username: username.value,
    };
    if (validation) {
      dispatch(signUpByEmail(response));
    }
  }, [dispatch, email, password, username, validation]);

  const onCloseErrorMessage = useCallback(() => {
    if (error) {
      dispatch(signUpActions.resetError());
    }
  }, [dispatch, error]);

  const errorMessage = useMemo(
    () =>
      error && (
        <Error title="Ошибка" describe={error} onClose={onCloseErrorMessage} />
      ),
    [error]
  );

  return {
    signUpData: {
      confirmPassword,
      email,
      password,
      username,
      validation,
      isLoading,
    },
    error: {
      component: errorMessage,
      onClose: onCloseErrorMessage,
    },
    onLogin,
    onInputValue,
  };
};
