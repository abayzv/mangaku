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

export const useWordStore = defineStore("word", {
  state: () => ({
    words: [],
  }),
  actions: {
    async fetchWords() {
      const data = await axios.get("/api/words/id");
      this.words = data.data.data.data;
    },
    getRandomWords(count: number) {
      const words: Array<string> = [];
      for (let i = 0; i < count; i++) {
        const randomWord =
          this.words[Math.floor(Math.random() * this.words.length)];
        words.push(randomWord);
      }
      return words;
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
