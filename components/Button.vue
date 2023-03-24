<template>
  <div>
    <button class="p-2 bg-white text-black" :class="`${color}`">
      {{ title }}
    </button>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Button",
  props: {
    title: {
      type: String,
      default: "blue",
    },
    color: {
      type: String,
      default: "blue",
    },
  },
  setup() {
    return {};
  },
});
</script>
