---
layout: post
title: '30-seconds-of-code'
date: 2019-10-24
category: Coding
tags:
  - ^ECMAScript 6
  - JS
--- 

## Adapter 适配器
### ary 
:::tip
`ADAPTER` `FUNCTIONIN` `TERMEDIATE`

创建最多接受`n`个参数的函数，忽略任何其他参数。使用`Array.prototype.slice(0,n)`和`spread`操作符`(…)`调用提供的函数`fn`，参数最多为`n`个。
:::
```js
const ary = (fn, n) => (...args) => fn(...args.slice(0, n))
```
<details>
<summary>EXAMPLES</summary>

```js
const firstTwoMax = ary(Math.max, 2);
[[2, 6, 'a'], [6, 4, 8], [10]].map(x => firstTwoMax(...x)) // [6, 6, 10]
```

</details>

## 生成随机字符串
```js
Math.random().toString(36).substring(2)
```



<style>
summary {
  cursor: pointer;
}
</style>