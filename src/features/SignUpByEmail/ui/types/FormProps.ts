export interface FormProps {
  switchForm?: () => void;
}

export interface InputFieldProps {
  onChangeInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface ActionButtonFormProps {
  className?: string;
  onClick: () => void;
}
