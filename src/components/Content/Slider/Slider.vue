<template>
  <div class="q-pa-md slider " style="max-width: 100%;">
    <q-carousel animated v-model="slide" arrows infinite  style="height: 700px;">
      <q-carousel-slide
        :name="1"
        img-src="https://cdn.quasar.dev/img/mountains.jpg"
      />
      <q-carousel-slide
        :name="2"
        img-src="https://cdn.quasar.dev/img/parallax1.jpg"
      />
      <q-carousel-slide
        :name="3"
        img-src="https://cdn.quasar.dev/img/parallax2.jpg"
      />
      <q-carousel-slide
        :name="4"
        img-src="https://cdn.quasar.dev/img/quasar.jpg"
      />
    </q-carousel>
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
  padding:0;

}
</style>