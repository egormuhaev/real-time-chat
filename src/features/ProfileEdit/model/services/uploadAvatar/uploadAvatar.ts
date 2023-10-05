import { createAsyncThunk } from "@reduxjs/toolkit";
import { supabase } from "shared/config/supabase";
import { v4 as uuid } from "uuid";
import { editProfileActions } from "../../slice/editProfileSlice";

export const uploadAvatar = createAsyncThunk<
  string,
  File,
  { rejectValue: string }
>("editProfile/uploadAvatar", async (file: File, thunkAPI) => {
  try {
    if (!file) {
      return;
    }
    const avatarID = uuid();
    console.log(avatarID);
    const { data, error } = await supabase.storage
      .from("avatars")
      .upload(`awatar_${avatarID}`, file);

    if (error) {
      thunkAPI.rejectWithValue(error.message);
    }

    thunkAPI.dispatch(editProfileActions.setAvatar(data.path));
    return data.path;
  } catch (error) {
    thunkAPI.rejectWithValue(error);
  }
});
