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
        <span></span>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Nav",
  data() {
    return {
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
  methods() {},
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
  height: 150px;
  color: white;
  background: darkGray;
  opacity: 0.9;
}

.header.phone {
  height: 80px;
  position: absolute;
  top: 1.5rem;
  left: 2.5rem;
  height: 50px;
}

.header.phone > img {
  position: absolute;
  top: 1.3rem;
  left: 2.5rem;
  height: 50px;
}

.nav-left {
  position: absolute;
  top: 3rem;
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
  display: flex;
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
</style>
