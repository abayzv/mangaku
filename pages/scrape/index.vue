<template>
  <Layout> Scrape </Layout>
</template>

<script lang="ts">
import axios from "axios";
import Layout from "@/components/Layout/Guest/index.vue";

export default {
  name: "ScrapePage",
  components: {
    Layout,
  },
  setup() {
    const fetchData = async () => {
      const response = await axios.get(
        "https://iridescent-beignet-e93812.netlify.app/komik"
      );
      console.log(response);
    };

    fetchData();

    return {};
  },
};
</script>
