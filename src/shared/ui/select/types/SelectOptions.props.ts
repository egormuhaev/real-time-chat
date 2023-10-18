type SelectOptions = {
  key: string | number;
  title: string;
};

export interface SelectOptionsProps {
  options: SelectOptions[];
  setOptions: (key: string | number) => () => void;
  select: string | number;
}
