<template>
  <nav>
    <section
      class="bg-black bg-opacity-90 flex flex-col items-center justify-center p-3"
    >
      <div class="container text-white flex items-center justify-between">
        <!-- Logo -->
        <div>Logo</div>
        <!-- End Logo -->

        <!-- Menu -->
        <div>Menu</div>
        <!-- End Menu -->

        <!-- Search -->
        <div>Search</div>
        <!-- End Search -->
      </div>
    </section>
    <section
      class="bg-black bg-opacity-80 flex flex-col items-center justify-center p-3"
    >
      <div class="container text-white flex items-center justify-center">
        <div>Navigation</div>
      </div>
    </section>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "LayoutHeader",
});
</script>
