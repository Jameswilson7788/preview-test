<template>
  <div class="footer">
    <div class="left">
      <p>
        Under the law of Hong Kong, intoxicating liquor must not be sold or
        supplied to a minor in the course of business.
      </p>
      <p>
        根據香港法律, 不得在業務過程中, 向未成年人售賣或供應令人最醺的酒類。
      </p>
      <div class="tech">
        <span>@ 2020, Ponti Wine Cellars</span>
        <ul class="policy">
          <li><a href="#">Terms of Use</a></li>
          <li><a href="#">Privacy Policy</a></li>
          <li><a href="#">Cookies Policy</a></li>
        </ul>
      </div>
    </div>
    <div class="right">
      <div v-for="(item, index) in items" :key="index" >
        <img
          :class="item.class"
          width="60"
          height="40"
          :src="item.icon"
          alt=""
        />
      </div>
    </div>
  </div>
</template>

<script>
import visa from "payment-icons/min/flat/visa.svg";
import master from "payment-icons/min/flat/mastercard-old.svg";
import unionpay from "payment-icons/min/single/unionpay.svg";
import alipay from "payment-icons/min/single/alipay.svg";
import paypal from "payment-icons/min/flat/paypal.svg";
import verve from "payment-icons/min/flat/verve.svg";

export default {
  data() {
    return {
      items: [
        { icon: visa, class: "" },
        { icon: alipay, class: "bold" },
        { icon: unionpay, class: "bold" },
        { icon: verve, class: "" },
        { icon: master, class: "" },
        { icon: paypal, class: "bold" },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.footer {
  display: flex;
  justify-content: space-between;
  padding: 1rem 4rem;
}

li {
  list-style: none;
  margin-right: 0.5rem;
  font-size: 14px;
}

a {
  text-decoration: none;
  color: black;
}

p {
  font-size: 12px;
  margin: 0.1rem 0;
}

.left {
}

.tech {
  display: flex;
  align-items: flex-end;
  margin-top: 1rem;
}

span {
  padding: 1rem;
}

img {
  margin-left: 8px;
}

.bold {
  border: 1px solid black;
  border-radius: 5px;
}
.right {
  display: flex;
  align-items: center;
  justify-content: center;
}

.policy {
  display: flex;
  align-items: center;
}

li:after {
  content: "    |";
}

span {
  margin-right: 2rem;
  font-size: 10px;
}
</style>