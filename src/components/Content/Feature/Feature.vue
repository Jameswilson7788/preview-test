<template>
  <div class="main">
    <div v-for="(item, index) in items" :key="index">
      <img :src="item.src" alt="" />
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
.main {
  display: flex;
  justify-content: space-around;
  padding: 3rem 0;
  > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 1rem;
    width: calc(100% / 3);
    > h3 {
      margin: 0.5rem 0;
      padding: 0;
      text-align: center;
      color: black;
      display: block;
      font-size: 1.17em;
      margin-block-start: 1em;
      margin-block-end: 1em;
      margin-inline-start: 0px;
      margin-inline-end: 0px;
      font-weight: bold;
      line-height: 2rem;
    }
    > p {
      margin: 0;
      max-width: 280px;
      text-align: center;
    }
  }
  @media only screen and (max-width: 576px) {
    > div > img {
      width: 100%;
    }
  }
}
</style>