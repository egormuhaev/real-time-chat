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
  extraReducers: (builder) => {
    builder
      .addCase(
        uploadAvatar.fulfilled,
        (state, actions: PayloadAction<string>) => {
          state.avatar = actions.payload;
          state.isLoadingAvatar = false;
        }
      )
      .addCase(uploadAvatar.pending, (state) => {
        state.error = undefined;
        state.isLoadingAvatar = true;
      })
      .addCase(
        uploadAvatar.rejected,
        (state, actions: PayloadAction<string>) => {
          state.isLoadingAvatar = false;
          state.error = actions.payload;
        }
      );

    builder
      .addCase(editProfileData.fulfilled, (state) => {
        state.isLoadingAvatar = false;
      })
      .addCase(editProfileData.pending, (state) => {
        state.error = undefined;
        state.isLoadingAvatar = true;
      })
      .addCase(
        editProfileData.rejected,
        (state, actions: PayloadAction<string>) => {
          state.isLoadingAvatar = false;
          state.error = actions.payload;
        }
      );
  },
});

export const { reducer: editProfileReducer } = editProfileSlice;
export const { actions: editProfileActions } = editProfileSlice;
