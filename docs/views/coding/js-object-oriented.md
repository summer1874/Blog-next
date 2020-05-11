---
layout: post
title: "🛵JS 面向对象"
date: 2018-11-14
categories:
  -   Coding
tags:
  - JS
---
## 类与实例
### 类的声明
```js
//  ES5 构造函数
function Animal (name = 'cat') {
  this.name = name
}

// ES6
class Animal2 {
  constructor (name) {
    this.name = name
  }
}
```
### 生成实例
```js
const cat = new Animal
const mouse = new Animal2('jack')
```

## 如何实现继承
### `call` `apply`
```js {11}
function Parent(name = 'parent') {
  this.name = name
}

Parent.prototype.say = function () {}

function Child (age) {
  Parent.call(this)//  Parent.apply(this)
  this.age = age
}
const child = new Child(18)
```
:::tip
- **原理:** 通过`call`,`apply`改变`this`指向，将`parent`挂载到`child`。
- **弊端:** 无法实现`portotype`的继承。
:::

### `prototype`
```js {8}
function Parent(name = 'parent') {
  this.name = name
}
function Child (age) {
  this.age = age
}
Child.prototype = new Parent()
const child = new Child(18)
```
:::tip
- **原理** 实例通过`new`运算符`__proto__`会继承该构造函数的`prototype`，`Child.prototype`通过赋值`new Parent`实现继承。
- **弊端** 通过`prototype`继承，由于原型链的原型是相等的，`c1`的改变会，会影响到`c2`（`parent`里的属性）。
:::

## 继承的几种方法
### prototype,call (apply)组合使用
```js {9}
function Parent(name = 'parent') {
  this.name = name
}
function Child (age) {
  this.age = age
}
Child.prototype = new Parent()
const child = new Child(18)
```
:::tip
- **原理** 实例通过`new`运算符`__proto__`会继承该构造函数的`prototype`，C`hild.prototype`通过赋值`new Parent`实现继承。
- **弊端** 通过`prototype`继承，由于原型链的原型是相等的，`c1`的改变会，会影响到`c2`（`parent`里的属性）。
:::

### `prototype` and `call (apply)`组合使用---优化
```js
function Parent(name = 'parent') {
  this.name = name
}
function Child(age) {
  Parent.call(this)
  this.age = age
}
Child.prototype = Parent.prototype
const child = new Child(18)
```
:::tip
- **原理** 挂载`Parent`的属性到`Child`的同时将`Parent`的原型赋值到`Child`的原型上。
- **弊端** `child`的`canstructor`指向父类。
:::

### `Object.create` and `constructor`
```js
function Parent(name = 'parent') {
  this.name = name
}
function Child(age) {
  Parent.call(this)
  this.age = age
}
Child.prototype = Object.create(Parent.prototype)
child.prototype.constructor = Child
const child = new Child(18)
```
:::tip
- **原理** 
  - 挂载`Parent`的属性到`Child`。
  - 通过`Object.create(Parent.prototype)`创建一个新对象，使用Parent的原型来赋值到`Child`原型的`__proto__`上。
  - 通过赋值重新绑定`canstructor`
:::


