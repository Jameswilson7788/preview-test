<template>
  <q-layout view="lHh Lpr lFf">
    <Header></Header>

    <q-page-container>
      <HelloWorld />
    </q-page-container>
  </q-layout>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import Header from './components/Header/Header.vue';

export default {
  name: "LayoutDefault",

  components: {
    HelloWorld,
    Header
  },

  data() {
    return {
      leftDrawerOpen: true,
      dialog: false,
      drawerLeft: false,
      drawerRight: true,
    };
  },
};
</script>

<style>
</style>
