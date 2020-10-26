<template>
  <div class="main">
    <div
      v-for="(item, index) in items"
      :key="index"
      :style="{ 'background-image': item.background }"
    >
      <span
        >{{ item.title }}
        <p>{{ item.description }}</p></span
      >
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          background: "url(./assets/heightlight-desktop-1.png)",
          title: "Shop Promotions",
          description: "Check out the latest offers in shops!",
        },
        {
          background: "url(./assets/heightlight-desktop-2.png)",
          title: "Smart Buys",
          description: "Well-priced, high-quality wines!",
        },
        {
          background: "url(./assets/heightlight-desktop-3.png)",
          title: "Top Rated Wines",
          description: "Wine scores 90 points or higher!",
        },
        {
          background: "url(./assets/heightlight-desktop-4.png)",
          title: "Events",
          description: "What is happening now!",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.main {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 3rem 0;
  > div {
    display: flex;
    align-items: flex-end;
    margin: 0 0.75rem;
    width: 300px;
    height: 300px;
    text-align: center;
    background-repeat: no-repeat;
    background-size: cover;
    border: 1px solid black;
    opacity: 0.8;
    > span {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-evenly;
      padding: 5px 10px;
      width: 100%;
      height: 60px;
      font-weight: bold;
      color: white;
      background-color:brown;
      p {
        margin: 0;
        width: 100%;
        font-weight: normal;
      }
    }
  }
  @media only screen and (max-width: 1200px) {
    > div {
      width: 200px;
      height: 200px;
    }
  }
  @media only screen and (max-width: 992px) {
    flex-direction: column;
    width: 100%;
    > div {
      width: 85%;
      height: 250px;
      &:not(:last-child) {
        margin-bottom: 2rem;
      }
      > span {
        height: 80px;
      }
    }
  }
  @media only screen and (max-width: 768px) {
    > div {
      height: 200px;
    }
  }
  @media only screen and (max-width: 576px) {
    > div {
      height: 150px;
    }
  }
}
</style>