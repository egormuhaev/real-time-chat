import { DetailedHTMLProps, HtmlHTMLAttributes } from "react";

export interface NavItems {
  title?: string;
  url?: string;
}

export interface UserData {
  firstName?: string;
  lastName?: string;
  login?: string;
}

export interface SidebarProfileProps extends UserData {
  img?: string;
}

export interface SidebarProps
  extends DetailedHTMLProps<
    HtmlHTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {}

export interface SidebarNavItemProps extends NavItems {
  icon?: React.ReactNode;
  active?: boolean;
}
