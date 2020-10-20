<template>
  <div>
    <div class="intro">
      <div v-for="(item, index) in items" :key="index">
        <div class="column" :style="{ 'background-image': item.background }">
          <span
            >{{ item.title }}
            <p>{{ item.description }}</p></span
          >
        </div>
      </div>
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
.intro {
  padding: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Microsoft JhengHei", "Segoe UI", Helvetica, Arial, Helvetica, sans-serif;
}

.column {
  background-repeat: no-repeat;
  background-size: cover;
  border: 1px solid black;
  display: flex;
  align-items: flex-end;
  margin: 15px;
  width: 300px;
  height: 300px;
  text-align: center;
}

span {
  padding: 5px 10px;
  width: 100%;
  height: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: #6f4e37;
  opacity: .9;
  font-weight: bold;
  color: white;
}

p {
  margin: 0;
  width: 100%;
  font-weight: normal;
}
</style>