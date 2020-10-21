<template>
  <div>
    <Slider></Slider>
    <Feature></Feature>
    <Divider></Divider>
    <Intro></Intro>
    <Product></Product>
    <Contract></Contract>
    <Footer></Footer>
  </div>
</template>

<style>
</style>

<script>
import Slider from "./Content/Slider/Slider.vue";
import Feature from "./Content/Feature/Feature.vue";
import Divider from "./Divider/Divider.vue";
import Intro from "./Content/Feature/Intro.vue";
import Contract from "./Content/Contract/Contract.vue";
import Footer from "./Footer/Footer.vue";
// import Product from './Content/Products/Products.vue';
import Product from './Content/Products/Real/Product';

export default {
  components: {
    Slider,
    Feature,
    Divider,
    Intro,
    Contract,
    Footer,
    Product,
  },
  name: "HelloWorld",
};
</script>
