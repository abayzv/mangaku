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
      const response = await axios.get("http://localhost:3000/api/hello");
      console.log(response);
    };

    fetchData();

    return {};
  },
};
</script>
