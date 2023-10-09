import { DetailedHTMLProps, InputHTMLAttributes } from "react";
import { ValidationResolve } from "shared/lib/helpers";

type HTMLInputProps = Omit<
  DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
  "size"
>;

type InputSize = "small" | "medium" | "large";

type LabelStyle = "warring" | "normal" | "success" | "error";

export interface InputProps extends HTMLInputProps {
  size?: InputSize;
  radius?: boolean;
  label?: React.ReactNode;
  labelStyle?: LabelStyle;
  subElement?: React.ReactNode;
}

export interface InputMessageProps {
  messages: ValidationResolve[];
}
