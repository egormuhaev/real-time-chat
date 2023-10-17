import { createAsyncThunk } from "@reduxjs/toolkit";
import { supabase } from "shared/config";
import { ProfilesSB } from "shared/config/supabase";

export const upadateProfileData = createAsyncThunk<
  ProfilesSB[],
  string,
  { rejectValue: string }
>("profile/upadateProfileData", async (id, thunkAPI) => {
  try {
    const { data, error } = await supabase
      .from("profiles")
      .select("*")
      .eq("user_id", id);

    if (error) {
      thunkAPI.rejectWithValue(error.message);
    }

    return data;
  } catch (error) {
    thunkAPI.rejectWithValue(error);
  }
}); 
