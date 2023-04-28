<template>
  <div class="text-[#363636]">
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "LayoutContent",
});
</script>
