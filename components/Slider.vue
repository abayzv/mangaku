<template>
  <div class="slider">
    <Carousel :items-to-show="5.5" :wrap-around="true">
      <Slide v-for="slide in 10" :key="slide">
        <div class="carousel__item">{{ slide }}</div>
      </Slide>

      <template #addons>
        <Navigation />
      </template>
    </Carousel>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Navigation } from "vue3-carousel";

export default defineComponent({
  name: "SliderComponent",
  components: {
    Carousel,
    Slide,
    Navigation,
  },
});
</script>

<style lang="scss">
.slider {
  .carousel__item {
    background-color: red;
    width: 100%;
    height: 400px;
    border-radius: 1rem;
  }
}

.carousel__track {
  gap: 1rem;
}
</style>
