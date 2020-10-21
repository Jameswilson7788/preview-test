<template>
  <div class="contract">
    <div class="nav-left">
      <a href="#"
        ><img
          width="150"
          src="https://i.ibb.co/Z6Tbsk8/ponti-wine-logo-black.png"
          alt="ponti-wine-logo-black"
          border="0"
      /></a>
      <p>
        Ponti Wine Cellars is an online wine shop in Hong Kong. We offer a
        comprehensive range of top quality whine from all over the world such as
        USA, Italy, France, Spain, Argentina, Chile and etc.
      </p>
    </div>
    <div class="nav-right">
      <div class="link">
        <a href="#">ABOUT US</a>
        <a href="#">SHOP</a>
        <a href="#">WINCE CLUB BENEFITOUR STORES</a>
        <a href="#">CONTACT US</a>
        <a href="#">FAQ SITE MAP</a>
      </div>
      <div class="email">
        <label for="">NEWSLETTER</label>
        <input type="text" placeholder="Email Address..." />
        <button @click="nothing">SUBSCRIBE!</button>
      </div>
      <div class="social-media-svg">
        <svg
          stroke="currentColor"
          fill="currentColor"
          stroke-width="0"
          viewBox="0 0 448 512"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48z"
          ></path>
        </svg>
        <svg
          stroke="currentColor"
          fill="currentColor"
          stroke-width="0"
          viewBox="0 0 448 512"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
          ></path>
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    nothing() {},
  },
};
</script>

<style lang="scss" scoped>
.contract {
  margin-top: 5rem;
  padding: 1rem 4rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  background: #eeece3;
  @media screen and (max-width: 960px) {
    flex-direction: column;
    align-items: center;
    padding: 1rem 2rem;
  }
}
.email {
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 32px;
}

.nav-left {
  width: 325px;
}

.link > a:after {
  content: "|";
  padding: 10px;
}

a {
  text-decoration: none;
  color: black;
  display: inline-block;
}

.link {
  margin: 1rem;
}

.nav-right {
  width: 20rem;
}

button {
  background: #b59983;
  border: 0px;
  margin: 0.5rem auto 0;
  padding: 0.5rem;
  color: white;
}

svg {
  width: 50px;
  height: 50px;
}

.social-media-svg {
  text-align: right;
  margin-top: 2rem;
}

label {
  font-size: 14px;
}

p{
    font-size: 16px;
}
</style>