import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProfileSchema } from "../types/profileSchema";

const initialState: ProfileSchema = {
  firstName: "",
  lastName: "",
  avatar: "",
};

export const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    setProfile(state, action: PayloadAction<ProfileSchema>) {
      state = { ...action.payload };
    },
  },
});

export const { reducer: profileReducer } = profileSlice;
export const { actions: profileActions } = profileSlice;
