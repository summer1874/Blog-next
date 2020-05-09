---
layout: post
title: "🚀ES6  扩展对象的功能性"
date: 2018-04-03
categories:
  -   Coding 
tags:
  - ^ECMAScript 6
---
## 对象类别
在ES6中，对象分为下面几种叫法。
- 普通对象

- 特异对象

- 标准对象

- 内建对象
## 对象字面量语法拓展
- ES6针对对象的语法扩展了一下功能
  ```js
  //es5
  function obj(id){
    return{
      id
    }
  }

  //es6
  const obj = id => ({
    id
  })
  ```

- 对象方法简写
  ```js
  //es5
  var obj = {
    id:1,
    getId:function(){
      console.log(this.id);
    }
  }

  //es6
  const obj = {
    id:1,
    getId(){
      console.log(this.id);
    }
  }
  ```

- 属性名可计算

    **属性名可以传入变量或者常量，而不只是一个固定的字符串。**
    ```js
    const name = "winni";
    const obj = {
    [`${name}_22`]:'girl'
    }
    console.log(obj);//{winni-22: "girl"}
    console.log(obj['winni_22']);//girl
    console.log(obj.winni_22);//girl
    ```
## ES6对象新增方法
-  Object.is()

  **用来解决JavaScript中特殊类型 == 或者 === 异常的情况。**

  ```js
  //ES5 异常情况
    NaN === NaN  //false
    -0 === +0    //true
    0 == "0"      //true

  //ES6
  //为了解决历遗留问题，新增了Object.is()来处理2个值的比较。
    Object.is(NaN,NaN);//true
    Object.is(-0,+0); //false
    Object.is(0,"0");//false
  ```

- Object.assign()

  **实现了拷贝一个对象给另外一个对象，返回一个新的对象。**
    ```js
    //Object.assign(target, ...sources)
    var obj = { a: 1 };
    var copy = Object.assign({}, obj);
    console.log(copy); // { a: 1 }
    
    //如果目标对象中的属性具有相同的键，则属性将被源中的属性覆盖。后来的源的属性将类似地覆盖早先的属性。
    var obj = { a: 1 ,b:2};
    var copy = Object.assign({a:0}, obj);
    console.log(copy); //  { a: 1 ,b:2}
    ```

## 重复的对象字面量属性
**ES5的严格模式下，如果你的对象中出现了key相同的情况，那么就会抛出错误。而在ES6的严格模式下，不会报错，后面的key会覆盖掉前面相同的key。**
```js
const state = {
  id: 1,
  id: 2
}
console.log(state.id) // 2
```

## 自有属性枚举顺序
**ES6新增标准**

- 首先遍历所有数值键，按照数值升序排列。
- 其次遍历所有字符串键，按照加入时间升序排列。
- 最后遍历所有 Symbol 键，按照加入时间升序排列。
```js
const obj = {
  a:1,
  id:1,
  name:'winni',
  1:112,
  10:110,
  2:199,

}
console.log(Object.getOwnPropertyNames(obj));
// ["1", "2", "10", "a", "id", "name"]
console.log(Object.assign(obj,null));
//{1: 112, 2: 199, 10: 110, a: 1, id: 1, name: "winni"}
```
## 增强对象原型
定义一个对象
```js
let obj = {};
let A = Object.create(obj);
function B (){};
class C {};
```
## 方法的定义
ES6明确了方法的定义。
```js
let a = {
  //方法
  name() {
    return 'eryue'
  }
}
//函数
function name() {}
```