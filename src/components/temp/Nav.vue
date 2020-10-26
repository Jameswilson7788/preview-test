<template>
  <div>
    <nav class="nav">
      <div class="nav-left">
        <ul class="info">
          <li><b>TEL</b>(852) 2739 7678</li>
          <li><b>EMAIL</b>enquiries@pontiwinecellars.com</li>
        </ul>
      </div>
      <div class="nav-center">
        <ul class="nav-link" v-for="(item, index) in small_list" :key="index">
          <li>
            <a href="#">{{ item.name }}</a>
          </li>
        </ul>
      </div>
      <div class="nav-right">
        <ul class="member">
          <li><a href="#">Login｜</a></li>
          <li><a href="#">Register</a></li>
          <li class="search">
            <a href="#/"
              ><svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 1024 1024"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0 0 11.6 0l43.6-43.5a8.2 8.2 0 0 0 0-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z"
                ></path></svg
            ></a>
          </li>
          <li class="cart">
            <a data-amount="2" href="#/"
              ><svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 1024 1024"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M922.9 701.9H327.4l29.9-60.9 496.8-.9c16.8 0 31.2-12 34.2-28.6l68.8-385.1c1.8-10.1-.9-20.5-7.5-28.4a34.99 34.99 0 0 0-26.6-12.5l-632-2.1-5.4-25.4c-3.4-16.2-18-28-34.6-28H96.5a35.3 35.3 0 1 0 0 70.6h125.9L246 312.8l58.1 281.3-74.8 122.1a34.96 34.96 0 0 0-3 36.8c6 11.9 18.1 19.4 31.5 19.4h62.8a102.43 102.43 0 0 0-20.6 61.7c0 56.6 46 102.6 102.6 102.6s102.6-46 102.6-102.6c0-22.3-7.4-44-20.6-61.7h161.1a102.43 102.43 0 0 0-20.6 61.7c0 56.6 46 102.6 102.6 102.6s102.6-46 102.6-102.6c0-22.3-7.4-44-20.6-61.7H923c19.4 0 35.3-15.8 35.3-35.3a35.42 35.42 0 0 0-35.4-35.2zM305.7 253l575.8 1.9-56.4 315.8-452.3.8L305.7 253zm96.9 612.7c-17.4 0-31.6-14.2-31.6-31.6 0-17.4 14.2-31.6 31.6-31.6s31.6 14.2 31.6 31.6a31.6 31.6 0 0 1-31.6 31.6zm325.1 0c-17.4 0-31.6-14.2-31.6-31.6 0-17.4 14.2-31.6 31.6-31.6s31.6 14.2 31.6 31.6a31.6 31.6 0 0 1-31.6 31.6z"
                ></path></svg
              ><span class="cart-number">{{ cart_number }}</span></a
            >
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Nav",
  data() {
    return {
      cart_number: 2,
      small_list: [
        { name: "SHOP" },
        { name: "PROMOTIONS" },
        { name: "EVENTS" },
        { name: "ABOUT US" },
        { name: "CONTACT" },
      ],
      big_list: [
        { name: "LOG IN / REGISTER" },
        { name: "SHOP" },
        { name: "PROMOTIONS" },
        { name: "EVENTS" },
        { name: "ABOUT US" },
        { name: "CONTACT" },
        { name: "-" },
        { name: "PRIVACY & POLICY" },
        { name: "TERMS OF USE" },
        { name: "COOKIES POLICY" },
        { name: "FAQ" },
        { name: "SEARCH" },
      ],
    };
  },
  methods: {},
};
</script>

<style  scoped>
.nav {
  position: fixed;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 9;
  top: 0;
  display: flex;
  width: 100%;
  height: 125px;
  color: white;
  background: rgb(100, 100, 100);
  opacity: 0.95;
}

.header.cut {
  height: 80px;
  position: absolute;
  top: 1.5rem;
  left: 2.5rem;
  height: 50px;
}

.header.cut > img {
  position: absolute;
  top: 1.3rem;
  left: 2.5rem;
  height: 50px;
}

.header.cut > nav {
  
}

.nav-left {
  position: absolute;
  top: 1.25rem;
  left: 3.5rem;
  @media only screen and(max-width: 1200px) {
    display: none;
  }
}

.nav-right.phone {
  display: none;
}

.info {
  list-style: none;
}

.nav-center ui {
  display: flex;
  flex-direction: column;
}

.nav-center li {
  list-style: none;
}
.nav-center a {
  text-decoration: none;
  color: white;
}
.nav-center a:hover {
  font-weight: bold;
}

.nav-link {
  display: inline-block;
  align-items: center;
  justify-content: center;
  margin-top: 0.5rem;
  width: inherit;
}

.nav-menu {
  color: white;
  background: #000;
  width: 40px;
  height: 40px;
  position: absolute;
  top: 0.8rem;
  left: 0.5rem;
  display: block;
  padding: 0.5rem;
  font-size: 1.2rem;
  border-radius: 100%;
  outline: none;
  cursor: pointer;
}

.member li {
  text-decoration: none;
  list-style: none;
  display: inline-block;
  font-size: 1.2rem;
}
a {
  text-decoration: none;
  color: white;
}
.nav-right {
  position: absolute;
  top: 1.2rem;
  right: 1.2rem;
  align-items: center;
  display: flex;
}
.search svg {
  /* padding: 0.5rem; */
  font-size: 2rem;
  margin-left: 1.2rem;
}
.cart svg {
  font-size: 2rem;
}

.cart-number {
  position: absolute;
  font-size: 12px;
  width: 20px;
  height: 20px;
  line-height: 24px;
  border-radius: 100%;
  text-align: center;
  top: 8px;
  right: -10px;

  background: red;
}
</style>
