<template>
  <div>
    <Slider></Slider>
    <Feature></Feature>
    <Divider></Divider>
  </div>
</template>

<style>
</style>

<script>
import Slider from "./Content/Slider/Slider.vue";
import Feature from "./Content/Feature/Feature.vue";
import Divider from "./Divider/Divider.vue";

export default {
  components: {
    Slider,
    Feature,
    Divider
  },
  name: "HelloWorld",
};
</script>
