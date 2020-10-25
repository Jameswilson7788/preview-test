<template>
    <div>
        <div class="wrapper" v-for="(item, index) in items" :key="index">
            <div class="slide">
                <div class="content">
                    <div class="onsale"></div>
                    <div class="heart"></div>
                    <img src="" alt="">

                    <div class="detail">
                        <div><span>Vintage:</span><b>{{vintage}}</b></div>
                <div><span>Country:</span><b>{{country}}</b></div>
                <div><span>Region:</span><b>{{region}}</b></div>
                <div><span>Size:</span><b>{{size.value}}{{size.unit}}</b></div>
                    </div>


                    <div class="block">
                        <div class="name"></div>
                        <div class="score"></div>
                        <div class="out-of-stock"></div>
                        <div class="on-sale"></div>
                        <div class="price"></div>
                    </div>

                    <div class="cart">
                        
                        <button type="button" >Add to cart</button>
                    </div>

                </div>
            </div>
        </div>



        
            
              {price_onsale > 0 ? <Sale /> : null}
              <Heart><IoIosHeart /></Heart>
              <img src={thumbnail} alt="" />

              <div className="detail">
                <div><span>Vintage:</span><b>{vintage}</b></div>
                <div><span>Country:</span><b>{country}</b></div>
                <div><span>Region:</span><b>{region}</b></div>
                <div><span>Size:</span><b>{size.value}{size.unit}</b></div>
              </div>

              <Block>
                <BlockName>{id}-{name}<br />{vintage}</BlockName>
                <BlockScores>
                  <div><span>AM</span><span>{scores.am}</span></div>
                  <div><span>WS</span><span>{scores.ws}</span></div>
                  <div><span>WA</span><span>{scores.wa}</span></div>
                </BlockScores>
                <BlockStock className={quantity ? '' : 'empty'}>OUT OF STOCK</BlockStock>
                {price_onsale > 0 ? <BlockPriceOnSale>HK${price_onsale.toFixed(2)}</BlockPriceOnSale> : null}
                <BlockPrice>HK${price.toFixed(2)}</BlockPrice>
              </Block>
            </div>
            <div className="footer">
              <NumberPanel max={quantity} />
              <button type="button" disabled={!quantity}>Add to cart</button>
            </div>
          </Slide>
        </Wrapper>
    </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
</style>