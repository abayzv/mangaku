<template>
  <Layout>
    <div class="px-5">
      <div class="w-full mt-5 relative bg-sky-100 h-32 rounded-lg">
        <img
          src="https://media3.giphy.com/media/CTaMxpaVnlwhBkHQ9c/giphy.gif?cid=6c09b9527b5u5zbzxcgjybjypk2d01u8u8f7czby2izo7mfn&rid=giphy.gif&ct=s"
          class="absolute -bottom-4 w-32"
          :style="{
            left: `${(correctWords.length + 1) * 1}%`,
          }"
        />
        <img
          src="https://png.pngtree.com/png-vector/20220718/ourmid/pngtree-finish-line-banner-vector-ar-png-image_6006068.png"
          class="absolute -bottom-4 right-10 w-32"
          alt=""
        />
      </div>
      <div class="my-10 p-7 bg-sky-100 rounded-lg">
        <div class="flex flex-wrap gap-2">
          <div
            v-for="(item, index) in random"
            :key="index"
            class="text-center p-3 text-lg outline-none font-medium lowercase rounded-lg"
            :class="{
              'text-green-500': correctWords.includes(index),
              'text-red-500': wrongWords.includes(index),
              'bg-slate-500 text-white': indexWords === index,
            }"
          >
            {{ item }}
          </div>
        </div>
        <div class="flex items-center mt-10 gap-3">
          <input
            v-model="inputWords"
            type="text"
            class="p-3 w-full text-black rounded disabled:bg-slate-300"
            :disabled="!isStartTimer"
            @keyup="typeAction"
          />
          <div class="p-3 bg-red-500 text-white rounded text-lg font-bold">
            {{ computedTimer }}
          </div>
          <button
            class="p-3 bg-green-500 text-white w-32 rounded text-lg font-bold"
            @click="randomize"
          >
            Random
          </button>
        </div>
        <div class="w-full text-center opacity-40 mt-5">
          Press Space 2x To Start
        </div>
      </div>
      <div v-if="data.length > 0" class="my-5">
        <table class="w-full table-auto">
          <thead class="bg-sky-500 text-white">
            <tr>
              <th class="p-2">#</th>
              <th class="p-2">Correct Words</th>
              <th class="p-2">Wrong Words</th>
              <th class="p-2">WPM</th>
              <th class="p-2">Accuracy</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(item, index) in data"
              :key="index"
              class="bg-sky-100 text-center"
            >
              <td class="p-2">{{ index + 1 }}</td>
              <td class="p-2">{{ item.correctWords }}</td>
              <td class="p-2">{{ item.wrongWords }}</td>
              <td class="p-2">{{ item.wpm }}</td>
              <td class="p-2">{{ item.accuracy }}%</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- popup -->
    <div
      v-if="isShowPopup"
      class="fixed top-0 left-0 w-[100%] h-[100%] bg-black bg-opacity-50"
    >
      <div
        class="bg-white text-black p-5 rounded fixed top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%] text-center w-[300px]"
      >
        <div class="text-lg font-bold">Timeout !</div>
        <p>Your score is</p>
        <div
          class="my-5 text-5xl bg-gray-200 text-green-500 rounded font-bold p-5"
        >
          {{ score }}
        </div>
        <div class="px-2">
          <div class="flex w-full justify-between">
            Correct Words:
            <span>{{ data[data.length - 1]?.correctWords }}</span>
          </div>
          <div class="flex w-full justify-between">
            Wrong Words: <span>{{ data[data.length - 1]?.wrongWords }}</span>
          </div>
          <div class="flex w-full justify-between">
            WPM: <span>{{ data[data.length - 1]?.wpm }}</span>
          </div>
          <div class="flex w-full justify-between">
            Acuracy: <span>{{ data[data.length - 1]?.accuracy }} %</span>
          </div>
        </div>
        <div>
          <button
            class="bg-red-500 w-full mt-5 rounded text-white hover:bg-red-400 p-2"
            @click="isShowPopup = false"
          >
            Ok
          </button>
        </div>
      </div>
    </div>
  </Layout>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref, computed } from "vue";
import { storeToRefs } from "pinia";
import Layout from "@/components/Layout/Guest/index.vue";
import { useWordStore } from "~~/store";

// create interface Data array with object
interface Item {
  correctWords: number;
  wrongWords: number;
  wpm: number;
  accuracy: number;
}

interface Data extends Array<Item> {}

export default defineComponent({
  name: "IndexPage",
  components: {
    Layout,
  },
  setup() {
    const wordStore = useWordStore();
    const { words } = storeToRefs(wordStore);
    const random = ref<string[]>([]);
    const randomWords = ref<string>("");
    const inputWords = ref<string>("");
    const correctWords = ref<number[]>([]);
    const wrongWords = ref<number[]>([]);
    const indexWords = ref<number>(0);
    const isStartTimer = ref<boolean>(false);
    const data = ref<Data>([]);
    const isShowPopup = ref<boolean>(false);

    // set timer to 60 seconds
    const timer = ref<number>(60);

    // computed timer to 00:00
    const computedTimer = computed(() => {
      const minutes = Math.floor(timer.value / 60);
      const seconds = timer.value % 60;

      // add padding 0 if minutes or seconds less than 10
      const minutesString = minutes < 10 ? `0${minutes}` : `${minutes}`;
      const secondsString = seconds < 10 ? `0${seconds}` : `${seconds}`;

      return `${minutesString}:${secondsString}`;
    });

    onMounted(async () => {
      await wordStore.fetchWords("id");
      random.value = wordStore.getRandomWords(100);

      // convert array to string and replace comma with space
      randomWords.value = random.value.toString().replace(/,/g, " ");

      window.addEventListener("keyup", startTimerWithSpace);
    });

    const randomize = () => {
      random.value = wordStore.getRandomWords(100);
    };

    // count correct words from input words and random words
    const correctCount = computed(() => {
      const inputWordsArray = inputWords.value.split(" ");
      const randomWordsArray = randomWords.value.split(" ");
      let count = 0;

      for (let i = 0; i < inputWordsArray.length; i++) {
        if (inputWordsArray[i] === randomWordsArray[i]) {
          count++;
        }
      }

      return count;
    });

    // type action
    const typeAction = (e: KeyboardEvent): void => {
      if (e.key === " ") {
        // remove space from input words
        inputWords.value = inputWords.value.trim();

        // check if input words is correct with random index words
        if (inputWords.value === random.value[indexWords.value]) {
          correctWords.value.push(indexWords.value);
          inputWords.value = "";
        }
        // if empty input words no action
        else if (inputWords.value === "") {
          return;
        } else {
          wrongWords.value.push(indexWords.value);
          inputWords.value = "";
        }

        indexWords.value++;
      }
    };

    const startTimer = () => {
      // if timer is start then return
      if (isStartTimer.value) return;

      // start timer if timer is not start
      isStartTimer.value = true;

      const interval = setInterval(() => {
        timer.value--;
      }, 1000);

      setTimeout(() => {
        // count wpm with formula
        const wpm = Math.floor(
          (correctWords.value.length + wrongWords.value.length) * 1
        );

        const netWpm = Math.floor(
          (correctWords.value.length - wrongWords.value.length) / 1
        );

        // count accuracy with formula
        const accuracy = (netWpm / wpm) * 100;

        const item = {
          correctWords: correctWords.value.length,
          wrongWords: wrongWords.value.length,
          wpm,
          accuracy: Math.floor(accuracy),
        };

        data.value.push(item);

        clearInterval(interval);
        isStartTimer.value = false;
        timer.value = 60;
        inputWords.value = "";
        indexWords.value = 0;
        isShowPopup.value = true;
        correctWords.value = [];
        wrongWords.value = [];

        randomize();
      }, 60000);
    };

    // start timer with space key
    const startTimerWithSpace = (e: KeyboardEvent) => {
      if (e.key === " " && !isShowPopup.value) {
        startTimer();

        // focus input words
        const input = document.querySelector("input");
        input?.focus();
      }
    };

    const score = computed(() => {
      const correctWords = data.value[data.value.length - 1]?.correctWords;

      return (correctWords * 4000) / 100;
    });

    return {
      words,
      random,
      randomWords,
      inputWords,
      correctCount,
      correctWords,
      wrongWords,
      indexWords,
      computedTimer,
      timer,
      isStartTimer,
      typeAction,
      startTimer,
      randomize,
      data,
      isShowPopup,
      score,
    };
  },
  head() {
    return {
      title: "Runtypes - Typing Test",
    };
  },
});
</script>
