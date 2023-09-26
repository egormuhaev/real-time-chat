import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserSchema, AuthData } from "../types/userSchema";

const initialState: UserSchema = {
  authData: undefined,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setAuthData: (state, action: PayloadAction<AuthData>) => {
      state.authData = action.payload;
    },
  },
});

export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;
