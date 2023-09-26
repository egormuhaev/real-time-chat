import { createAsyncThunk } from "@reduxjs/toolkit";
import supabase from "shared/config/supabase/config/supabase";
import { AuthData } from "entities/User/model/types/userSchema";
import { userActions } from "entities/User/model/slice/userSlice";

interface SignUpByEmailProps {
  email: string;
  password: string;
  username: string;
}

export const signUpByEmail = createAsyncThunk<
  AuthData,
  SignUpByEmailProps,
  { rejectValue: string }
>("signUp/signUpByEmail", async (authData, thunkAPI) => {
  try {
    const { data, error } = await supabase.auth.signUp({
      email: authData.email,
      password: authData.password,
      options: {
        data: {
          username: authData.username,
        },
      },
    });
    if (error) {
      throw new Error(error.message);
    }
    thunkAPI.dispatch(userActions.setAuthData(data));
    console.log(data);
    return data;
  } catch (error) {
    thunkAPI.rejectWithValue(error);
  }
});
