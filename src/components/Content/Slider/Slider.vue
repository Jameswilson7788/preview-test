<template>
  <div class="col-md-12 col-xs-12 slider" style="max-width: 100%">
    <q-carousel class="carousel" animated v-model="slide" arrows infinite style="height: 768px;">
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
.carousel {
  height:768px;
  @media only screen and (max-width: 576px) {
    height: 100%;
  }
}


.slider {
  max-width: 1600px;
  margin: 0;
  padding: 0;
  height: 768px;
  font-family: "Times New Roman", Times, serif;
}

.logo-banner {
  position: absolute;
  top: 6%;
  right: 10%;
  color: #fff;

  @media only screen and (max-width: 992px) {
    top: 3%;
    right: 10%;
    width: 80%;
    text-align: center;
    a {
      margin: 2rem auto 0;
    }
  }

  @media only screen and (max-width: 576px) {
    h1 {
      font-size: 1.6rem;
    }
    h3 {
      margin: 0;
      font-size: 1rem;
    }
  }

  @media only screen and (max-width: 320px) {
    h1 {
      font-size: 1rem;
    }
    h3 {
      font-size: 0.6rem;
    }
    a {
      margin-top: 7rem;
    }
  }
}

.logo-banner h1 {
  font-size: 3rem;
  font-weight: normal;
  letter-spacing: 1px;
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
  font-size: 18px;
}

a:hover {
  background: #a9a9a9;
  opacity: 0.9;
}
</style>