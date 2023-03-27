<template>
  <div class="slider">
    <Carousel :items-to-show="showItems" :wrap-around="true">
      <Slide v-for="(item, index) in items" :key="index">
        <div class="carousel__item">
          <img :src="item.image" :alt="item.description" :title="item.title" />
        </div>
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

interface sliderItem {
  title: string;
  description: string;
  image: string;
}

export default defineComponent({
  name: "SliderComponent",
  components: {
    Carousel,
    Slide,
    Navigation,
  },
  props: {
    showItems: {
      type: Number,
      default: 5,
    },
    items: {
      type: Array as () => sliderItem[],
      default: () => [],
    },
  },
});
</script>

<style lang="scss">
.slider {
  .carousel__item {
    img {
      width: 300px;
      height: 400px;
      object-fit: cover;
      border-radius: 5px;
    }
  }
}

.carousel__track {
  gap: 1rem;
}
</style>
