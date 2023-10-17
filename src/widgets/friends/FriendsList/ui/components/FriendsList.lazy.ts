import { lazy } from "react";

export const FriendsListLazy = lazy(async () => await import("./FriendsList"));
