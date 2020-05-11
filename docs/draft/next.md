---
layout: post
title: 'next 同构'
date: 2019-09-17
category: Coding
tags: 
  - REACT
---
npm版本号
```
^aa.bb.cc
^ 代表自动安装当前大版本号下最新的
aa 是大版本好，一般只有breaking changers的时候才会更新
bb 一般是修护较大bug
cc 则是一些细微的修改
指定版本号
yarn add koa@2.7.0

package.json 中直接写入
```

## Nextjs项目搭建
### 创建方式
#### 手动创建
1. 创建文件目录并安装依赖
```bash
mkdir hello-next
cd hello-next
npm init -y
yarn add react react-dom next
mkdir pages
```
2. 将 `package.json`的`scripts`替换
```json
"scripts": {
  "dev": "next", 
  "build": "next build",
  "start": "next start"
},
```
3. 直接`yarn run dev`, 打开`http://localhost:3000`(这里展示是404页面，因为`pages`里没有页面文件)
4. 在`pages`中新建`index.js`, 如下
  :::tip
  这里不用像以前一样每个页面去引入模块(`react`，`react-dom`)了,因为`next`已经全局帮我们去处理了。
  :::
  ```js
  // import React from 'react'
  const  Index = () => (<h2>hello next</h2>)
  export default Index
  ```


### 使用`create-next-app`
1. 全局安装 `create-next-app`
  - `npm i -g create-next-app`
2. 创建项目
  - `npx`, `yarn create`选其一。
    - `npx craete-next-app <项目名>` 
    - `yarn create next-app <项目名>`
## nextjs作为koa的中间件使用
- 服务端
  - `nextjs`自身带有服务器，只处理`ssr`渲染
  - 处理`HTTP`请求，并根据请求数据返回相对应的内容
- nextjs 无法处理服务端
  - 数据接口
  - 数据库连接
  - session状态
- 为什么Koa
  - koa是一个非常流行的轻量级nodejs服务端框架
  - 项目相对轻量，并不需要很多集成功能
  - 非常易于扩展， 编程模式非常符合JS特性
- 安装及使用
```bash
yarn add koa
touch server.js
```
## Nextjs技术点剖析
## React Hooks深度解析
## Nextjs集成redux
## OAuth原理深度解析
## 集成Github仓库
## 展示你创建和关注的仓库
## 查看仓库详情和Issues
## 同构
## OAuth
