import { PayloadAction, createSlice, createReducer } from "@reduxjs/toolkit";
import { FriendsSchema } from "../types/friendsSchema";
import { acceptFriendRequest } from "../services/acceptFriendRequest/acceptFriendRequest";
import {
  loadFriendsData,
  RejectValue,
} from "../services/loadFriendsData/loadFriendsData";
import { sendFriendRequest } from "../services/sendFriendRequest/sendFriendRequest";
import { FriendsList, FriendsRequest } from "shared/config/supabase";

const initialState: FriendsSchema = {
  friendsList: [],
  friendsRequestFrom: [],
  friendsRequestTo: [],
  isLoading: false,
};

export const friendsSlice = createSlice({
  name: "friendsSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(
        acceptFriendRequest.fulfilled,
        (state, actions: PayloadAction<FriendsList>) => {
          state.friendsList = [actions.payload, ...state.friendsList];
          state.isLoading = false;
        }
      )
      .addCase(acceptFriendRequest.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(
        acceptFriendRequest.rejected,
        (state, actions: PayloadAction<string>) => {
          state.isLoading = false;
          state.error = actions.payload;
        }
      );

    builder
      .addCase(
        loadFriendsData.fulfilled,
        (state, actions: PayloadAction<Omit<FriendsSchema, "isLoading">>) => {
          state.friendsList = [...actions.payload.friendsList];
          state.isLoading = false;
        }
      )
      .addCase(loadFriendsData.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(
        loadFriendsData.rejected,
        (state, actions: PayloadAction<RejectValue>) => {
          state.isLoading = false;
          state.error = actions.payload.friendsList;
        }
      );

    builder
      .addCase(
        sendFriendRequest.fulfilled,
        (state, actions: PayloadAction<FriendsRequest>) => {
          state.friendsRequestFrom = [
            actions.payload,
            ...state.friendsRequestFrom,
          ];
          state.isLoading = false;
        }
      )
      .addCase(sendFriendRequest.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(
        sendFriendRequest.rejected,
        (state, actions: PayloadAction<string>) => {
          state.isLoading = false;
          state.error = actions.payload;
        }
      );
  },
});

export const { actions: friendsActions } = friendsSlice;
export const { reducer: friendsReducer } = friendsSlice;
