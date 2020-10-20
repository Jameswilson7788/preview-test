<template>
  <div>
    <Slider></Slider>
    <Feature></Feature>
  </div>
</template>

<style>
</style>

<script>
import Slider from "./Content/Slider/Slider.vue";
import Feature from "./Content/Feature/Feature.vue";

export default {
  components: {
    Slider,
    Feature,
  },
  name: "HelloWorld",
};
</script>
