<template>
  <div id="app">
    <Header></Header>
    <Content></Content>
    <Footer></Footer>
    
  </div>
</template>

<script>
import Header from "./components/Header/Header.vue";
import Footer from "./components/Footer/Footer.vue";
import Content from './components/Content/Content.vue';

export default {
  name: "App",
  components: {
    Header,
    Footer,
  },
};
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
body {
  margin: 0;
  padding: 0;
  position: relative;
  overflow: hidden;
  padding-top: 100vh;
}
</style>
