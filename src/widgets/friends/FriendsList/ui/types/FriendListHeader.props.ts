type SortOptions = {
  key: string | number;
  title: string;
};

export interface FriendListHeaderProps {
  search: string | null;
  onInputSeach: (e: React.ChangeEvent<HTMLInputElement>) => void;
  sortOptions: SortOptions[];
  onSort: (ket: string | number) => void;
}
