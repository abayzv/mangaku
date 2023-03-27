<template>
  <Layout>
    <Slider />
  </Layout>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Layout from "@/components/Layout/Guest/index.vue";

export default defineComponent({
  name: "IndexPage",
  components: {
    Layout,
  },
});
</script>
