<template>
  <main>
    <div class="container my-5">
      <LayoutContent> <slot /> </LayoutContent>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import LayoutContent from "./Content.vue";

export default defineComponent({
  name: "LayoutMain",
  components: {
    LayoutContent,
  },
});
</script>

<style lang="scss">
main {
  @apply bg-black bg-opacity-95 text-white flex justify-center;
}
</style>
