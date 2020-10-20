<template>
  <div>
    <div class="name"></div>
    <div class="score"></div>
    <div class="stock"></div>
    <div class="price"></div>
  </div>
</template>

<script>
    export default {
        data(){
            return {
                items:[{
                    vintage: '',
                    country: '',
                    region: '',
                    capacity: '1',
                    unit: 'L',
                    scores:{
                        ws: '',
                        wa: '',
                        am: '',
                    }
                }]
            }
        }
    }
</script>

<style lang="scss" scoped>
</style>