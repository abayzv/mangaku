<template>
  <div id="app">
    <LayoutHeader />
    <LayoutMain>
      <slot />
    </LayoutMain>
    <LayoutFooter />
  </div>
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

<style lang="scss">
#app {
  width: 100%;
  min-height: 100vh;

  display: grid;
  grid: auto 1fr auto / 1fr;
}
</style>
