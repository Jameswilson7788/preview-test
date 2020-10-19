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
        <ul>
          <li><a>Terms of Use</a></li>
          <li><a>Privacy Policy</a></li>
          <li><a>Cookies Policy</a></li>
        </ul>
      </div>
    </div>
    <div class="right"></div>
  </div>
</template>

<script>
export default {};
</script>

<style  scoped>
.footer {
  font-size: 12px;
  display: flex;
  justify-content: space-between;
  padding: 1rem 3rem;

  @media only screen and (max-width: 960px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 1rem 3rem;
    text-align: center;
  }
}

.left {
  font-size: 12px;
}

.tech {
  display: flex;
  align-items: flex-end;
  margin-top: 1rem;
}

ul {
  list-style: none;
  
}

p {
  margin: .15rem 0;
}

span {
  margin-right: 2rem;
}

div {
  display: flex;
  align-items: flex-end;
  margin-top: 1rem;
}

.border {
  border: 1px solid black;
  border-radius: 12px;
}

ul {
    font-size: 14px;
}

a{
    text-decoration: none;
    color:black;
}
a:after {
    content: "|";
    padding: .5rem;
}

</style>