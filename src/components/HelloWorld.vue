<template>
  <div>
    <Slider></Slider>
    <Feature></Feature>
    <Divider></Divider>
    <Intro></Intro>
    <Slick></Slick>
    <Contract></Contract>
    <Footer></Footer>
  </div>
</template>


<script>
import Slider from "./Content/Slider/Slider.vue";
import Feature from "./Content/Feature/Feature.vue";
import Divider from "./Divider/Divider.vue";
import Intro from "./Content/Feature/Intro.vue";
import Contract from "./Content/Contract/Contract.vue";
import Footer from "./Footer/Footer.vue";
import Slick from './Content/Products/Slick.vue'


export default {
  components: {
    Slider,
    Feature,
    Divider,
    Intro,
    Contract,
    Footer,
    Slick
  },
  name: "HelloWorld",
};
</script>



<style>
</style>
