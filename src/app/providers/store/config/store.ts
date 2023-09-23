import { configureStore } from "@reduxjs/toolkit";
import { StateSchema } from "../types/StateSchema";
import { rootReducer } from "./rootReducer";

export const createReduxStore = (initialState?: StateSchema) => {
  return configureStore({
    reducer: rootReducer,
    devTools: __IS_DEV__,
    preloadedState: initialState,
  });
};
