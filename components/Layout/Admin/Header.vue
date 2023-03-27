<template>
  <section
    id="header"
    class="bg-black bg-opacity-90 flex flex-col items-center justify-center p-3"
  >
    <div class="container text-white flex items-center justify-between">
      <!-- Logo -->
      <div>
        <img
          src="https://seeklogo.com/images/M/manga-logo-26D5521A34-seeklogo.com.png"
          alt="Mangaku Logo"
          width="100"
        />
      </div>
      <!-- End Logo -->

      <!-- Menu -->
      <div>Menu</div>
      <!-- End Menu -->

      <!-- Search -->
      <div>Search</div>
      <!-- End Search -->
    </div>
    <!-- Navigation -->
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "LayoutHeader",
});
</script>
