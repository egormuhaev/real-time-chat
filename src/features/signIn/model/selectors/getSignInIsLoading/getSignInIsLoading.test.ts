import { DeepPartial } from "@reduxjs/toolkit";
import { StateSchema } from "app/providers/store";
import { getSignInIsLoading } from "./getSignInIsLoading";

describe("getSignInIsLoading", () => {
  test("selector return value", () => {
    const state: DeepPartial<StateSchema> = {
      signIn: {
        isLoading: true,
      },
    };
    expect(getSignInIsLoading(state as StateSchema)).toEqual(true);
  });
});
