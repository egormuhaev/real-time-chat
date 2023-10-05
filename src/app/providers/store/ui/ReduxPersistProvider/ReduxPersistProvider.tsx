import { persister } from "../../config/store";
import { PersistGate } from "redux-persist/integration/react";

interface ReduxPersistProviderProps {
  children: React.ReactNode;
}

export const ReduxPersistProvider: React.FC<ReduxPersistProviderProps> = ({
  children,
}) => {
  return (
    <PersistGate loading={null} persistor={persister}>
      {children}
    </PersistGate>
  );
};
