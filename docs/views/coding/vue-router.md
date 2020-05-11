---
layout: post
title: "🛸Vue Router"
date: 2018-05-03
categories:
  -   Coding
tags:
  - vue
---


## Vue Router
:::tip
Vue Router 是 Vue.js (单页面应用) 官方的路由管理器。
- 利用 [`propstate`](https://developer.mozilla.org/zh-CN/docs/Web/API/History_API) 操纵浏览器历史记录, [IE 11 的情况下事件监听器更改为 `hashchange`](https://github.com/vuejs/vue-router/pull/1988)
:::
## 起步
### 安装
```bash
# vuecli3
vue create dome
# 添加router插件，vuecli 会自动在src目录下生成 router.js
vue add router
```
### 解读 router.js 文件 
`dome/src/router.js`
```js
import Vue from 'vue' // 引入vue
import Router from 'vue-router' // 引入vue-router
import Home from './views/Home.vue' // 引入 Home 组件

Vue.use(Router) // Vue全局注册Router

export default new Router({ // 默认导出 router 的实例
  routes: [ // 配置路由 Array<RouteConfig>
    {
      path: '/', // string 对应当前路由的路径，总是解析为绝对路径
      name: 'home', //  string 当前路由的名称 => 命名路由
      component: Home // 对应的组件模板
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // 路由懒加载
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})

```
### [router-link](https://router.vuejs.org/zh/api/#router-link)
 `dome/src/App.vue`

**安装完成后， `vueCli`会自动添加两个`router-link`组件**
```vue
<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>
```
>:memo:`<router-link>` 组件支持用户在具有路由功能的应用中 (点击) 导航。 通过 `to `属性指定目标地址，默认渲染成带有正确链接的 `<a>` 标签，可以通过配置 tag 属性生成别的标签。另外，当目标路由成功激活时，链接元素自动设置一个表示激活的 `CSS` 类名。
```vue
<router-link 
  tag="li" 
  to="/home" 
  event="dblclick" 
  active-class="navigate"
   exact replace append>
   to required
</router-link>
```
#### router-link props
`to` `replace` `append` `tag` `active-class` `exact` `event` `exact-active-class`

[详情](https://router.vuejs.org/zh/api/#router-link-props)

<!-- #### [to](https://router.vuejs.org/zh/api/#to)
>:memo: 跳转至目标路由的链接。调用 `router.push()`。
#### [replace](https://router.vuejs.org/zh/api/#replace)
>:memo: 同`Location.replace()`。调用 `router.replace()`。
#### [append](https://router.vuejs.org/zh/api/#append)
  - 类型:`boolean`
  - 默认值:`false`
  >在当前 (相对) 路径前添加基路径
  :::tip
  在当前路径下添加 `about` 基路径,
  例如当前路径为 `/a`，点击后跳转至`/a/about`,再次点击后跳转至`a/about/about`。如果`append`属性为 `false`，则路径永远为 `/about`
  :::
  ```html
  <router-link :to="{ pash : 'about' }" append>append</router-link>
  <router-link :to="{ pash : '/about' }" append>表现与没有append属性一致</router-link>
  ```
#### [tag](https://router.vuejs.org/zh/api/#tag)
>:memo: 将`<router-link>` 渲染成某种标签。
#### [active-class](https://router.vuejs.org/zh/api/#active-class)
  - 类型:`string`
  - 默认值:`"router-link-active"`
    >设置**链接激活时使用的**CSS 类名。默认值可以通过路由的构造选项`linkActiveClass`来全局配置。
    ```vue
    <router-link :to="'/foo'" active-class="navigate"></router-link>

    <style>
    .navigate {
      color: red;
    }
    </style>
    ```
#### [exact](https://router.vuejs.org/zh/api/#exact)
>:memo: `<router-link>` 是否激活。
#### [event](https://router.vuejs.org/zh/api/#event)
>:memo: 声明可以用来触发导航的事件。可以是一个字符串或是一个包含字符串的数组。
#### [exact-active-class](https://router.vuejs.org/zh/api/#exact-active-class)
>:memo: 配置当链接被精确匹配的时候应该激活的 `class`。注意默认值也是可以通过路由构造函数选项 `linkExactActiveClass` 进行全局配置的。 -->
## vue-router 嵌套路由
`dome/src/router.js`
```js
{
  path: '/user', // 以 / 开头的嵌套路径会被当作根路径。
  name: 'user',
  component: () => import('./views/user.vue'), /
  children: [ // 定义子路由 关键字  Array<RouteConfig>
    {
      path: 'profile', // 跳转至 /user/profile.
      name: 'UserProfile',
      component: () => import('./views/profile')
    },
    {
      path: 'posts',
      name: 'UserPosts',
      component: () => import('./views/posts')
    }
  ]
}
```
`dome/src/user.vue`
```html
<div class="user">
   this is user page!!!
   <!-- user下的子路由(profile,posts )会渲染到 user.vue 下的 router-views  -->
   <router-view /> 
</div>
```
## 路由组件传参
#### 通过url传递参数
:::tip
通过vueRouter中的pash `/: 参数名` 进行配置。
:::
>声明方式
```js
{
  path: '/user/:name/:age',
  component: User
}
```
>传递格式
```html
<router-link to="/user/Nicole/18'"></router-link>
```
>通过 $roter.params 进行获取
```vue
<template>
  <div class="userInfo">
     {{$roter.params.name}}
     {{$roter.params.age}}
  </div>
</template>
<script>
export default {
  data () {
    return {
      name: this.$roter.params.name,
      age: this.$roter.params.age
    }
  }
}
</script>
```
#### 命名路由 
:::tip
命名路由
创建 `Router` 实例的时候，在 `routes` 配置中给某个路由设置名称
:::
`dome/src/router.js`
```js
...
{
   path: '/user/:name',
   component: User,
   name: 'user'
}
...
```
>链接到一个命名路由，可以给 router-link 的 to 属性传一个对象,跳转至目标路由的链接。调用 `router.push()`。
```html
<router-link :to="{ name: 'user', params: { userName: 'Nemo' }}">next</router-link>
```
```js
router.push({ name: 'user', params: { userName: 'Nemo' })
```
通过 Router 实例属性 进行取值
```vue
<div>
  {{ $route.params.userName }} {{userName}}
</div>

<script>
export default {
  data () {
    return {
      userName: this.$route.params.userName
    }
  }
}
</script>
```
#### porps 传参
>在组件中使用 $route 会使之与其对应路由形成高度耦合，从而使组件只能在某些特定的 URL 上使用，限制了其灵活性。

`dome/src/router.js`
```js
// 布尔模式 props 被设置为 true，route.params 将会被设置为组件属性。
  { path: '/user/:name', component: User, props: true },
// 对象模式 如果 props 是一个对象，它会被按原样设置为组件属性。当 props 是静态的时候有用。
  { path: '/static', component: User, props: { name: 'Nemo' }}, // 静态值
// 函数模式 创建一个函数返回 props。这样你便可以将参数转换成另一种类型，将静态值与基于路由的值结合等等.
  { path: '/search', component: User, props: (route) => ({ name: route.fullPath }) }
```

`dome/src/App.vue`
```vue
<template>
  <div id="app">
    <div class="nav">
      <router-link to="/user/Nicole">/</router-link>|
      <router-link to="/static">static</router-link>|
      <router-link to="/search">search</router-link>
    </div>
    <router-view class="view" foo="123" ></router-view>
  </div>
</template>
```
`dome/src/views/user.vue`
```vue
<template>
  <div id="user">
    {{ name }} {{ $attrs }}
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String, 
      default: 'summer!'
    }
  }
}
</script>
```
## 命名视图 (单页面多路由区域操作)
:::tip
通过修改 `<router-view>` 组件 `Props` `name` 来进行视图命名
- **`name`**
  - 类型: `string`
  - 默认值: `"default"`
  - 如果 `<router-view>`设置了名称，则会渲染对应的路由配置中 `components` 下的相应组件。
:::
```html
<router-view class="view one"></router-view>
<router-view class="view two" name="a"></router-view>
<router-view class="view three" name="b"></router-view>
```
```js
{
  path: '/',
  components: {
    // 默认将 Foo 组件渲染至未对<router-view> name (class 为 view one) 进行定义的视图中。
    default: Foo, 
    a: Bar, // 将 Bar 组件渲染至 name 属性为 a 的<router-view>中。
    b: Baz // 将 Baz 组件渲染至 name 属性为 b 的<router-view>中。
  }
}
```
### 嵌套命名视图
:::tip
集合嵌套路由和命名视图
:::
 `dome/src/App.vue`
```html
<div id="app">
  <h1>Nested Named Views</h1>
    <router-link to="/settings">settings</router-link>
  <router-view></router-view>
</div>
```
 `dome/src/components/UserSettings.vue`
```html
<div>
  <h1>User Settings</h1>
  <NavBar/>
  <router-view/>
  <router-view name="helper"/>
</div>
```
 `dome/src/components/NavBar.vue`
```html
<div class="userNav">
  <router-link to="/settings/emails">emails</router-link>
  <br>
  <router-link to="/settings/profile">profile</router-link>
</div>
```
`dome/src/router.js`
```js
{ 
  path: '/settings',
  component: UserSettings,
  children: [{
    path: 'emails',
    component: UserEmailsSubscriptions
  }, {
    path: 'profile',
    components: {
      default: UserProfile,
      helper: UserProfilePreview
    }
  }]
}
``` 






## 重定向和别名
### 重定向
```js
[
  // 重定向
  { path: '/absolute-redirect', redirect: '/bar' },
  // 重定向和参数
  { path: '/redirect-with-params/:id', redirect: '/with-params/:id' },
  //  命名的路由重定向
  { path: '/named-redirect', redirect: { name: 'baz' }},
  // 动态返回重定向目标。请注意目标路由`to`可用于重定向功能
  { 
    path: '/dynamic-redirect/:id?',
      redirect: to => {
        const { hash, params, query } = to
        if (query.to === 'foo') {
          return { path: '/foo', query: null }
        }
        if (hash === '#baz') {
          return { name: 'baz', hash: '' }
        }
        if (params.id) {
          return '/with-params/:id'
        } else {
          return '/bar'
        }
      }
  }
]
```
>导航守卫并没有应用在跳转路由上，而仅仅应用在其目标上。在为 /dynamic-redirect路由添加一个 beforeEach 或 beforeLeave 守卫并不会有任何效果。
### 别名 `alias`
:::tip
“别名”的功能让你可以自由地将 UI 结构映射到任意的 URL，而不是受限于配置的嵌套路由结构。
:::
>“重定向”的意思是，当用户访问 /a时，URL 将会被替换成 /b，然后匹配路由为 /b，那么“别名”又是什么呢？
>/a 的别名是 /b，意味着，当用户访问 /b 时，URL 会保持为 /b，但是路由匹配则为 /a，就像用户访问 /a 一样。


```js
// 声明别名
{ path: '/user', component: User },
{ path: '/home', component: Home,
  children: [
    // 绝对路径别名
    { path: 'foo', component: Foo, alias: '/foo' },
    // 相对路径别名 (alias to /home/bar-alias)
    { path: 'bar', component: Bar, alias: 'bar-alias' },
    // 使用数组定义多个别名
    { path: 'baz', component: Baz, alias: ['/baz', 'baz-alias'] }
  ]
}
```
## 编程式的导航
`router.push(location, onComplete?, onAbort?)`
`router.replace(location, onComplete?, onAbort?)`
`router.go(n)`
`router.back`
`router.forward`
- [Manipulating the browser history(操纵浏览器历史记录)](https://developer.mozilla.org/zh-CN/docs/Web/API/History_API)
```js

```
[vue router](http://jspang.com/post/vue-router.html#toc-87e)
[google](summer19941126@gmail.com)

