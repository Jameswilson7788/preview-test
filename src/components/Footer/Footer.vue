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
      <img
        v-for="(item, index) in items"
        :key="index"
        :class="item.class"
        width="60"
        height="40"
        :src="item.icon"
        alt=""
      />
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
   @media only screen and (max-width: 992px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 1rem 2rem;
    text-align: center;
  }
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
  margin: 0.15rem 0;
}

.left {
  font-size: 12px;
  @media only screen and (max-width: 1200px) {
    > div {
      flex-direction: column-reverse;
      align-items: flex-start;
    }
  }
  @media only screen and (max-width: 992px) {
    margin-bottom: 1rem;
    > div {
      display: none;
    }
  }
}

.tech {
  display: flex;
  align-items: flex-end;
  margin-top: 1rem;
  a {
    text-decoration: none;
    color: black;
    &:not(:last-child)::after {
      content: "|";
      padding: 0 0.5rem;
    }
  }
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
  @media only screen and (max-width: 576px) {
    img {
      width: 40px;
      height: 28px;
    }
  }
}

.policy {
  display: flex;
  align-items: center;
}

li:after {
  content: "   |";
}

span {
  margin-right: 2rem;
  font-size: 10px;
}
</style>