<template>
  <div class="q-pa-md slider" style="max-width: 100%">
    <q-carousel animated v-model="slide" arrows infinite style="height: 550px">
      <q-carousel-slide :name="1" img-src="./assets/slider-1.png" />
      <q-carousel-slide :name="2" img-src="./assets/slider-2.png" />
      <q-carousel-slide :name="3" img-src="./assets/slider-3.png" />
    </q-carousel>
    <div class="logo-banner">
      <h1>Trusted wine delivery</h1>
      <h3>with temperature controlled wine delivery truck</h3>
      <a href="#">SEE MORE</a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      slide: 1,
    };
  },
};
</script>

<style lang="scss" scoped>
.slider {
  margin: 0;
  padding: 0;
  font-family: "Times New Roman", Times, serif;
}

.logo-banner {
  position: absolute;
  top: 10%;
  right: 10%;
  color: #fff;
}

.logo-banner h1 {
  font-size: 3rem;
}

.logo-banner h3 {
  font-size: 1.5rem;
  margin-top: -2.5rem;
}

a {
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 150px;
  height: 45px;
  text-align: center;
  
  background: gray;
  color: white;
  opacity: 0.9;
  font-size:18px;
}

a:hover {
  background: #a9a9a9;
  opacity: 0.9;
}
</style>