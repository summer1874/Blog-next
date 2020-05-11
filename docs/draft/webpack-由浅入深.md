---
layout: post
title: "📦webpack 由浅入深"
date: 2018-06-01
excerpt: "webpack 模块化 核心概念"
vssue-title: "webpack 模块化 核心概念"
category:  Coding
tags:
  - webpack
---

## 模块化
### 命名空间
- 库名.类别名.方法名
```js
var NameSpace = {}
NameSpace.type = NameSpace.type || {}
NameSpace.method = function () { ... }
```
### CommonJS
- Modules/1.1.1
- 一个文件为一个模块
- 通过 module.exports 暴露模块借口
- 通过 require 引入模块
- 同步执行

```js
var EventEmitter = require('events').EventEmitter
var res = require('./response')
/**
 * Expose ``createApplication()
 */
exports = module.exports = createApplication
```
[commonjs](http://wiki.commonjs.org/wiki/Modules/1.1.1)
### AMD
- Async Module Definition
- 使用 define 定义模块
- 使用 require 加载模块
- RequireJS
- 依赖前置，提前执行

```js
define(
  // 模块名
  'alpha',
  // 依赖
  ['require', 'exports', 'beta'],
  function (require, exports, beta) {
    exports.verb = funtion () {
      return beta.verb()
      // Or:
      // Create missing node module: 'beta'
      return require('beta').verb()
    }
  }
)

difine(
  ['a', 'b', 'c', 'd', 'e'],
  function (a, b, c, d, e) {
    // 等于在最前面声明并初始化来要用的所有模块
    if (false) {
      // 即使压根没有用到 b模块，但 b 模块还是提前执行来
      b.foo()
    }
  }
)
```
[AMD](https://github.com/amdjs/amdjs-api/wiki/AMD)

### CMD
- Common Module Definition
- 一个文件为一个模块
- 使用 define 来定义一个模块
- 使用 require 来加载一个模块
- SeaJS
- 尽可能懒执行
```js
define(function(require, exports, module) {
  // 通过 require 引入依赖
  var $ = require('jquery')
  var Spinning = requier('./spinning')

  // 通过 exports 对外提供接口
  exports.doSomething = ...

  // 或者通过 module.exports 提供接口
  module.exports = ...
})
```
### UMD
- Universal Module Definition
- 通用解决方案
- 三个步骤
  - 判断是否支持 AMD
  - 判断是否支持 CommonJS
  - 如果都没有 使用全局变量
```js
(function (root, factory) {
  if (typeof define === 'function' && defune.adm) {
    define([], factory)
  } else if (typeof exports === 'object') {
    module.exports = factory()
  } else {
    root.returnExports = factory()
  }
}(this, function() {
  return {}
}))
 
```
### ES6 module
- EcmaScript Module
- 一个文件一个模块
- export / import
```js
```
### AMD/CMD/UMD


## webpack 核心概念 
### Entry
代码的入口
打包入口
单个或多个
```js
module.exports = {
  entry: 'index.js'
}
module.exports = {
  entry: ['index.js', 'vendor.js']
}

module.exports = {
  entry: {
    index: ['index.js', 'app.js'],
    vendor: 'vendor.js'
  }
}
```
Output
Loadder
Plugins

### 使用webpack
### 