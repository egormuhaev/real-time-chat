import { useMemo } from "react";
import { createReduxStore } from "../../config/store";
import { PersistGate } from "redux-persist/integration/react";
import persistStore from "redux-persist/es/persistStore";
import { Persistor } from "redux-persist";

interface ReduxPersistProviderProps {
  children: React.ReactNode;
}

export const ReduxPersistProvider: React.FC<ReduxPersistProviderProps> = ({
  children,
}) => {
  const persister: Persistor = useMemo(
    () => persistStore(createReduxStore()),
    []
  );

  return (
    <PersistGate loading={null} persistor={persister}>
      {children}
    </PersistGate>
  );
};
