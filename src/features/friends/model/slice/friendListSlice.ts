import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FriendsListSchema } from "../types/friendsListSchema";
import { ProfilesSB } from "shared/config/supabase";
import { friendsIdsAsProfiles } from "../services/friendsIdsAsProfiles/friendsIdsAsProfiles";

const initialState: FriendsListSchema = {
  friends: [],
};

export const friendsListSlice = createSlice({
  name: "friendsListSchema",
  initialState,
  reducers: {
    setFriends(state, actions: PayloadAction<ProfilesSB[]>) {
      state.friends = [...actions.payload];
    },
  },
  extraReducers: {
    [friendsIdsAsProfiles.fulfilled.type]: (
      state,
      actions: PayloadAction<ProfilesSB[]>
    ) => {
      state.friends = [...actions.payload];
    },

    [friendsIdsAsProfiles.rejected.type]: (state) => {},

    [friendsIdsAsProfiles.pending.type]: (state) => {},
  },
});

export const { actions: friendsListActions } = friendsListSlice;
export const { reducer: friendsListReducer } = friendsListSlice;
