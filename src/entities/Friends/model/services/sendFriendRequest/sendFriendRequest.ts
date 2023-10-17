import { createAsyncThunk } from "@reduxjs/toolkit";
import { supabase } from "shared/config";
import { FriendsRequest } from "shared/config/supabase";

interface SendFriendRequest {
  to: string;
  from: string;
  status?: boolean;
}

const send = async ({ to, from, status = false }: SendFriendRequest) =>
  supabase.from("friends_requests").insert({ to, from, status }).select();

export const sendFriendRequest = createAsyncThunk<
  FriendsRequest,
  SendFriendRequest,
  { rejectValue: string }
>("friends/sendFriendRequest", async ({ to, from }, thunkAPI) => {
  try {
    const _send = await send({ to, from });
    if (_send.error) {
      thunkAPI.rejectWithValue(_send.error.message);
    }
    return _send.data[0];
  } catch (error) {
    thunkAPI.rejectWithValue(error);
  }
});
