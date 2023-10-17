import { createAsyncThunk } from "@reduxjs/toolkit";
import { supabase } from "shared/config/supabase";
import { EditProfileDataProps } from "../../types/editProfileSchema";
import { profileActions } from "entities/Profile";

export const editProfileData = createAsyncThunk<
  boolean,
  EditProfileDataProps,
  { rejectValue: string }
>("editProfile/editProfileData", async (profileData, thunkAPI) => {
  try {
    const { userId, firstName, lastName, avatar } = profileData;

    const selectReq = await supabase
      .from("profiles")
      .select("*")
      .eq("user_id", userId);

    if (selectReq.data.length !== 0) {
      const { data, error } = await supabase
        .from("profiles")
        .update({
          first_name: firstName,
          last_name: lastName,
          avatar_url: avatar,
        })
        .eq("user_id", userId);

      if (error) thunkAPI.rejectWithValue(error.message);
    } else {
      const { data, error } = await supabase.from("profiles").insert({
        user_id: userId,
        first_name: firstName,
        last_name: lastName,
        avatar_url: avatar,
      });

      if (error) thunkAPI.rejectWithValue(error.message);
    }

    thunkAPI.dispatch(
      profileActions.setProfile({ firstName, lastName, avatar })
    );

    return true;
  } catch (error) {
    thunkAPI.rejectWithValue(error);
  }
});
