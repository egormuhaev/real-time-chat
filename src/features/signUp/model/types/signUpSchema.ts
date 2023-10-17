export interface ValueItem {
  value: string;
  validation?: boolean;
}

export interface SignUpSchema {
  email: ValueItem;
  username: ValueItem;
  password: ValueItem;
  confirmPassword: ValueItem;
  isLoading: boolean;
  error?: string;
  registrSuccess: boolean;
}
