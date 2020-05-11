---
layout: post
title: "👔CSS 镂空———mask"
date: 2018-03-01
categories:
  -  Coding
tags: 
  - css
---

:::tip
用法和 `background` 基本一致，学习零成本。比如 `mask-image`, `mask-origin`, `mask-position`, `mask-repeat`, `mask-size` 都和 `background` 一致。
:::


<maskTicket/>

### html
```html
<div class="mask-ticket">
  <div class="wrapper">
    <div class="addend">
      <div class="ticket">
        <div class="info">
          <h3>$500</h3>
          <p>满 $3000 减 $500</p>
        </div>
        <button>
          立即抢购
        </button>
      </div>
      <span class="symbol">+</span>
      <div class="mask"></div>
    </div>
    <span class="symbol">=</span>
    <div class="ticket-mask">
      <div class="ticket">
        <div class="info">
          <h3>$500</h3>
          <p>满 $3000 减 $500</p>
        </div>
        <button>
          立即抢购
        </button>
      </div>
    </div>
  </div>
</div>
```

### stylus
```stylus
$svg = 'http://static.w3ctrain.com/upload_dc601fca016e97ec2575565e7f0dcfb2-mask2.svg'
$img = 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/199011/concert.png'

maskFunc(name, img){
  width 288px
  height 176px
  {name} url(img)
  {name}-size cover
 }

*
  box-sizing border-box
  padding 0
  margin 0

.mask-ticket
  background-image linear-gradient(-45deg, #8067B7, #EC87C0)
  min-height calc(100vh - 40px)
  margin 20px
  font-family 'Lato', sans-serif
  display flex
  justify-content center
  align-items center

.wrapper
  display flex
  flex-direction column
  align-items center
 .mask
   maskFunc('background', $svg)
 .ticket-mask
   maskFunc('mask', $svg)


.ticket 
  width 288px
  height 176px
  border-radius 4px
  overflow hidden
  background-image: linear-gradient(134deg, #3023AE 0%, #C86DD7 100%)
  .info
    height 120px
    background url($img)
    padding 24px 16px
    color white
    h3
      font-size 24px
      line-height 32px
      margin 16px 0 0 0
     p
      margin 16px 0 0 0
   button 
    background transparent
    appearance none
    display flex
    border none
    height 56px
    justify-content center
    align-items center
    width 100%
    font-size 14px
    color white
    outline none
.symbol 
  color white
  font-size 40px
  margin 10px
.addend 
  display flex
  align-items center
  @media (max-width 800px) 
    flex-direction column 
```

[参考链接](https://juejin.im/post/5bc8184ee51d450e81090d94?utm_source=gold_browser_extension)

[张鑫旭-CSS遮罩CSS3 mask/masks详细介绍](https://www.zhangxinxu.com/wordpress/2017/11/css-css3-mask-masks/)