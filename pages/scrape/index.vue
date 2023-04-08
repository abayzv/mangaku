<template>
  <Layout> Scrape </Layout>
</template>

<script lang="ts">
import Layout from "@/components/Layout/Guest/index.vue";

export default {
  name: "ScrapePage",
  components: {
    Layout,
  },
  setup() {
    const fetchData = async () => {
      const response = await fetch("/komik");
      console.log(response);
    };

    fetchData();

    return {};
  },
};
</script>
