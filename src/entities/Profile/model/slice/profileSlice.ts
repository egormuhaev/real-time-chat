import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProfileSchema } from "../types/profileSchema";
import { upadateProfileData } from "../services/upadateProfileData/upadateProfileData";
import { ProfilesSB } from "shared/config/supabase";

const initialState: ProfileSchema = {
  init: false,
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
  extraReducers: {
    [upadateProfileData.fulfilled.type]: (
      state,
      action: PayloadAction<ProfilesSB[]>
    ) => {
      if (action.payload.length > 0) {
        state.init = true;
        state.firstName = action.payload[0].first_name;
        state.lastName = action.payload[0].last_name;
        state.avatar = action.payload[0].avatar_url;
      } else {
        state.init = false;
      }
    },
    [upadateProfileData.pending.type]: (state, action) => {},
    [upadateProfileData.rejected.type]: (state, action) => {},
  },
});

export const { reducer: profileReducer } = profileSlice;
export const { actions: profileActions } = profileSlice;
