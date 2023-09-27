import { ValidationResolve } from "shared/helpers";

export interface FormProps {
  switchForm?: () => void;
}

export interface InputMessageProps {
  messages: ValidationResolve[];
}

export interface InputFieldProps {
  onChangeInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
