<template>
  <div class="product-main">
    <h1>{{ title }}</h1>
    <div class="slider">
      <div class="wrap">
        <div class="slide-bar">
          <div class="product" v-for="(item, index) in items" :key="index">
            <div class="heart"></div>
            <!-- 縮圖 -->
            <img :src="item.thumbnail" alt="" />
            <!-- 產品細節 -->
            <div class="product-content-detail">
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
                <span>Size:</span><b>{{ item.capacity }} {{ item.unit }}</b>
              </div>
            </div>
            <div class="column">
              <!-- 產品名稱 -->
              <div class="product-name">
                {{ item.id }} - {{ item.name }} <br />
                {{ item.vintage }}
              </div>
              <!-- 評分區塊 -->
              <div class="product-score">
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
              <!-- 存貨 -->
              <div class="product-stock" v-show="item.quantity > 0">
                <div v-if="item.onSalePrice > 0">
                  <div class="product-onsale-price">
                    HK${{ item.onSalePrice.toFixed(2) }}
                  </div>
                  <div class="product-price">
                    HK$ {{ item.price.toFixed(2) }}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="cart">

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import items from "./items.js";

export default {
  data() {
    return {
      items,
      title: "Top Pick's",
    };
  },
};
</script>

<style lang="scss" scoped>
.product-main {
  padding: 2rem 1rem;
  width: 100%;
}

h1 {
  margin: 0 0 0.5rem 2rem;
  font-size: 4rem;
  font-family: "Times New Roman", Times, serif;
  font-weight: normal;
}

.wrap {
  height: 500px;
  outline: none;
}
.slide-bar {
   display: flex;
  flex-direction: column;
  margin: 10px auto 0;
  width: 270px;
  height: 95%;
  outline: none;
  box-shadow: 0 2px 5px 2px gray;
}

.slide-bar:hover {
  box-shadow: 0 px 5px gray;
}

.slide {
  margin: 0 auto;
  max-width: 1600px;
}

.product {
  position: relative;
  display: flex;
  align-items: flex-end;
  padding: 1rem;
  width: 100%;
  height: 100%;
  color: black;
}

.product:hover .product-content-detail {
  opacity: 1;
}

.product-content-detail {
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
  background: #b8c3e2;
  opacity: 0;
  z-index: 1;
}

.product-content-detail::before {
  content: "";
  position: absolute;
  top: 4%;
  left: 0;
  width: inherit;
  height: 92%;
  border-top: 1px solid #fff;
  border-bottom: 1px solid #fff;
}
.product-content-detail::after {
  content: "";
  position: absolute;
  top: 0;
  left: 6%;
  width: 88%;
  height: inherit;
  border-left: 1px solid #fff;
  border-right: 1px solid #fff;
}

.product-content-detail > div {
  display: table;
  margin-bottom: 0.5rem;
  width: 100%;
}

.product-content-detail span {
  display: table-cell;
  width: 50%;
  text-align: right;
}

.product-content-detail b {
  padding-left: 0.5rem;
}

.product-content-detail > img {
  position: absolute;
  bottom: 20px;
  right: 20px;
  width: auto;
  height: 270px;
  z-index: -1;
}

h1 {
  margin: 0 0 0.5rem 2rem;
  font-size: 4rem;
  font-family: "Times New Roman", Times, serif;
  font-weight: normal;
}

.column {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding-top: 1rem;
  width: 72%;
  height: inherit;
}

.product-name {
  color: red;
  height: 50%;
  font-size: 18px;
  font-family: "Times New Roman", Times, serif;
  @media only screen and (max-width: 540px) {
    height: 40%;
  }
}

.product-score {
  position: relative;
  display: flex;
  align-items: center;
}

.product-score > div {
  margin-right: 5px;
  width: 48px;
  text-align: center;
}

.product-score > span {
  display: block;
  padding: 5px 0;
  width: inherit;
  font-size: 14px;
  font-weight: bold;
  border: 1px solid brown;
}

.product-score > span:first-child {
  color: white;
  background: brown;
}

.product-score > span:last-child {
  color: brown;
}

.product-stock {
  //   visibility: hidden;
  position: absolute;
  bottom: 18%;
  display: block;
  font-size: 1.1rem;
  font-weight: bold;
  color: red;
}

.out-of-stock {
  visibility: inherit;
}

.product-onsale-price {
  position: absolute;
  bottom: 10%;
  font-size: 1.7rem;
  font-weight: bold;
  color: red;
}

.product-onsale-price + div {
  font-weight: normal;
  text-decoration-line: line-through;
}

.product-price {
  position: absolute;
  bottom: 3%;
  font-size: 1.4rem;
  font-weight: bold;
  color: brown;
}
img {
  position: absolute;
  bottom: 20px;
  right: 20px;
  width: auto;
  height: 270px;
  z-index: -1;
}
</style>