import { configureStore } from "@reduxjs/toolkit";
import { StateSchema } from "../types/StateSchema";
import { counterReducer } from "entities/Counter";

export const createReduxStore = (initialState?: StateSchema) => {
  return configureStore({
    reducer: {
      counter: counterReducer,
    },
    devTools: __IS_DEV__,
    preloadedState: initialState,
  });
};
