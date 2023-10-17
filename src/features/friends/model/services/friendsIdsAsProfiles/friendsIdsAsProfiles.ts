import { createAsyncThunk } from "@reduxjs/toolkit";
import { supabase } from "shared/config";
import { ProfilesSB } from "shared/config/supabase";

type friendsIds = string[];

const profilesList = (ids: friendsIds) =>
  supabase.from("profiles").select("*").in("user_id", ids).order("created_at");

export const friendsIdsAsProfiles = createAsyncThunk<
  ProfilesSB[],
  friendsIds,
  { rejectValue: string }
>("friendsIdsAsProfiles", async (ids, thunkAPI) => {
  try {
    const _profilesList = await profilesList(ids);

    if (_profilesList.error) {
      thunkAPI.rejectWithValue(_profilesList.error.message);
    }

    return _profilesList.data;
  } catch (error) {
    thunkAPI.rejectWithValue(error);
  }
});
