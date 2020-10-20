<template>
  <div>
    <Slider></Slider>
    <Feature></Feature>
    <Divider></Divider>
    <Intro></Intro>
  </div>
</template>

<style>
</style>

<script>
import Slider from "./Content/Slider/Slider.vue";
import Feature from "./Content/Feature/Feature.vue";
import Divider from "./Divider/Divider.vue";
import Intro from './Content/Feature/Intro.vue';

export default {
  components: {
    Slider,
    Feature,
    Divider,
    Intro
  },
  name: "HelloWorld",
};
</script>
