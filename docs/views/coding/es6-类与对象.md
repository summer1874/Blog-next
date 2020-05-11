---
layout: post
title: "🚀ES6  类与对象"
date: 2018-04-10
categories:
  -   Coding 
tags:
  - ^ECMAScript 6
---
### ES5中的近类结构
#### ES5以及之前的版本，没有类的概念，为了实现面向对象，创建了特殊的近类结构。
#### ES5中创建类的方法：新建一个构造函数，定义一个方法并且赋值给构造函数的原型。
```js
function Person(name){
  this.name = name;
}
Person.prototype.sayName = function(age){
  return this.name + age;
}
var p = new Person('hmm');
var setterPerson = p.set(18);
console.log(p);
console.log(setterPerson);
```

### ES6
```js
class Person{
  constructor(name){
    this.name = name;
  }
  sayName(age){
    return this.name + age;
  }
}
const p = new Person('hmm');
const sayName = p.sayName(18);
console.info(p);
console.log(sayName);
```
