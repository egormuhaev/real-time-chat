import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SignInSchema } from "../types/signInSchema";
import { signInByEmail } from "../services/signInByEmail/signInByEmail";
import { AuthData } from "entities/User";

const initialState: SignInSchema = {
  email: {
    value: "",
    validation: false,
  },
  password: {
    value: "",
    validation: false,
  },
  authSuccess: false,
  isLoading: false,
  error: undefined,
};

export const signInSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setPassword(state, actions: PayloadAction<string>) {
      state.password.value = actions.payload;
      state.password.validation = actions.payload.length > 0;
    },

    setEmail(state, actions: PayloadAction<string>) {
      state.email.value = actions.payload;
      state.email.validation = actions.payload.length > 0;
    },

    resetError(state) {
      state.error = undefined;
    },
  },
  extraReducers: {
    [signInByEmail.fulfilled.type]: (
      state,
      action: PayloadAction<AuthData>
    ) => {
      if (action.payload.session && action.payload.user) {
        state.authSuccess = true;
      }
      state.isLoading = false;
    },
    [signInByEmail.pending.type]: (state) => {
      state.isLoading = true;
      state.error = undefined;
    },
    [signInByEmail.rejected.type]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { actions: signInActions } = signInSlice;
export const { reducer: signInReducer } = signInSlice;
