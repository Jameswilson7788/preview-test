<template>
  <div class="main">
    <button
      data-text="-"
      type="button"
      @click="() => this.decrement()"
    ></button>
    <input type="text" v-model="value" />
    <button
      data-text="+"
      type="button"
      @click="() => this.increment()"
    ></button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: 0,
    };
  },
  methods: {
    increment() {
      return this.value;
    },
    decrement() {
      if (this.value <= 0) return;
      return this.value--;
    },
  },
};
</script>

<style lang="scss" scoped>
.main {
  position: relative;
  > input {
    padding: 0 20px;
    width: 75px;
    height: 24px;
    text-align: center;
    border: 0;
    border-radius: 0;
    outline: none;
  }
  > button {
    position: absolute;
    top: 1px;
    width: 20px;
    height: 22px;
    color: white;
    background-color: rgb(119, 82, 82);
    border: 0;
    outline: none;
    cursor: pointer;
    &:active {
      background-color: rgb(181, 153, 131);
    }
    &::before {
      content: attr(data-text);
      position: absolute;
      top: 0;
      right: 0;
      left: 0;
    }
    &[data-text="-"] {
      left: 1px;
    }
    &[data-text="+"] {
      right: 1px;
    }
  }
}
</style>