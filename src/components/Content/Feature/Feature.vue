<template>
  <div class="feture">
    <div class="column" v-for="(item, index) in items" :key="index">
      <img style="width: 200px; height: 200px" :src="item.src" alt="" />
      <h3>{{ item.title }}</h3>
      <p v-html="item.description"></p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          src: "https://cdn.quasar.dev/img/mountains.jpg",
          title: "Trusted Wine Delivery Service",
          description:
            "<span>Deliver Wines with Our New Temperature Controlled Truck</span>",
        },
        {
          src: "https://cdn.quasar.dev/img/mountains.jpg",
          title: "Trusted Wine Delivery Service",
          description:
            "<span>Deliver Wines with Our New Temperature Controlled Truck</span>",
        },
        {
          src: "https://cdn.quasar.dev/img/mountains.jpg",
          title: "Trusted Wine Delisssvery Service",
          description:
            "<span>Deliver Wines with Our New Temperature Controlled Truck</span>",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.feature {
  display: flex;
  justify-content: space-around;
  padding: 3rem 0;
  flex-direction: column;
  // @media only screen and (max-width: 576px) {
  //   width: 100%;
  // }
}

h3 {
  font-size: 20px;
  text-align: center;
  margin: 0.5rem 0;
  color: black;
}

.column {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0;
  width: 33.3333333%;
  // @media only screen and (max-width: 576px) {
  //   width: 100%;
  // }
}

.img {
  width: 150px;
  height: 150px;
}
</style>