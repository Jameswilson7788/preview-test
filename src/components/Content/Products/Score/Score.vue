<template>
  <main>
    <div class="score">
      <div>
        <span>AM</span><span>{{ item.scores.ws }}</span>
      </div>
      <div>
        <span>WS</span><span>{{ item.scores.ws }}</span>
      </div>
      <div>
        <span>WA</span><span>{{ item.scores.wa }}</span>
      </div>
    </div>
  </main>
</template>

<script>
export default {
//   props: ["item"],
  data() {
    return {
        item: {
            score: {
                wa:'2',
                am:'2',
                ws:'5'
            }
        }
    };
  },
};
</script>

<style lang="scss" scoped>
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
</style>