import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

export type ButtonSize = "small" | "medium" | "large" | "string";

export interface ButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  size?: ButtonSize;
  icon?: React.ReactNode;
}
