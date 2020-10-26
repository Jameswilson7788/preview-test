<template>
  <div class="main"  v-show="isShow">
    {{ text }}
  </div>
</template>

<script>
export default {
  props: ["text"],
  data() {
    return {
      isShow: true,
    };
  },
  methods: {
    toggle() {
      this.isShow = !this.isShow;
    },
  },
};
</script>

<style lang="scss" scoped>
.main {
  position: fixed;
  top: 70px;
  display: none;
  padding: 0.5rem 0;
  width: 100%;
  text-align: center;
  color: white;
  background-color: darkgray;
  opacity: 0.9;
  cursor: pointer;
  z-index: 99;
  &.visited {
    display: none;
  }
  @media only screen and (max-width: 992px) {
    display: block;
  }
}
</style>