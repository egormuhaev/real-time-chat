export interface InputFieldProps {
  onChangeInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: {
    value: string;
    validation?: boolean;
  };
}
