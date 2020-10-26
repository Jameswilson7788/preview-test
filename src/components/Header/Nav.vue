
<template>
  <nav class="main">
    <div class="nav-left">
      <span><b>TEL</b>(852) 2739 7678</span>
      <span><b>EMAIL</b>enquiries@pontiwinecellars.com</span>
    </div>

    <div class="nav-toggler"></div>

    <img :src="logo" alt="" class="logo" />

    <nav class="toggle">
      <div className="mask"></div>
      <div>
        <div class="navClose"></div>
      </div>
    </nav>

    <div class="nav-right">
      <div class="member">
        <a href="#">Login in</a>
        <a href="#">Register</a>
      </div>
      <div className="tool-bar">
        <a className="tool-search" href="#"
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
        <a className="tool-cart" href="#" data-amount="2"
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
        ></a>
      </div>
    </div>
  </nav>
</template>

<script>


export default {
  components: {

  },
  data() {
    return {
      logo: window.he,
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
};
</script>

<style lang="scss" scoped>
.main {
  position: fixed;
  top: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 120px;
  color: white;
  background: darkgray;
  opacity: 0.95;
  z-index: 9;
}

.main.minify {
  height: 80px;
  > img {
    position: absolute;
    top: 1.2rem;
    left: 2.5rem;
    height: 50px;
  }
}

.main > nav {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 0.5rem;
  width: inherit;
}
.main a {
  padding: 0 0.85rem;
  text-decoration: none;
  text-transform: uppercase;
  color: white;
  &:hover,
  &:focus {
    -webkit-text-stroke: 1px white;
  }
}

.nav-right {
  position: absolute;
  top: 1.5rem;
  right: 2.5rem;
  display: flex;
  align-items: center;
  @media only screen and (max-width: 992px) {
    top: 1rem;
    right: 1.5rem;
    .login-bar {
      display: none;
    }
    .tool-bar a[data-amount]::before {
      color: white;
    }
    .tool-bar .tool-search {
      display: none;
    }
    .tool-bar .tool-cart {
      color: black;
    }
  }
}

.nav-right .minify {
  top: 1.25rem;
}

.member {
  a {
    display: inline-block;
    text-decoration: none;
    color: white;
    &:not(:last-child)::after {
      content: "|";
      padding: 0 0.5rem;
    }
  }
}

.nav-left {
  position: absolute;
  top: 2rem;
  left: 2.5rem;
  @media only screen and (max-width: 992px) {
    display: none;
  }
  span {
    display: block;
    b {
      margin-right: 0.25rem;
      text-transform: uppercase;
    }
  }
  &.minify {
    display: none;
  }
}

.tool-bar {
  margin-left: 1rem;
  a {
    position: relative;
    display: inline-block;
    margin: 0 0.5rem;
    text-decoration: none;
    color: white;
    svg {
      font-size: 2.25rem;
    }
    &[data-amount]::before {
      content: attr(data-amount);
      position: absolute;
      top: -2px;
      right: -12px;
      width: 25px;
      height: 25px;
      font-size: 10px;
      text-align: center;
      line-height: 24px;
      background: red;
      border-radius: 100%;
    }
  }
}

Cart {
  font-size: 2.25rem;
}

Search {
  font-size: 2.25rem;
}
</style>