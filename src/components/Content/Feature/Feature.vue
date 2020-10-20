<template>
  <div class="feature">
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
          src: "./assets/image-53-4.png",
          title: "Trusted Wine Delivery Service",
          description:
            "Deliver Wines with Our New Temperature Controlled Truck",
        },
        {
          src: "./assets/image-54-4.png",
          title: "Incredible Value Premium Wines",
          description:
            "Work with Producers and Negociants to Bring You Best Value Wines",
        },
        {
          src: "./assets/image-55.png",
          title: "Free Delivery",
          description:
            "Spend <b>HK$1,800</b> to enjoy free delivery to a single location in Hong Kong Island, Kowloon or New Territories",
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
  padding: 2rem 0;

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
  width: 33.3333333%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 0;

  // @media only screen and (max-width: 576px) {
  //   width: 100%;
  // }
}

img {
  width: 100px;
  height: 100px;
}

p {
  margin: 1px;
  width: 150px;
  text-align: center;
}

</style>