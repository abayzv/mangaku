<template>
  <LayoutHeader />
  <LayoutMain />
  <LayoutFooter />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import LayoutHeader from "./Header.vue";
import LayoutMain from "./Main.vue";
import LayoutFooter from "./Footer.vue";

export default defineComponent({
  name: "LayoutIndex",
  components: {
    LayoutHeader,
    LayoutMain,
    LayoutFooter,
  },
});
</script>
