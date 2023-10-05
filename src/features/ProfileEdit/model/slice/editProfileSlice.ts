import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { EditProfileSchema } from "../types/editProfileSchema";
import { uploadAvatar } from "../services/uploadAvatar/uploadAvatar";
import { editProfileData } from "../services/editProfileData/editProfileData";

const initialState: EditProfileSchema = {
  firstName: "",
  lastName: "",
  avatar: "",
  isLoadingAvatar: false,
  isLoadingProfileData: false,
  error: undefined,
};

export const editProfileSlice = createSlice({
  name: "editProfile",
  initialState,
  reducers: {
    setFirstName(state, action: PayloadAction<string>) {
      state.firstName = action.payload;
    },
    setLastName(state, action: PayloadAction<string>) {
      state.lastName = action.payload;
    },
    setAvatar(state, action: PayloadAction<string>) {
      state.avatar = action.payload;
    },
  },
  extraReducers: {
    [uploadAvatar.fulfilled.type]: (state, action) => {
      state.avatar = action.payload;
      state.isLoadingAvatar = false;
    },
    [uploadAvatar.pending.type]: (state) => {
      state.error = undefined;
      state.isLoadingAvatar = true;
    },
    [uploadAvatar.rejected.type]: (state, action) => {
      state.isLoadingAvatar = false;
      state.error = action.payload;
    },

    [editProfileData.fulfilled.type]: (state, action: PayloadAction) => {
      state.isLoadingProfileData = false;
    },
    [editProfileData.pending.type]: (state) => {
      state.isLoadingProfileData = true;
      state.error = undefined;
    },
    [editProfileData.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoadingProfileData = false;
      state.error = action.payload;
    },
  },
});

export const { reducer: editProfileReducer } = editProfileSlice;
export const { actions: editProfileActions } = editProfileSlice;
