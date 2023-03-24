<template>
  <div>Konten Disini</div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from "vue";
import BEBAS from "@/utils/Bebas";

interface Data {
  [key: string]: string;
}

export default defineComponent({
  name: "LayoutMain",
  props: {
    data: {
      type: Object,
      default: () => ({}),
    },
  },
  setup(props) {
    const data = ref<Data>({
      message: "Hello World",
    });

    const propsData = computed(() => props.data);

    return {
      data,
      propsData,
      BEBAS,
    };
  },
});
</script>
