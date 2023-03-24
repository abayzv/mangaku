<template>
  <div class="bg-red-600 text-white">
    <LayoutHeader />
    <LayoutSidebar />
    <LayoutMain />
    <LayoutFooter />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Layout",
  setup() {},
});
</script>
