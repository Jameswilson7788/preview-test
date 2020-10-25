<template>
  <div>
    <div class="wrapper" v-for="(item, index) in items" :key="index">
      <div class="slide">
        <div class="content">
          <div class="onsale"></div>
          <div class="heart"></div>
          <img src="" alt="" />

          <div class="detail">
            <div>
              <span>Vintage:</span><b>{{ item.vintage }}</b>
            </div>
            <div>
              <span>Country:</span><b>{{ item.country }}</b>
            </div>
            <div>
              <span>Region:</span><b>{{ item.region }}</b>
            </div>
            <div>
              <span>Size:</span><b>{{ item.value }}{{ item.unit }}</b>
            </div>
          </div>

          <div class="block">
            <div class="name">
              {{ item.id }} - {{ item.name }}<br />{{ item.vintage }}
            </div>
            <div class="score">
              <div>
                <span>AM</span><span>{{ item.scores.am }}</span>
              </div>
              <div>
                <span>WS</span><span>{{ item.scores.ws }}</span>
              </div>
              <div>
                <span>WA</span><span>{{ item.scores.wa }}</span>
              </div>
            </div>
            <div v-show="item.quantity" class="out-of-stock">OUT OF STOCK</div>
            <div class="on-sale">HK${{ item.onSalePrice.toFixed(2) }}</div>
            <div class="price">HK${{ item.price.toFixed(2) }}</div>
          </div>

          <div class="cart">
            <CartPanel></CartPanel>
            <button type="button">Add to cart</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CartPanel from "./CartPanel.vue";
import items from "./items.js";
export default {
  components: { CartPanel },
  data() {
    return {
      items,
    };
  },
};
</script>

<style lang="scss" scoped>

</style>