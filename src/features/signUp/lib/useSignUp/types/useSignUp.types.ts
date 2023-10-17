import { ValueItem } from "../../../model/types/signUpSchema";

export interface IUseSignUpResolve {
  signUpData: {
    email: ValueItem;
    password: ValueItem;
    username: ValueItem;
    confirmPassword: ValueItem;
    validation: boolean;
    isLoading: boolean;
  };
  onLogin: () => void;
  onInputValue: (
    action: any
  ) => (e: React.ChangeEvent<HTMLInputElement>) => void;

  error: {
    component: React.ReactNode | null;
    onClose: () => void;
  };
}
