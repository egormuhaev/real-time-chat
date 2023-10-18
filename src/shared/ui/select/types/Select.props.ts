import { DetailedHTMLProps, InputHTMLAttributes } from "react";

type HTMLInputProps = Omit<
  DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
  "size"
>;

type InputSize = "small" | "medium" | "large";

type LabelStyle = "warring" | "normal" | "success" | "error";

type SelectOptions = {
  key: string | number;
  title: string;
};

export interface SelectProps extends HTMLInputProps {
  setOptionsInside: (key: string | number) => void;
  size?: InputSize;
  radius?: boolean;
  label?: React.ReactNode;
  labelStyle?: LabelStyle;
  options: SelectOptions[];
}
