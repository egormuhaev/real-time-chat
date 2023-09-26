import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SignInSchema } from "../types/signInSchema";
import { signInByEmail } from "../services/signInByEmail/signInByEmail";

const initialState: SignInSchema = {
  email: {
    value: "",
  },
  password: {
    value: "",
  },
  isLoading: false,
  error: undefined,
};

export const signInSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setPassword(state, actions: PayloadAction<string>) {
      state.password.value = actions.payload;
    },

    setEmail(state, actions: PayloadAction<string>) {
      state.email.value = actions.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signInByEmail.fulfilled, (state, action) => {
        state.isLoading = false;
      })
      .addCase(signInByEmail.pending, (state) => {
        state.isLoading = true;
        state.error = undefined;
      })
      .addCase(signInByEmail.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { actions: signInActions } = signInSlice;
export const { reducer: signInReducer } = signInSlice;
