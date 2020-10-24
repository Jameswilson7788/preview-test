<template>
  <div>
    <Slider></Slider>
    <Feature></Feature>
    <Divider></Divider>
    <Intro></Intro>
    <!-- <div class="slider"> -->
    <!-- <Product></Product> -->
    <Score item="{scores:{wa:'2',}}"></Score>
    <!-- <Product></Product> -->
    <!-- <Product></Product> -->
    <!-- </div> -->
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
// import Product from './Content/Products/Products.vue';
// import Product from "./Content/Products/Real/Product";
import Score from  './Content/Products/Score/Score.vue';

export default {
  components: {
    Slider,
    Feature,
    Divider,
    Intro,
    Contract,
    Footer,
    // Product,
    Score
  },
  name: "HelloWorld",
};
</script>



<style>
</style>
