import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SignUpSchema } from "../types/signUpSchema";
import { signUpByEmail } from "../services/signUpByEmail/signUpByEmail";
import { emailValidator, passwordValidator } from "shared/helpers";

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
      state.email.validation = emailValidator(action.payload);
    },
    setUsername(state, action: PayloadAction<string>) {
      state.username.value = action.payload;
      state.username.validation = action.payload.length > 3;
    },
    setPassword(state, action: PayloadAction<string>) {
      state.password.value = action.payload;
      state.password.validation = passwordValidator(action.payload).status;
    },
    setConfirmPassword(state, action: PayloadAction<string>) {
      state.confirmPassword.value = action.payload;
      state.confirmPassword.validation =
        action.payload === state.password.value;
    },
    resetError(state) {
      state.error = undefined;
    },
  },
  extraReducers: {
    [signUpByEmail.fulfilled.type]: (state, action) => {
      state.isLoading = false;
    },
    [signUpByEmail.pending.type]: (state) => {
      state.isLoading = true;
      state.error = undefined;
    },
    [signUpByEmail.rejected.type]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { actions: signUpActions } = signUpSlice;
export const { reducer: signUpReducer } = signUpSlice;
