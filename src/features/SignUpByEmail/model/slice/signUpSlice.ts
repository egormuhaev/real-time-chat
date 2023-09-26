import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SignUpSchema } from "../types/signUpSchema";
import { signUpByEmail } from "../services/signUpByEmail/signUpByEmail";

const initialState: SignUpSchema = {
  email: {
    value: "",
    validation: false,
  },
  username: {
    value: "",
    validation: false,
  },
  password: {
    value: "",
    validation: false,
  },
  confirmPassword: {
    value: "",
    validation: false,
  },
  isLoading: false,
  error: undefined,
};

export const signUpSlice = createSlice({
  name: "signUp",
  initialState,
  reducers: {
    setEmail(state, action: PayloadAction<string>) {
      state.email.value = action.payload;
    },
    setUsername(state, action: PayloadAction<string>) {
      state.username.value = action.payload;
    },
    setPassword(state, action: PayloadAction<string>) {
      state.password.value = action.payload;
    },
    setConfirmPassword(state, action: PayloadAction<string>) {
      state.confirmPassword.value = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signUpByEmail.fulfilled, (state, action) => {
        state.isLoading = false;
      })
      .addCase(signUpByEmail.pending, (state) => {
        state.isLoading = true;
        state.error = undefined;
      })
      .addCase(signUpByEmail.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { actions: signUpActions } = signUpSlice;
export const { reducer: signUpReducer } = signUpSlice;
