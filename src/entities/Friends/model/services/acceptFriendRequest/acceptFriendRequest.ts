import { createAsyncThunk } from "@reduxjs/toolkit";
import { supabase } from "shared/config";
import { FriendsList } from "shared/config/supabase";

const accept = async (id: number) =>
  supabase
    .from("friends_requests")
    .update({ status: true })
    .eq("id", id)
    .select();

const addNewFriend = async (personId: string, friendId: string) =>
  supabase
    .from("friends")
    .insert({ person: personId, friend: friendId })
    .select();

export const acceptFriendRequest = createAsyncThunk<
  FriendsList,
  number,
  { rejectValue: string }
>("friends/acceptFriendRequest", async (reqId, thunkAPI) => {
  try {
    const _accept = await accept(reqId);

    if (_accept.error) {
      thunkAPI.rejectWithValue(_accept.error.message);
    } else {
      const _addNewFriend = await addNewFriend(
        _accept.data[0].from,
        _accept.data[0].to
      );

      const _addNewFriendReverce = await addNewFriend(
        _accept.data[0].to,
        _accept.data[0].from
      );

      if (_addNewFriend.error)
        thunkAPI.rejectWithValue(_addNewFriend.error.message);

      return _addNewFriend.data[0];
    }
  } catch (error) {
    thunkAPI.rejectWithValue(error);
  }
});
