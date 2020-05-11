<template>
  <div id="attachment">
    <div class="box-card-scroll">
      <div slot="header" class="clearfix">
        <span>background-attachment  scroll</span>
      </div>
      <div class="scroll">
        <h3 class="item" v-for="(item) in 100" :key="item">item--{{item}}</h3>
      </div>
    </div>
    <div class="box-card-scroll">
      <div slot="header" class="clearfix">
        <span>background-attachment  local</span>
      </div>
      <div class="local">
        <h3 class="item" v-for="(item) in 100" :key="item">item--{{item}}</h3>
      </div>
    </div>
    <div class="box-card-scroll">
      <div slot="header" class="clearfix">
        <span>background-attachment  fixed</span>
      </div>
      <div class="fixed">
        <h3 class="item" v-for="(item) in 100" :key="item">item--{{item}}</h3>
      </div>
    </div>
    <div class="box-card-scroll">
      <div slot="header" class="clearfix">
        <span>background-attachment  fixed --- 实列</span>
      </div>
      <div class="create-fixed">
        <section class="g-word">Header</section>
        <section class="g-img1">IMG1</section>
        <section class="g-word">Content1</section>
        <section class="g-img2">IMG2</section>
        <section class="g-word">Content2</section>
        <section class="g-img3">IMG3</section>
        <section class="g-word">Footer</section>
      </div>
    </div>
  </div>
</template>

<script>
export default {
 
}
</script>

<style lang="stylus" scoped>
$img-url = 'https://tech.youzan.com/content/images/2018/03/-----2018-03-20---11-46-34.jpg'
$img1 = 'https://tech.youzan.com/content/images/2018/05/WX20180515-193339.png'
$img2 ='https://tech.youzan.com/content/images/2018/06/logo.png'
$img3 = 'https://tech.youzan.com/content/images/2018/01/20170508144607_267.png'
setting(img)
  background-image url(img)
  background-attachment fixed
  background-size cover
  background-position center center

backdrop(attachment)
  height 300px
  overflow-x hidden
  overflow-y scroll
  background-image url($img-url)
  background-size cover
  background-attachment attachment
itemStyle()
  margin 20px 0
  padding 10px 0
  background rgba(108, 108, 108, 0.7)
  text-align center
  color #fff

#attachment
  .box-card-scroll
    font-size 16px
    font-weight 800
    margin 20px 0
    .clearfix
      span
        display inline-block
        font-size 20px
        padding 20px 0
    .scroll 
      backdrop(scroll)
    .local
      backdrop(local)
    .fixed
      backdrop(fixed)
    .item
      itemStyle()

section 
  height 100vh
  background rgba(0, 0, 0, .7)
  color #fff
  line-height 100vh
  text-align center
  font-size 30px

.g-img1 
  setting($img1)
.g-img2 
  setting($img2)
.g-img3 
  setting($img3)

.create-fixed
  height 100vh !important
  overflow-x hidden 
  overflow-y scroll
</style>