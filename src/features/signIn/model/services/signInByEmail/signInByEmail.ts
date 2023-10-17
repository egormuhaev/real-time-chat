import { createAsyncThunk } from "@reduxjs/toolkit";
import { userActions } from "entities/User";
import { AuthData } from "entities/User";
import { supabase } from "shared/config/supabase";

interface FetchSignInByEmailProps {
  email: string;
  password: string;
}

export const signInByEmail = createAsyncThunk<
  AuthData,
  FetchSignInByEmailProps,
  { rejectValue: string }
>("signIn/signInByEmail", async (authData, thunkAPI) => {
  try {
    console.log(authData);
    const { data, error } = await supabase.auth.signInWithPassword(authData);

    if (error) {
      return thunkAPI.rejectWithValue(error.message);
    }

    thunkAPI.dispatch(userActions.setAuthData(data));
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});
