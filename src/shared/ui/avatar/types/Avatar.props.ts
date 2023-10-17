import { DetailedHTMLProps, HTMLAttributes } from "react";

type Enumerate<
  N extends number,
  Acc extends number[] = []
> = Acc["length"] extends N
  ? Acc[number]
  : Enumerate<N, [...Acc, Acc["length"]]>;

type NumberRange<F extends number, T extends number> = Exclude<
  Enumerate<T>,
  Enumerate<F>
>;

export type SizeDiapazone = NumberRange<20, 300>;

export type AvatarIconeSize = SizeDiapazone | "full";

export type AvatarIconsBorder = "green" | "red" | "blue";

export interface AvatarIconeProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  isLoading?: boolean;
  avatar?: string;
  size?: AvatarIconeSize;
}
