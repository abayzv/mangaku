<template>
  <Layout>
    <input v-model="maskedTotal" type="text" class="p-3 text-black" />
  </Layout>
</template>

<script lang="ts">
import { defineComponent, computed, ref } from "vue";
import Layout from "@/components/Layout/Guest/index.vue";

export default defineComponent({
  name: "MaskingPage",
  components: {
    Layout,
  },
  setup() {
    const total = ref<Number>(0);
    const totalView = ref<string>("Rp.0,00");

    const maskedTotal = computed({
      get() {
        // convert number to idr format
        return totalView.value;
      },
      set(newValue) {
        // revert idr format to number
        total.value = Number(newValue.replace(/[^0-9.-]+/g, ""));

        totalView.value = total.value.toLocaleString("id-ID", {
          style: "currency",
          currency: "IDR",
        });
      },
    });

    return {
      total,
      maskedTotal,
    };
  },
});
</script>
