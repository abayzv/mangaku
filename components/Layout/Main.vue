<template>
  <div>
    <LayoutSidebar />
    <LayoutContent />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import LayoutSidebar from "./Sidebar.vue";
import LayoutContent from "./Content.vue";

export default defineComponent({
  name: "LayoutMain",
  components: {
    LayoutSidebar,
    LayoutContent,
  },
});
</script>
