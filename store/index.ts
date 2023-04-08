import { defineStore } from "pinia";
import axios from "axios";

export const useCounterStore = defineStore("counter", {
  state: () => ({ count: 0, name: "Eduardo" }),
  getters: {
    doubleCount: (state) => state.count * 2,
  },
  actions: {
    increment() {
      this.count++;
    },
  },
});

export const useUserStore = defineStore("user", {
  state: () => ({
    user: {},
  }),
  actions: {
    async fetchUser() {
      const user = await axios.get("https://dummyjson.com/users/1");
      this.user = user.data;
    },
  },
});
