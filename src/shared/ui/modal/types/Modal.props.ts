import { DetailedHTMLProps, HtmlHTMLAttributes } from "react";

export interface ModalProps
  extends DetailedHTMLProps<
    HtmlHTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  isOpen?: boolean;
  onClose?: () => void;
}

export interface useModalArgs {
  isOpen?: boolean;
  onClose?: () => void;
}
