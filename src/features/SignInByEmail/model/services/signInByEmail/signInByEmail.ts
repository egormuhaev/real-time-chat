import { createAsyncThunk } from "@reduxjs/toolkit";
import { userActions } from "entities/User";
import { AuthData } from "entities/User";
import supabase from "shared/config/supabase/config/supabase";

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
    const { data, error } = await supabase.auth.signInWithPassword(authData);

    if (error) throw new Error(error.message);

    thunkAPI.dispatch(userActions.setAuthData(data));
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
    thunkAPI.rejectWithValue("Ошибка");
  }
});
