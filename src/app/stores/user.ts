import { createEvent, createStore } from "effector";
import { persist } from "effector-storage/local";

export type UserType = {
  login: string;
};

export const logged = createEvent<UserType>();
export const logouted = createEvent();
export const $user = createStore<UserType | null>(null)
  .on(logged, (_, data) => data)
  .on(logouted, () => null);

persist({ store: $user, key: "user-store" });
