<template>
  <Layout>
    <Slider :items="sliderItems" />
    <div>
      {{ name }}
      {{ count }}
    </div>
    <button @click="increment">Increment</button>
    <button @click="changeName">Change Name</button>
  </Layout>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { storeToRefs } from "pinia";
import { useCounterStore, useUserStore } from "~~/store";
import Layout from "@/components/Layout/Guest/index.vue";

interface sliderItem {
  title: string;
  description: string;
  image: string;
}

export default defineComponent({
  name: "IndexPage",
  components: {
    Layout,
  },
  setup() {
    const sliderItems: sliderItem[] = [
      {
        title: "Mangaku",
        description: "Mangaku is a manga reader website.",
        image: "https://source.unsplash.com/random/?anime",
      },
      {
        title: "Mangaku",
        description: "Mangaku is a manga reader website.",
        image: "https://source.unsplash.com/random/?anime",
      },
      {
        title: "Mangaku",
        description: "Mangaku is a manga reader website.",
        image: "https://source.unsplash.com/random/?anime",
      },
      {
        title: "Mangaku",
        description: "Mangaku is a manga reader website.",
        image: "https://source.unsplash.com/random/?anime",
      },
      {
        title: "Mangaku",
        description: "Mangaku is a manga reader website.",
        image: "https://source.unsplash.com/random/?anime",
      },
      {
        title: "Mangaku",
        description: "Mangaku is a manga reader website.",
        image: "https://source.unsplash.com/random/?anime",
      },
      {
        title: "Mangaku",
        description: "Mangaku is a manga reader website.",
        image: "https://source.unsplash.com/random/?anime",
      },
      {
        title: "Mangaku",
        description: "Mangaku is a manga reader website.",
        image: "https://source.unsplash.com/random/?anime",
      },
      {
        title: "Mangaku",
        description: "Mangaku is a manga reader website.",
        image: "https://source.unsplash.com/random/?anime",
      },
      {
        title: "Mangaku",
        description: "Mangaku is a manga reader website.",
        image: "https://source.unsplash.com/random/?anime",
      },
    ];

    const store = useCounterStore();
    const userStore = useUserStore();

    const { count, name } = storeToRefs(store);
    const { increment } = store;

    const changeName = () => {
      store.$patch({ name: "Mangaku" });
    };

    userStore.fetchUser();

    enum Status {
      Low = 1,
      Medium = 2,
      High = 4,
      Critical = 8,
    }

    const status = Status[4];

    return {
      sliderItems,
      status,
      count,
      name,
      increment,
      changeName,
    };
  },
});
</script>
