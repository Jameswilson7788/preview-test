<template>
  <div>
    <h1>{{ title }}</h1>
    <Product></Product>
  </div>
</template>

<script>
import Product from "./Product.vue";
export default {
  components: {
    Product,
  },
  data() {
    return {
      title: "Top",
    };
  },
};
</script>

<style lang="scss" scoped>
</style>