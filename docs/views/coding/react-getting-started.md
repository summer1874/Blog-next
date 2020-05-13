---
layout: post
title: "🧶 react 学习笔记"
date: 2019-07-11
categories: 
  - Coding
tags:
  - react
keys:
  - a0c280fb6cb59d4e8f9d0c9eded5d346
---

$$\frac {\partial^r} {\partial \omega^r} \left(\frac {y^{\omega}} {\omega}\right) 
= \left(\frac {y^{\omega}} {\omega}\right) \left\{(\log y)^r + \sum_{i=1}^r \frac {(-1)^i r \cdots (r-i+1) (\log y)^{r-i}} {\omega^i} \right\}$$
## 环境搭建
###  创建react app
```bash
npx create-react-app react-app
cd react-app
npm start
```
### index.js 解析
:::tip
- `ReactDOM.render(element, container[, callback])`
  - `element` 虚拟dom对象  
  - `container` dom对象表示渲染到哪个元素内
  - `callback` 回调函数
- 使用 `ReactDOM.render()` 对服务端渲染容器进行 hydrate 操作的方式已经被废弃，并且会在 React 17 被移除。作为替代，请使用` hydrate()`。
:::
```js
// react 是React库的入口点
import React from 'react' 
// 提供了针对DOM的方法，比如：把创建的虚拟DOM，渲染到页面上
import ReactDOM from 'react-dom' 
....
// 渲染
ReactDOM.render(<componentName/>, document.getElementById('nodeName'))

```


## JSX
:::tip
`JSX`，是一个 `JavaScript` 的语法扩展。

JSX是非必须的，但它有以下优点：
- JSX 执行更快，因为它在编译为 JavaScript 代码后进行了优化。
- 它是类型安全的，在编译过程中就能发现错误。
- 使用 JSX 编写模板更加简单快速。

**推荐使用 JSX 的方式创建组件**
:::
### 转换
`Babel` 会把 `JSX` 转译成一个名为` React.createElement()` 函数调用。
```js
const element = (
  <h1 className="greeting">
    Hello, world!
  </h1>
)

// => Babel <=

const element = React.createElement(
  'h1',
  {className: 'greeting'},
  'Hello, world!'
)
```
### 表达式，样式，注释，数组
:::warning
- 因为 JSX 语法上更接近 JavaScript 而不是 HTML，所以 React DOM 使用 camelCase（小驼峰命名）来定义属性的名称，而不使用 HTML 属性名称的命名约定
  - 如果在 JSX 中给元素添加类, 需要使用 `className` 代替 `class`
  - `label` 的 `for`属性，使用`htmlFor`代替
  - `tabindex` 使用 `tabIndex`代替

- 在 JSX 中可以直接使用 JS代码，直接在 JSX 中通过 `{}` 中间写 JS代码即可
- 在 JSX 中只能使用表达式，但是不能出现 语句！！！
- 在 JSX 中注释语法：`{/* 中间是注释的内容 */}`
:::
```js
<lable htmlFor="use" className="remind" />

<h1>{ 1 + 1 }</h1>

const spanStyle = {
  // React 会在指定元素数字后自动添加 px 
  fontSize: 100,
  color: '#ffffff'
}
<span style={spanStyle}>hello world</span>


```


## hooks
### React 16.8带来的全新特性, 即将替代class组件的写法
```ts
import React from 'react'

interface IProps{
  message: string
}
class Hello extends React.Component<IProps> {
  render() {
    return (
      <h2>{ this.props.message  }</h2>
    )
  }
}
export default Hello
```
```ts
import React from 'react'

interface HelloProps {
  message: string
}
const Hello:React.FC<HelloProps> = (props) => {
  return <h2>{ props.message }</h2>
}

Hello.defaultProps = {
  message: 'hello world'
}

export default Hello
```
### 没有破坏性改动
1. 完全可选
2. 百分百向后兼容
3. 没有计划从 React 中移除 class

### hook所解决的痛点
1. 组件很难服用状态逻辑
2. 复杂组件难以理解，尤其是生命周期函数


### useState
- `useState`是`react`自带的一个`hook`函数，它的作用就是用来声明状态变量。
- `useState`这个函数接收的参数是我们的状态初始值（`initial state`），它返回了一个数组，这个数组的第`[0]`项是当前当前的状态值，第`[1]`项是可以改变状态值的方法函数。

### useEffect
我们写的有状态组件，通常会产生很多的副作用（`side effect`）
- 比如发起ajax请求获取数据，添加一些监听的注册和取消注册，手动修改dom等等。
- 我们之前都把这些副作用的函数写在生命周期函数钩子里，比如`componentDidMount`，`componentDidUpdate和componentWillUnmount`。
- 而现在的`useEffect`就相当与这些声明周期函数钩子的集合体。它以一抵三。

## 基础语法
```js
// 引入 react 及解构 component
// >  class *** extends React.Component => class *** extends Component
// >  React 为必需 ， jsx 需要 React 解析
import React, { Component } from 'react'
import TodoItem from './TodoItem'
// 该类通过extends关键字，继承了Component类的所有属性和方法
class TodoList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      inputValue: '', 
      list: []
    }
    // 通过bind指定this
    // <button onClick={this.handleSearch,bind(this)}>新建</button>
    // 优于上述写法
    this.handleSearch = this.handleSearch.bind(this)
    this.handleInputChange = this.handleInputChange.bind(this)
  }
  render() {
    return (
      <div>
        <label htmlFor="search">输入</label>
        <input id="search" value={this.state.inputValue} onChange={this.handleInputChange}></input>
        <button onClick={this.handleSearch}>新建</button>
        <ul>  
          {
            this.state.list.map((e, i) => {
              return (
                <div>
                  <TodoItem key={i} content={e}/>
                </div>
                // <li 
                // key={i} 
                // index={i} 
                // onClick={this.handleRemoveItem.bind(this, i)}
                // dangerouslySetInnerHTML={{__html: e}}></li>
              )
            })
          }
        </ul>
      </div>
    )
  }
  handleSearch() {
    this.setState((prevState) =>  ({
      list: [...prevState.list, this.state.inputValue],
      inputValue: ''
    }))
  }
  handleInputChange(e) {
    const { value } = e.target
    this.setState( () => ({
      inputValue: value
    }))
  }
  handleRemoveItem(index) {
    const list = [...this.state.list]
    list.splice(index, 1)
    this.setState({
      list
    })
  }
}
export default TodoList
```

```js
<Fragment/> 
className
return ()
dangerouslySetInnerHTML={{_html: item}}

<label htmlFor="name">
<input id="name "/>
```
<!-- 原理进阶
动画
redux
redux进阶

核心技术点
create-react-app
组件化思维
JSX
开发调试工具
虚拟DOM
生命周期
react-transition-group
redux
antd
ui，容器组件
无状态组件
redux-thunk
redux-saga
styled-components
immutable.js
redux-immutable

react fiber
函数式编程



immutable
// state 不允许我们做如何的改变

声明式开发
// 减少dom操作 减少代码量

可以与其他框架并存

组件化

单向数据流
// bug 定位 数据混乱

视图层框架
// 不负责数据的传递 

函数式编程
// 维护 测试


mkdir messenger-webhook
 // Creates a project directory cd messenger-webhook 
 // Navigates to the new directory touch index.js 
 // Creates empty index.js file. npm init 
 // Creates package.json.Accept default for all questions. npm install express body-parser --save 
 // Installs the express.js http server framework module, 
 // and then adds them to the dependencies section of package.json file.


 ```js
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Square extends React.Component {
  render() {
    return (
      <button className="square">
        {this.props.value}
      </button>
    );
  }
}

class Board extends React.Component {
  renderSquare(i) {
    return <Square value={i}/>;
  }

  render() {
    const status = 'Next player: X';

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);

 ``` -->