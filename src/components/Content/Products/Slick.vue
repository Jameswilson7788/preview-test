<template>
  <div>
    <main style="height: 740px">
      <h1>{{ title }}</h1>

      <svg  stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" class="arrow left" data-type="prev" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M217.9 256L345 129c9.4-9.4 9.4-24.6 0-33.9-9.4-9.4-24.6-9.3-34 0L167 239c-9.1 9.1-9.3 23.7-.7 33.1L310.9 417c4.7 4.7 10.9 7 17 7s12.3-2.3 17-7c9.4-9.4 9.4-24.6 0-33.9L217.9 256z"></path></svg>
      <svg  stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" class="arrow right" data-type="next" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M294.1 256L167 129c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.3 34 0L345 239c9.1 9.1 9.3 23.7.7 33.1L201.1 417c-4.7 4.7-10.9 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9l127-127.1z"></path></svg>
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
// import RightArrow from "./RightArrow.vue";
// import LeftArrow from "./LeftArrow.vue";

export default {
  props: ["title"],
  components: {
    VueSlickCarousel,
    Wine,
    // RightArrow,
    // LeftArrow,
  },
  data() {
    return {
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
            breakpoint: 1200,
            settings: {
              slidesToShow: 3,
            },
          },
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 3,
            },
          },
          {
            breakpoint: 860,
            settings: {
              slidesToShow: 2,
            },
          },
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 1,
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
  padding: 2rem 1rem;
  width: 100%;
  h1 {
    margin: 0 0 0.5rem 2rem;
    font-size: 4rem;
    font-family: "Times New Roman", Times, serif;
    font-weight: normal;
  }
  .arrow {
    position: absolute;
    top: -15%;
    font-size: 2.8rem;
    color: black;
    border: 1px solid rgb(119, 82, 82);
    z-index: 1;
    cursor: pointer;
    &:active {
      opacity: 0.8;
    }
    &[data-type="prev"] {
      right: 90px;
    }
    &[data-type="next"] {
      right: 40px;
    }
  }
  @media only screen and (max-width: 992px) {
    h1 {
      font-size: 2.5rem;
    }
    .arrow {
      top: -10%;
    }
  }
  @media only screen and (max-width: 576px) {
    h1 {
      font-size: 1.5rem;
    }
    .arrow {
      &[data-type="prev"] {
        right: 70px;
      }
      &[data-type="next"] {
        right: 20px;
      }
    }
  }
  @media only screen and (max-width: 320px) {
    h1 {
      margin-left: 1rem;
      font-size: 1.2rem;
    }
    .arrow {
      &[data-type="prev"] {
        right: 70px;
      }
      &[data-type="next"] {
        right: 20px;
      }
    }
  }
}
</style>