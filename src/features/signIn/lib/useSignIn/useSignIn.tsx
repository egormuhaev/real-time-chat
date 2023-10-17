import { getSignInIsLoading } from "features/signIn/model/selectors/getSignInIsLoading/getSignInIsLoading";
import { getSignInState } from "features/signIn/model/selectors/getSignInState/getSignInState";
import { getSignInValidation } from "features/signIn/model/selectors/getSignInValidation/getSignInValidation";
import { signInByEmail } from "features/signIn/model/services/signInByEmail/signInByEmail";
import { signInActions } from "features/signIn/model/slice/signInSlice";
import { ValueItem } from "features/signIn/model/types/signInSchema";
import { useCallback, useEffect, useMemo } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { routerConfig } from "shared/config";
import { useAppDispatch } from "shared/lib/hooks";
import { Error } from "shared/ui/error/ui/Error/Error";

interface useSignInResolve {
  onInputValue: (
    action: any
  ) => (e: React.ChangeEvent<HTMLInputElement>) => void;
  onLogin: () => void;
  error: {
    component: React.ReactNode | null;
    onClose: () => void;
  };

  signInData: {
    email: ValueItem;
    password: ValueItem;
    validation: boolean;
    loading: boolean;
  };
}

export const useSignIn = (): useSignInResolve => {
  const dispatch = useAppDispatch();
  const { email, password, error, authSuccess } = useSelector(getSignInState);
  const validation = useSelector(getSignInValidation);
  const loading = useSelector(getSignInIsLoading);

  const navigation = useNavigate();

  useEffect(() => {
    if (authSuccess) navigation(routerConfig.privateRoute.home.path);
  }, [authSuccess]);

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

  return {
    onInputValue: onChangeInputValue,
    onLogin: onClickLogin,
    error: {
      component: errorMessage,
      onClose: onCloseLoginMessage,
    },
    signInData: {
      email,
      password,
      validation,
      loading,
    },
  };
};
