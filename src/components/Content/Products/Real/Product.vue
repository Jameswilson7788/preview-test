<template>
  <div>
    <div class="wrap" v-for="(item, index) in items" :key="index">
      <div class="slide">
        <div class="body">
          <!-- <img :src="item.thumbnail" alt="" /> -->
          <div class="mask"></div>
          <div class="block">
            <div class="name-field">
              {{ item.id }} - {{ item.name }} <br />
              {{ item.vintage }}
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

            <div v-show="item.quantity == 0" class="out-of-stock">
              OUT OF STOCK
            </div>
            <div v-show="price_onsale > 0" class="on-sale">
              HK$ {{ item.onSalePrice.toFixed(2) }}
            </div>
            <div class="price">HK$ {{ item.price.toFixed(2) }}</div>
          </div>
          <div class="footer">
            <CartPanel></CartPanel>
            <button class="add-to-cart">Add to cart</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CartPanel from "./CartPanel.vue";
import items from "../items.js";

export default {
  components: {
    CartPanel,
  },
  data() {
    return {
      items,
    };
  },
};
</script>

<style lang="scss" scoped>
main {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding-top: 1rem;
  width: 72%;
  height: inherit;
}
.out-of-stock {
  visibility: initial;
}

.name_field {
  height: 55%;
  font-size: 1.3rem;
  font-family: "Times New Roman", Times, serif;

  @media only screen and (max-width: 500px) {
    height: 40%;
  }
}

.score {
  position: relative;
  display: flex;
  align-items: center;
}

.score > div {
  margin-right: 0.25rem;
  width: 46px;
  text-align: center;
}

.score > div > span {
  display: block;
  padding: 0.25rem 0;
  width: inherit;
  font-size: 14px;
  font-weight: bold;
  border: 1px solid #6f4e37;
}

.score > div > span:first-child {
  color: white;
  background: #6f4e37;
}

.score > div > span:last-child {
  color: #6f4e37;
}

.out-of-stock {
  position: absolute;
  bottom: 25%;
  display: block;
  font-size: 1.1rem;
  font-weight: bold;
  color: red;
  visibility: hidden;
}

.price {
  position: absolute;
  bottom: 23%;
  font-size: 1.5rem;
  font-weight: bold;
  color: #6f4e37;
}
.footer {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  height: 80px;
  background: rgb(181, 153, 131);
}
.add-to-cart {
  width: 140px;
  height: 30px;
  font-size: 1rem;
  color: white;
  border: 0;
  background: rgb(119, 82, 82);
  border-radius: 0.75rem;
  outline: none;
  cursor: pointer;
}

.add-to-cart:not(:disabled):active {
  background-color: rgb(119, 82, 82);
}
.add-to-cart:disabled {
  color: gray;
  background: lightgray;
  cursor: default;
}

.heart {
  position: absolute;
  top: 1rem;
  right: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.25rem;
  border: 1px solid rgb(119, 82, 82);
  border-radius: 100%;
}

.img {
  position: absolute;
  bottom: 20px;
  right: 20px;
  width: auto;
  height: 270px;
  z-index: -1;
}

.body {
  position: relative;
  display: flex;
  align-items: flex-end;
  padding: 1rem;
  width: 100%;
  height: 100%;
  color: black;
}
.body:hover .detail {
  opacity: 1;
}


</style>