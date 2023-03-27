<template>
  <Layout>
    <Slider :items="sliderItems" />
  </Layout>
</template>

<script lang="ts">
import { defineComponent } from "vue";
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

    return {
      sliderItems,
    };
  },
});
</script>
