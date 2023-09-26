export interface ValueItem {
  value: string;
  validation?: boolean;
}

export interface SignInSchema {
  email: ValueItem;
  password: ValueItem;
  isLoading: boolean;
  error?: string;
}
