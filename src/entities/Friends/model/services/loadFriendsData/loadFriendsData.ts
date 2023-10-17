import { createAsyncThunk } from "@reduxjs/toolkit";
import { supabase } from "shared/config/supabase";
import type { FriendsSchema } from "../../types/friendsSchema";
import { PostgrestError } from "@supabase/supabase-js";

export interface RejectValue {
  friendsList: string;
  friendsReqFrom: string;
  friendsReqTo: string;
}

const compilationErrors = (
  friendsList: PostgrestError,
  friendsReqFrom: PostgrestError,
  friendsReqTo: PostgrestError
): null | RejectValue => {
  if (friendsList || friendsReqFrom || friendsReqTo) {
    return {
      friendsList: friendsList.message,
      friendsReqFrom: friendsReqFrom.message,
      friendsReqTo: friendsReqTo.message,
    };
  } else {
    return null;
  }
};

type FriendsSchemaReq = Omit<FriendsSchema, "isLoading">;

const friendsList = async (id: string) =>
  supabase.from("friends").select("*").eq("person", id);

const friendsReqFrom = async (id: string) =>
  supabase.from("friends_requests").select("*").eq("from", id);

const friendsReqTo = async (id: string) =>
  supabase.from("friends_requests").select("*").eq("to", id);

export const loadFriendsData = createAsyncThunk<
  FriendsSchemaReq,
  string,
  { rejectValue: RejectValue }
>("friends/loadFriendsData", async (id, thunkAPI) => {
  try {
    const _friendsList = await friendsList(id);

    const _friendsReqFrom = await friendsReqFrom(id);

    const _friendsReqTo = await friendsReqTo(id);

    const errors = compilationErrors(
      _friendsList.error,
      _friendsReqFrom.error,
      _friendsReqTo.error
    );

    if (errors) {
      thunkAPI.rejectWithValue(errors);
    }
    
    const data = {
      friendsList: [..._friendsList.data],
      friendsRequestFrom: _friendsReqFrom.data,
      friendsRequestTo: _friendsReqTo.data,
    };

    return data;
  } catch (error) {
    thunkAPI.rejectWithValue(error);
  }
});
