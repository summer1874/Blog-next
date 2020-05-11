---
layout: post
title: "uni-app"
date: 2019-09-25
category: Coding
tags: 
  - 混合开发
---

路由
根据pages.json统一管理
```json

```
### 背景图片
`uni-app` 支持使用在 `css` 里设置背景图片，使用方式与普通 `web` 项目相同，需要注意以下几点：

- 支持 `base64` 格式图片。
- 支持网络路径图片。
- 使用本地路径背景图片需注意：
- 图片小于 `40kb`，`uni-app` 会自动将其转化为 `base64` 格式；
- 图片大于等于 `40kb`， 需开发者自己将其转换为`base64`格式使用，或将其挪到服务器上，从网络地址引用。

本地背景图片的引用路径推荐使用以 `~@` 开头的绝对路径。
```css
 .block {
     background-image: url('~@/static/logo.png');
 }
```
:::warning
微信小程序不支持相对路径（真机不支持，开发工具支持）

其他端使用本地背景图片作为背景图没有限制
:::


- 全局引入图片资源 通过base64（大于40kb需自己转换）
- 国际化
  - 基本流程同vue使用vue-i18n一致
  - `app端`需要再mian.js加上`vue.prototype._i18n = i18n`原理未知
  - 全局mixin封装,含 标题修改
  ```js
  export default {
    methods: {
      $f(key) {
        return this.$t(key)
      }
    },
    onLoad() {
      const route = this.$mp.page.route.split('/')
      // 获取page title 对应的下标 
      const pageTitle = route[route.length - 2]
      uni.setNavigationBarTitle({
        title: this.$f(`${pageTitle}.title`)
      })
    }
  }
  ```
- 字体图标
  由于目前 svg 无法跨平台使用，所以使用字体方式的方式引入
- 全局数据管理
- 路由鉴权
- 蓝牙连接
- 热更新
- 整包替换
