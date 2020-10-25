<template>
  <div class="wine">
    <div class="product">
      <div class="body">
        <div class="heart"></div>
        <div class="sale"></div>
        <img class="thumbnail" alt="" />

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
            <span>Size:</span><b>{{ item.capacity }}{{ item.unit }}</b>
          </div>
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

        <div class="block">
          <div class="block-name">{{ item.name }}</div>
          <div class="block-score">{{ item.score }}</div>
          <div v-show="item.quantity <= 0" class="block-stock">
            OUT OF STOCK
          </div>
          <div class="block-on-sale">{{ item.onSalePrice }}</div>
          <div class="block-price">{{ item.price }}</div>
        </div>
      </div>
      <div class="footer">
        <CartPanel></CartPanel>
        <button type="button" :disabled="quantity == 0">Add to cart</button>
      </div>
    </div>
  </div>
</template>

<script>
import CartPanel from "./CartPanel.vue";
export default {
  components: { CartPanel },
  props: ["item"],
};
</script>

<style lang="scss" scoped>
.wine {
  height: 490px;
  outline: none;
  @media only screen and (max-width: 720px) {
    height: 600px;
  }
  @media only screen and (max-width: 540px) {
    height: 650px;
  }
}

.product {
  display: flex;
  flex-direction: column;
  margin: 10px auto 0;
  width: 270px;
  height: 95%;
  outline: none;
  box-shadow: 0 2px 5px 2px gray;
}
.product {
  box-shadow: 0 2px 5px gray;
}

.product:hover {
  box-shadow: 0 2px 5px gray;
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
  opacity: 0.8;
}

.detail {
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: inherit;
  color: white;
  background-color: rgb(181, 153, 131);
  opacity: 0;
  z-index: 1;
}

.detail:before {
  content: "";
  position: absolute;
  top: 4%;
  left: 0;
  width: inherit;
  height: 90%;
  border-top: 1px solid #fff;
  border-bottom: 1px solid #fff;
}

.detail:after {
  content: "";
  position: absolute;
  top: 0;
  left: 6%;
  width: 88%;
  height: inherit;
  border-left: 1px solid #fff;
  border-right: 1px solid #fff;
}
.detail > div {
  display: table;
  margin-bottom: 0.5rem;
  width: 100%;
}

span {
  display: table-cell;
  width: 50%;
  text-align: right;
}
b {
  padding-left: 0.5rem;
}

.detail > img {
  position: absolute;
  bottom: 20px;
  right: 20px;
  width: auto;
  height: 270px;
  z-index: -1;
}
.footer {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  height: 80px;
  background-color: rgb(181, 153, 131);
  @media only screen and (max-width: 720px) {
    width: 90%;
    .body .detail {
      top: 55%;
      left: 15px;
      justify-content: flex-start;
      height: auto;
      color: black;
      background-color: transparent;
      opacity: 1;
      &::before,
      &::after {
        display: none;
      }
      span {
        width: 26%;
        text-align: left;
      }
      b {
        font-weight: normal;
      }
    }
  }
}

button {
  width: 120px;
  height: 30px;
  font-size: 1rem;
  color: white;
  background-color: rgb(119, 82, 82);
  border: 0;
  border-radius: 0.75rem;
  outline: none;
  cursor: pointer;
}
button:not(:disabled):active {
  background-color: rgb(82, 60, 43);
}
button:disabled {
  color: gray;
  background-color: lightgray;
  cursor: default;
}

.sale {
  position: absolute;
  top: -5px;
  left: -5px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 35px;
  background-color: red;
  z-index: 2;
}

.sale::before {
  content: "SALE";
  font-size: 1.2rem;
  color: white;
}
</style>