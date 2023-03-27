<template>
  <div>
    <Layout />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Layout from "@/components/Layout/index.vue";

export default defineComponent({
  name: "IndexPage",
  components: {
    Layout,
  },
});
</script>
