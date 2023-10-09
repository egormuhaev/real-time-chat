import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface ProfileCardProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  onClickLogout?: () => void;
}
