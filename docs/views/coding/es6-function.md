---
layout: post
title: "🚀ES6  函数"
date: 2018-04-05
categories:
  -  Coding
tags:
  - ^ECMAScript 6
---
默认参数，命名参数，不定参数，展开运算符，箭头函数，尾调用优化。
<!-- more -->
## 函数默认值
### ES5
```js
function a(num,callback){
  num = num || 5;
  callback = callback || function(data){console.log('ES5':data)};
  callback(num * num);
}
a();//25


//更为安全的方式
function a(num,callback){
  if(typeof num === "undefined"){
    num = 5;
  }
  if(typeof callback === "undefined"){
    callback = function(data){console.log('ES5:',data)}
  }
  callback(num * num);
}
a();// 25

```
### ES6

参数不仅可以设置默认值为字符串，数字，数组或者对象，还可以是一个函数。
```js
function a(num = 5,callback = function(data){console.log('ES5':data)}){
  callback(num * num);
}
a();//25

a(4,function(data){console.log(data + 4)});//20

```
### 默认参数对arguments的影响。
- 函数默认值不能被arguments识别
  ```js
  function a(num = 1, b = 2){
    console.log(arguments);
  }
  a();//{}


  a(4,6);//{0:6,1:2}
  ```
- arguments不能在函数内修改默认值后跟随着跟新了。
  ```js
  function a(num){
    console.log(num === arguments[0]);//true
    num = 2;
    console.log(num === arguments[0]);//true
  }
  a(1);


  'use strict'
  function a(num){
    console.log(num === arguments[0]);//true
    num = 2;
    console.log(num === arguments[0]);//false
  }
  a(1);


  //在ES6环境下，默认值对arguments的影响和ES5严格模式是同样的标准。
  ```
### 函数默认值的临时死区
```js
function a(val = 2,num = 2, sum = val * num){
console.log(sum);
}
a();//4
>4

function a(sum = val * num,val = 2,num = 2){
console.log(sum);
}
a();//NaN

//sum = undefined * undefined;
//sum = NaN;
```

--------------------
## 无命名参数
当传入的参数是一个对象，不是一个具体的参数名，则是无命名参数。

ES5
```js
function add(object){
  console.log(object.a + object.b);
}
var obj = {
  a:1,
  b:2,
}
add(obj);//3
```
ES6
```js
function add(...arr){
  console.log(a + b);
}
let a = 1,b = 2;

add(a,b);//3
```

**不定参数的使用限制**
```js
//必须放在所有参数的末尾
function add(...arr,c){
  console.log(a + b);
}
let a = 1,b = 2,c = 3;

add(a,b,c);// Unexpected token

//不能用于对象字面量setter中
let obj = {
  set add(...arr) {

  }
}
```
>ES6中的构造函数Function新增了支持默认参数和不定参数。

---------------
## 展开运算符（...）
展开运算符的作用是解构数组，然后将每个数组元素作为函数参数。

有了展开运算符，我们操作数组的时候，就可以不再使用apply来指定上下文环境了。
```js
//ES5的写法
let arr = [10, 20, 50, 40, 30]
let a = Math.max.apply(null, arr)
console.log(a) // 50

//ES6的写法
let arr = [10, 20, 50, 40, 30]
let a = Math.max(...arr)
console.log(a) // 50
```
类数组对象变成数组
```js
var list=document.getElementsByTagName('div'); 
var arr=[...list];
```
---------------
## 块级函数
**严格模式下**:在ES6中，你可以在块级作用域内声明函数，该函数的作用域只限于当前块，不能在块的外部访问。
```js
    "use strict";
    if(true) {
      const a = function(){

      }
    }
```
**非严格模式**:即使在ES6中，非严格模式下的块级函数，他的作用域也会被提升到父级函数的顶部。所以大家写代码尽量使用严格模式，避免这些奇葩情况。


--------------
## 箭头函数(=>)
>箭头函数表达式的语法比函数表达式更短，并且不绑定自己的`this`，`arguments`，`super`或 `new.target`。这些函数表达式`最适合用于非方法函数`，并且它们`不能用作构造函数`。

**基础语法**
```js
(param1, param2, …, paramN) => { statements }
(param1, param2, …, paramN) => expression
// 等同于: (param1, param2, …, paramN) => { return expression; }

// 当只有一个参数名时，括号是可选的
(singleParam) => { statements }
singleParam => { statements }

//一个没有参数的函数 应该用一对括号来写。
() => { statements }
```
**高级语法**
```js
// 在函数的主体中，返回一个对象的文字表达式
params => ({foo: bar})

// 支持Rest参数和默认参数
(param1, param2, ...rest) => { statements }
(param1 = defaultValue1, param2, …, paramN = defaultValueN) => { statements }

// 还支持在参数列表中进行解构赋值
let f = ([a, b] = [1, 2], {x: c} = {x: a + b}) => a + b + c;
f();
// 6
```
### 箭头函数的简单理解
####  箭头函数的左边表示输入的参数，右边表示输出的结果。
  ```js
  const s = a => a
  console.log(s(2)) // 2
  ```
#### 箭头函数中，最重要的this报错将不再成为你每天都担心的bug。

    ```js
    //ES5
    function Person() {
    var that = this;
    that.age = 0;

    setInterval(function growUp() {
    that.age++;
    }, 1000);
    }
    //ES6

    //箭头功能不会创建自己的this；它使用封闭执行上下文的this值。因此，在下面的代码中，传递给setInterval的函数内的this与封闭函数中的this值相同
    function Person(){
    this.age = 0;

    setInterval(() => {
    this.age++;
    }, 1000);
    }


    var p = new Person();
    ```

#### 箭头函数还可以输出对象，在react的action中就推荐这种写法。
  ```js
  //记住用params => {object:literal}这种简单的语法返回对象字面量是行不通的
  var func = () => { foo: 1 };
  // 调用函数 func() returns undefined

  var func = () => { foo: function() {} };
  // SyntaxError: function statement requires a name 语法错误
  //这是因为花括号({})里面的代码被解析为一系列语句（即 foo 被认为是一个标签，而非对象字面量的组成部分）。

  //所以，记得用圆括号把对象字面量包起来：

  var func = () => ({foo: 1});

  //实例
  const func = (name,age) =>({name,age});
  func('winni','22'); //{name: "winni", age: "22"}

  const func = (...arr) => ({name,age});
  const name = 'winni',age = 22;
  func(name,age);//{name: "winni", age: 22}
  ```
#### 支持立即执行函数表达式写法
  ```js
  const test = ((id) => {
    console.log(id);
  })(18);
  //18

    //应用闭包
    const test = (() => {
      let i = 1;
      const sum = val =>{i += val};
      return {
        add(){
          sum(1);
        },
        minus(){
          sum(-1)
        },
        value(){
          return i;
        }
      }
    })();

    const makeAdder = (x) =>  y => x + y;
  ```
#### 箭头函数很适用于callback；
```js
  //箭头函数给数组排序
  const arr = [10, 50, 30, 40, 20]
  const s = arr.sort((a, b) => a - b)
  console.log(s) // [10,20,30,40,50]
```
-------------
## 尾调用优化

>尾调用是指在函数return的时候调用一个新的函数，由于尾调用的实现需要存储到内存中，在一个循环体中，如果存在函数的尾调用，你的内存可能爆满或溢出。

**ES6中，引擎会帮你做好尾调用的优化工作，你不需要自己优化，但需要满足下面3个要求：**

- 函数不是闭包

- 尾调用是函数最后一条语句

- 尾调用结果作为函数返回

### 一个满足以上要求的函数如下所示
```js
"use strict";
function a() {
  return b();
}
```

### 下面的都是不满足的写法
```js
//没有return不优化
"use strict";
function a() {
  b();
}

//不是直接返回函数不优化
"use strict";
function a() {
  return 1 + b();
}

//尾调用是函数不是最后一条语句不优化
"use strict";
function a() {
  const s = b();
  return s
}

//闭包不优化
"use strict";
function a() {
  const num = 1
  function b() {
    return num
  }
  return b
}
```
### 尾调用实际用途——递归函数优化
在ES5时代，我们不推荐使用递归，因为递归会影响性能。

但是有了尾调用优化之后，递归函数的性能有了提升。

```js
//新型尾优化写法
"use strict";
function a(n, p = 1) {
  if(n <= 1) {
    return 1 * p
  }
  let s = n * p
  return a(n - 1, s)
}
//求 1 x 2 x 3的阶乘
let sum = a(3)
console.log(sum) // 6
```
