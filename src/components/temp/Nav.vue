<template>
  <div>
    <q-menu
        anchor="bottom left"
        self="top left"
        transition-show="jump-down"
        transition-hide="jump-up"
      >
        <q-item clickable v-for="(item, index) in big_list" :key="index">
          <q-item-section>{{ item.name }}</q-item-section>
        </q-item>
      </q-menu>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style lang="scss" scoped>

</style>