---
layout: post
title: "📖《JavaScript 语法简明手册》读书笔记"
date:  2020-07-21
categories:
  - Note
tags:
  - JavaScript
---
## 目录
[[toc]]
## Chrome 控制台
### copy 函数
:::tip
如果仅返回 `JSON`，就意味着方法并不会将其复制到缓冲区中（`JSON` 字符串格式并不支
持方法，仅支持属性）
:::
```js
let x = { property:1, prop1:2, method: function() {}}
copy(x)

// ctrl + v
{
  "property": 1,
  "prop1": 2
}
```
### console.dir
:::tip
显示一个由特定的 `Javascript` 对象列表组成的可交互列表。这个列表可以使用三角形隐藏和显示来审查子对象的内容,并且可以输出 `DOM` 元素。
:::
#### 语法
 `console.dir(Object)`
#### 参数
- `object`  
  - 打印出该对象的所有属性和属性值。

![console.dir 对比 console.log](https://pic.downk.cc/item/5f1e778814195aa594ad0c7b.png)

### console.error
:::tip
向 Web 控制台输出一条错误消息。console.error 的好处在于它会提供栈追踪。
:::
#### 语法
`console.error(obj1 [, obj2, ..., objN])`  
`console.error(msg [, subst1, ..., substN])`  
`console.exception(obj1 [, obj2, ..., objN])`  
`console.exception(msg [, subst1, ..., substN])`  
>注意: console.exception() 是 console.error() 的别名；它们功能相同。

#### 参数
- `obj1 ... objN`
  - 要输出的 JavaScript 对象列表。 这些对象的字符串形式按顺序加起来然后输出。
- `msg`
  - 一个字符串，它包含零个或多个替代字符串。
- `subst1 ... substN`
  - JavaScript 对象可以用此来替换msg里的替代字符串。你可以控制输出的格式。

![console.error 会提供栈追踪](https://pic.downk.cc/item/5f1e7bf914195aa594af74a0.png)

### console.time 和 console.timeEnd
:::tip
跟踪函数调用所消耗的时间，这对优化代码很有帮助
:::
#### 语法
`console.time(timerName)`  
`console.timeEnd(label)`
#### 参数
- `timerName`
  - 新计时器的名字。 用来标记这个计时器，作为参数调用 `console.timeEnd()`可以停止计时并将经过的时间在终端中打印出来.
- `label`
  - 需要停止的计时器名字。一旦停止，计时器所经过的时间会被自动输出到控制台。
```js
console.time()
setTimeout(() => {}, 1000)
console.timeEnd()
// default: 0.0478515625ms

console.time('setTimeout')
setTimeout(() => {}, 1000)
console.timeEnd('setTimeout')
// setTimeout: 0.0380859375ms

// 异步与同步
console.time('setTimeout2')
setTimeout(() => {
  console.timeEnd('setTimeout2')
}, 1000)
// setTimeout2: 1000.747802734375ms

```

### console.clear
:::tip
清空控制台，并输出 Console was cleared。
:::

### 打印对象
:::tip
在 JavaScript 中，所有的对象都拥有 toString 方法。当将一个对象传递给 console.log 时，
它可以将其作为对象或字符串进行打印
:::
```js
let obj = {}
console.log(obj) // {}
console.log('Object = ' + obj) // Object = [object Object]
console.log(`${obj}`) // [object Object]  
```
## 使用Javascript
