<template>
  <div>
    <Banner :text="message"></Banner>
    <Slider></Slider>
    <Feature></Feature>
    <Divider></Divider>
    <Intro></Intro>
    <Slick title="Ponti’s top picks"></Slick>
    <Slick title="New arrivals..."></Slick>
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
import Banner from './Banner.vue'


export default {
  components: {
    Slider,
    Feature,
    Divider,
    Intro,
    Contract,
    Footer,
    Slick,
    Banner
  },
  name: "HelloWorld",
  data(){
    return {
      message: 'Free shipping for over $1,000'
    }
  }
};
</script>



<style>
</style>
