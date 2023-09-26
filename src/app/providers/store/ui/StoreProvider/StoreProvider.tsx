import { useMemo } from "react";
import { Provider } from "react-redux";
import { createReduxStore } from "../../config/store";
import { StateSchema } from "../../types/StateSchema";

interface StoreProviderProps {
  children: React.ReactNode;
  initialState?: StateSchema;
}

export const StoreProvider: React.FC<StoreProviderProps> = ({ children }) => {
  const store = useMemo(() => createReduxStore(), []);
  return <Provider store={store}>{children}</Provider>;
};
