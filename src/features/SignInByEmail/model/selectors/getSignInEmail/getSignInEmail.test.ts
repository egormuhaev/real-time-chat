import { DeepPartial } from "@reduxjs/toolkit";
import { StateSchema } from "app/providers/store";
import { getSignInEmail } from "./getSignInEmail";

describe("getSignInEmail", () => {
  test("selector return value", () => {
    const state: DeepPartial<StateSchema> = {
      signIn: {
        email: {
          value: "test@email.com",
          validation: true,
        },
      },
    };
    expect(getSignInEmail(state as StateSchema)).toEqual({
      value: "test@email.com",
      validation: true,
    });
  });
});
