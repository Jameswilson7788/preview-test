<template>
  <div>
    <main style="height: 740px">
      <h1>{{ title }}</h1>
      <VueSlickCarousel v-bind="settings">
        <div v-for="(item, index) in items" :key="index">
          <Wine :item="item"></Wine>
        </div>
      </VueSlickCarousel>
    </main>
  </div>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
import Wine from "./Wine";
import items from "./items.js";

export default {
  components: {
    VueSlickCarousel,
    Wine,
  },
  data() {
    return {
      title: "Top Pick's",
      items,
      settings: {
        dots: false,
        infinite: true,
        initialSlide: 2,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        swipeToSlide: false,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      },
    };
  },
};
</script>

<style lang="scss" scoped>
main {
  max-width: 1600px;
}
</style>