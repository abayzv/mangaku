<template>
  <nav>
    <section class="bg-white flex flex-col items-center justify-center p-3">
      <div class="container text-white flex items-center justify-between">
        <!-- Logo -->
        <div class="flex items-center gap-3">
          <img
            src="https://seeklogo.com/images/G/google-cloud-run-logo-895F1305FF-seeklogo.com.png"
            alt="Runtypes Logo"
            width="50px"
          />
          <span class="text-2xl"
            ><span class="text-sky-500 font-bold">Run</span>types</span
          >
        </div>
        <!-- End Logo -->

        <!-- Menu -->
        <div>
          <ul class="flex gap-3 items-center">
            <li
              class="text-[#363636] p-2 rounded"
              :class="{
                active: $route.name !== 'english',
              }"
            >
              <NuxtLink to="/">Indonesia</NuxtLink>
            </li>
            <li
              class="text-[#363636] p-2 rounded"
              :class="{
                active: $route.name === 'english',
              }"
            >
              <NuxtLink to="/english">English</NuxtLink>
            </li>
          </ul>
        </div>
        <!-- End Menu -->

        <!-- Search -->
        <!-- <div>Search</div> -->
        <!-- End Search -->
      </div>
    </section>
    <!-- Navigation Section -->
    <!-- <section
      class="bg-black bg-opacity-80 flex flex-col items-center justify-center p-3"
    >
      <div class="container text-white flex items-center justify-center">
        <div>Navigation</div>
      </div>
    </section> -->
    <!-- End Navigation Section -->
  </nav>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "LayoutHeader",
});
</script>

<style lang="scss">
.active {
  @apply bg-sky-500 text-white;
}
</style>
