---
layout: post
title: "🧶 ReactNative入门与进阶"
date: 2019-07-11
category: Coding
tags:
  - REACT
---


## 环境搭建
### window
[搭建开发环境 务必严格按步骤搭建！](https://reactnative.cn/docs/getting-started/)
#### 需要安装的工具
- Node.js
- Python2
  - 直接下载安装，配置环境变量即可
- JDK1.8
- React Native Command Line
 
  `npm install -g react-native-cli`
 
- Android Studio / XCode
  [Android Studio 安装](https://developer.android.google.cn/)
#### 创建第一个React Native应用
生成一个新项目并安装其依赖项
```bash
react-native init <ProjectName>

  而如果是由于网络问题导致很慢的话，切换至淘宝源
npm config set registry https://registry.npm.taobao.org
npm config set disturl https://npm.taobao.org/dist
 OR
 ${node.js 安装目录}/node_modukes/npm/npmrc
registry = https://registry.npm.taobao.org
 yarn
yarn config set registry https://registry.npm.taobao.org --global
yarn config set disturl https://npm.taobao.org/dist --global
```
#### 运行项目
1. Android Studio 打开 `ProjectName/android`
2. 点击ADM Manager 创建官方推荐的模拟器运行
3. `react-native run-android`
    - 双击RR刷新
  

## React Native 调试
### DeveLoper Menu(开发者菜单)
:::tip
window `Ctrl + M` 打开DeveLoper Menu(开发者菜单)
:::
- **Reload 重载**
  >`Reload`即将项目中js代码部分重新生成`bundle`，然后传输给模拟器或手机；
  >
  >`Reload`在只是修改了js代码的情况下，如果要预览修改结果，你不需要重新编译你的应用。在这种情况下，你只需要告诉`React Native`重新加载js即可。
  >
  >注意：如果你修改了`native` 代码或修改了`Images.xcassets`、`res/drawable`中的文件，重新加载js是不行的，这时需要重新编译项目。
- **Debug JS Remotely 开启远程调试**
  >开启远程调试，可通过`Chrome Developer Tools`工具调试程序。选中后将打开网址为`http://localhost:8081/debugger-ui`的网页。
- **Enable Live Reload 动态加载**
  >`Enable Live Reload`提供了`React Native`动态加载的功能。当你的js代码发生变化后，`React Native`会自动生成bundle然后传输到模拟器或手机上。类似于`Android Studio`的实时预览布局效果
- **Enable Hot Reloading 热加载**
  >每次保存代码时`Hot Reloading`功能便会生成此次修改代码的增量包，然后传输到手机或模拟器上以实现热加载。相比` Enable Live Reload`需要每次都**返回到启动页面**，`Enable Live Reload`则会在**保持你的程序状态**的情况下，就可以将最新的代码部署到设备上。

- **Toggle Inspector 查看组件样式**
  >在模拟器中查看组件样式
- **Show Perf Monitor 调试性能**
  >启用后会显示一个监控窗口，显示出实时的内存占用、UI 和 JavaScript 的 FPS 等信息，帮助我们调试性能问题
- **Start/Stop Sampling Profiler**
- **Dev Settings 开发者设置**


## React Native 布局
### 像素无关
:::tip
**在`React Native`中尺寸是没有单位的，它代表了设备独立像素。**

下述代码，运行在`Android`上时，`View`的长和宽被解释成：`100dp` `100dp`单位是`dp`，字体被解释成`16sp` 单位是`sp`，运行在`iOS`上时尺寸单位被解释称了`pt`，这些单位确保了布局在任何不同`dpi`的手机屏幕上显示不会发生改变
:::
```jsx
<View style={ {width:100,height:100,margin:40,backgroundColor:'gray'}}>
  <Text style={ {fontSize:16,margin:20}}>尺寸</Text>
</View>
```
### Text 文本（18）
属性名 | 取值 | 描述
---|---|---
**color** | [&lt;color&gt;](#color-颜色) | 对应 `CSS` [color](http://css.doyoe.com/properties/color/color.htm) 属性
**fontFamily** | string | 对应 `CSS` [font-family](http://css.doyoe.com/properties/font/font-family.htm) 属性
**fontSize** | [&lt;number&gt;](#number-数值) | 对应 `CSS` [font-size](http://css.doyoe.com/properties/font/font-size.htm) 属性
**fontStyle** | `normal`, `italic` | 对应 `CSS` [font-style](http://css.doyoe.com/properties/font/font-style.htm) 属性，但阉割了 `oblique` 取值
**fontWeight** | `normal`, `bold` `100~900` | 对应 `CSS` [font-weight](http://css.doyoe.com/properties/font/font-weight.htm) 属性，但阉割了 `bolder, lighter` 取值
**lineHeight** | [&lt;number&gt;](#number-数值) | 对应 `CSS` [line-height](http://css.doyoe.com/properties/text/line-height.htm) 属性
**textAlign** | `auto`, `left`, `right`, `center`, `justify`<sup>`iOS`</sup> | 对应 `CSS` [text-align](http://css.doyoe.com/properties/text/text-align.htm) 属性，但增加了 `auto` 取值。当取值为 `justify` 时，在 `Android` 上会变为 `left`
**textDecorationLine** | `none`, `underline`, `line-through`, `underline line-through` | 对应 `CSS` [text-decoration-line](http://css.doyoe.com/properties/text-decoration/text-decoration-line.htm) 属性，但阉割了 `overline`, `blink` 取值
**textShadowColor** | [&lt;color&gt;](#color-颜色) | 对应 `CSS` [text-shadow](http://css.doyoe.com/properties/text-decoration/text-shadow.htm) 属性中的颜色定义
**textShadowOffset** | {<br>width:[&lt;number&gt;](#number-数值),<br>height:[&lt;number&gt;](#number-数值)<br>} | 对应 `CSS` [text-shadow](http://css.doyoe.com/properties/text-decoration/text-shadow.htm) 属性中的阴影偏移定义
**textShadowRadius** | [&lt;number&gt;](#number-数值) | 在 `CSS` 中，阴影的圆角大小取决于元素的圆角定义，不需要额外定义
**includeFontPadding**<br /><sup>`Android`</sup> | [&lt;bool&gt;](#user-content-bool) | Android在默认情况下会为文字额外保留一些padding，以便留出空间摆放上标或是下标的文字。对于某些字体来说，这些额外的padding可能会导致文字难以垂直居中。如果你把textAlignVertical设置为center之后，文字看起来依然不在正中间，那么可以尝试将本属性设置为false
**textAlignVertical**<br /><sup>`Android`</sup> | `auto`, `top`, `bottom`, `center` | 对应 `CSS` [vertical-align](http://css.doyoe.com/properties/text/vertical-align.htm) 属性，增加了 `auto` 取值，`center` 取代了 `middle`，并阉割了 `baseline, sub` 等值
**fontVariant**<br /><sup>`iOS`</sup> | `small-caps`, `oldstyle-nums`, `lining-nums`, `tabular-nums`, `proportional-nums` | 对应 `CSS` [font-variant](http://css.doyoe.com/properties/font/font-variant.htm) 属性，但取值更丰富
**letterSpacing**<br /><sup>`iOS`</sup> | [&lt;number&gt;](#number-数值) | 对应 `CSS` [letter-spacing](http://css.doyoe.com/properties/text/letter-spacing.htm) 属性
**textDecorationColor**<br /><sup>`iOS`</sup> | [&lt;color&gt;](#color-颜色) | 对应 `CSS` [text-decoration-color](http://css.doyoe.com/properties/text-decoration/text-decoration-color.htm) 属性
**textDecorationStyle**<br /><sup>`iOS`</sup> | `solid`, `double`, `dotted`, `dashed` | 对应 `CSS` [text-decoration-style](http://css.doyoe.com/properties/text-decoration/text-decoration-style.htm) 属性，但阉割了 `wavy` 取值
**writingDirection**<br /><sup>`iOS`</sup> | `auto`, `ltr`, `rtl` | 对应 `CSS` [direction](http://css.doyoe.com/properties/writing-modes/direction.htm) 属性，增加了 `auto` 取值

### Dimension 尺寸（6）
>在`React Native`中尺寸是没有单位的，它代表了设备独立像素。

属性名 | 取值 | 描述
---|---|---
**width** | [&lt;number&gt;](#number-数值) | 对应 `CSS` [width](http://css.doyoe.com/properties/dimension/width.htm) 属性
**minWidth** | [&lt;number&gt;](#number-数值) | 对应 `CSS` [min-width](http://css.doyoe.com/properties/dimension/min-width.htm) 属性
**maxWidth** | [&lt;number&gt;](#number-数值) | 对应 `CSS` [max-width](http://css.doyoe.com/properties/dimension/max-width.htm) 属性
**height** | [&lt;number&gt;](#number-数值) | 对应 `CSS` [height](http://css.doyoe.com/properties/dimension/height.htm) 属性
**minHeight** | [&lt;number&gt;](#number-数值) | 对应 `CSS` [min-height](http://css.doyoe.com/properties/dimension/min-height.htm) 属性
**maxHeight** | [&lt;number&gt;](#number-数值) | 对应 `CSS` [max-height](http://css.doyoe.com/properties/dimension/max-height.htm) 属性

### Positioning 定位（6）
属性名 | 取值 | 描述
---|---|---
**position** | `absolute`, `relative` | 对应 `CSS` [position](http://css.doyoe.com/properties/positioning/position.htm) 属性，但阉割了 `static, fixed` 取值
**top** | [&lt;number&gt;](#number-数值) | 对应 `CSS` [top](http://css.doyoe.com/properties/positioning/top.htm) 属性
**right** | [&lt;number&gt;](#number-数值) | 对应 `CSS` [right](http://css.doyoe.com/properties/positioning/right.htm) 属性
**bottom** | [&lt;number&gt;](#number-数值) | 对应 `CSS` [bottom](http://css.doyoe.com/properties/positioning/bottom.htm) 属性
**left** | [&lt;number&gt;](#number-数值) | 对应 `CSS` [left](http://css.doyoe.com/properties/positioning/left.htm) 属性
**zIndex** | [&lt;number&gt;](#number-数值) | 对应 `CSS` [z-index](http://css.doyoe.com/properties/positioning/z-index.htm) 属性

### Margin 外部白（7）
属性名 | 取值 | 描述
---|---|---
**margin** | [&lt;number&gt;](#number-数值) | 对应 `CSS` [margin](http://css.doyoe.com/properties/margin/margin.htm) 属性，不同的是，它只能定义一个参数，如需分别定义`上、右、下、左`4个方位的外补白，可以通过下面的单向外部白属性
**marginHorizontal** | [&lt;number&gt;](#number-数值) | 无对应的 `CSS` 属性。其效果相当于同时设置 `marginRight` 和 `marginLeft`
**marginVertical** | [&lt;number&gt;](#number-数值) | 无对应的 `CSS` 属性。其效果相当于同时设置 `marginTop` 和 `marginBottom`
**marginTop** | [&lt;number&gt;](#number-数值) | 对应 `CSS` [margin-top](http://css.doyoe.com/properties/margin/margin-top.htm) 属性
**marginRight** | [&lt;number&gt;](#number-数值) | 对应 `CSS` [margin-right](http://css.doyoe.com/properties/margin/margin-right.htm) 属性
**marginBottom** | [&lt;number&gt;](#number-数值) | 对应 `CSS` [margin-bottom](http://css.doyoe.com/properties/margin/margin-bottom.htm) 属性
**marginLeft** | [&lt;number&gt;](#number-数值) | 对应 `CSS` [margin-left](http://css.doyoe.com/properties/margin/margin-left.htm) 属性

### Padding 内部白（7）
属性名 | 取值 | 描述
---|---|---
**padding** | [&lt;number&gt;](#number-数值) | 对应 `CSS` [padding](http://css.doyoe.com/properties/padding/padding.htm) 属性，不同的是，它只能定义一个参数，如需分别定义`上、右、下、左`4个方位的内补白，可以通过下面的单向内部白属性
**paddingHorizontal** | [&lt;number&gt;](#number-数值) | 无对应的 `CSS` 属性。其效果相当于同时设置 `paddingRight` 和 `paddingLeft`
**paddingVertical** | [&lt;number&gt;](#number-数值) | 无对应的 `CSS` 属性。其效果相当于同时设置 `paddingTop` 和 `paddingBottom`
**paddingTop** | [&lt;number&gt;](#number-数值) | 对应 `CSS` [padding-top](http://css.doyoe.com/properties/padding/padding-top.htm) 属性
**paddingRight** | [&lt;number&gt;](#number-数值) | 对应 `CSS` [padding-right](http://css.doyoe.com/properties/padding/padding-right.htm) 属性
**paddingBottom** | [&lt;number&gt;](#number-数值) | 对应 `CSS` [padding-bottom](http://css.doyoe.com/properties/padding/padding-bottom.htm) 属性
**paddingLeft** | [&lt;number&gt;](#number-数值) | 对应 `CSS` [padding-left](http://css.doyoe.com/properties/padding/padding-left.htm) 属性

### Border 边框（20）
属性名 | 取值 | 描述
---|---|---
**borderStyle** | `solid`, `dotted`, `dashed` | 对应 `CSS` `border-style` 属性，但阉割了 `none, hidden, double, groove, ridge, inset, outset` 取值，且无方向分拆属性
**borderWidth** | [&lt;number&gt;](#number-数值) | 对应 `CSS` `border-width` 属性
**borderTopWidth** | [&lt;number&gt;](#number-数值) | 对应 `CSS` `border-top-width` 属性
**borderRightWidth** | [&lt;number&gt;](#number-数值) | 对应 `CSS` `border-right-width` 属性
**borderBottomWidth** | [&lt;number&gt;](#number-数值) | 对应 `CSS` `border-bottom-width` 属性
**borderLeftWidth** | [&lt;number&gt;](#number-数值) | 对应 `CSS` `border-left-width` 属性
**borderColor** | [&lt;color&gt;](#color-颜色) | 对应 `CSS` `border-color` 属性
**borderTopColor** | [&lt;color&gt;](#color-颜色) | 对应 `CSS` `border-top-color` 属性
**borderRightColor** | [&lt;color&gt;](#color-颜色) | 对应 `CSS` `border-right-color` 属性
**borderBottomColor** | [&lt;color&gt;](#color-颜色) | 对应 `CSS` `border-bottom-color` 属性
**borderLeftColor** | [&lt;color&gt;](#color-颜色) | 对应 `CSS` `border-left-color` 属性
**borderRadius** | [&lt;number&gt;](#number-数值) | 对应 `CSS` `border-radius` 属性
**borderTopLeftRadius** | [&lt;number&gt;](#number-数值) | 对应 `CSS` `border-top-left-radius` 属性
**borderTopRightRadius** | [&lt;number&gt;](#number-数值) | 对应 `CSS` `border-top-right-radius` 属性
**borderBottomLeftRadius** | [&lt;number&gt;](#number-数值) | 对应 `CSS` `border-bottom-left-radius` 属性
**borderBottomRightRadius** | [&lt;number&gt;](#number-数值) | 对应 `CSS` `border-bottom-right-radius` 属性
**shadowColor** | [&lt;color&gt;](#color-颜色) | 对应 `CSS` [box-shadow](http://css.doyoe.com/properties/border/box-shadow.htm) 属性中的颜色定义
**shadowOffset** | {<br>width: [&lt;number&gt;](#number-数值), <br>height: [&lt;number&gt;](#number-数值)<br>} | 对应 `CSS` [box-shadow](http://css.doyoe.com/properties/border/box-shadow.htm) 属性中的阴影偏移定义
**shadowRadius** | [&lt;number&gt;](#number-数值) | 在 `CSS` 中，阴影的圆角大小取决于元素的圆角定义，不需要额外定义
**shadowOpacity** | [&lt;number&gt;](#number-数值) | 对应 `CSS` [box-shadow](http://css.doyoe.com/properties/border/box-shadow.htm) 属性中的阴影透明度定义

### Background 背景（1）
属性名 | 取值 | 描述
---|---|---
**backgroundColor** | [&lt;color&gt;](#color-颜色) | 对应 `CSS` `background-color` 属性

### Transform 转换（3）
属性名 | 取值 | 描述
---|---|---
**transform** | `[{perspective: number}, {rotate: string}, {rotateX: string}, {rotateY: string}, {rotateZ: string}, {scale: number}, {scaleX: number}, {scaleY: number}, {translateX: number}, {translateY: number}, {skewX: string}, {skewY: string}]` | 对应 `CSS` `transform` 属性
**transformMatrix** | `TransformMatrixPropType` | 类似于 `CSS` 中 `transform` 属性的 `matrix()` 和 `matrix3d()` 函数
**backfaceVisibility** | `visible`, `hidden` | 对应 `CSS` `backface-visibility` 属性

### Flexbox 弹性盒（9）
属性名 | 取值 | 描述
---|---|---
**flex** | [&lt;number&gt;](#number-数值) | 对应 `CSS` `flex` 属性，但只能为整数值
**flexGrow** | [&lt;number&gt;](#number-数值) | 对应 `CSS` `flex-grow` 属性
**flexShrink** | [&lt;number&gt;](#number-数值) | 对应 `CSS` `flex-shrink` 属性
**flexBasis** | [&lt;number&gt;](#number-数值) | 对应 `CSS` `flex-basis` 属性
**flexDirection** | `row`, `row-reverse`, `column`, `column-reverse` | 对应 `CSS` `flex-direction` 属性
**flexWrap** | `wrap`, `nowrap` | 对应 `CSS` `flex-wrap` 属性，但阉割了 `wrap-reverse` 取值
**justifyContent** | `flex-start`, `flex-end`, `center`, `space-between`, `space-around` | 对应 `CSS` `justify-content` 属性，但阉割了 `stretch` 取值。
**alignItems** | `flex-start`, `flex-end`, `center`, `stretch` | 对应 `CSS` `align-items` 属性，但阉割了 `baseline` 取值。
**alignSelf** | `auto`, `flex-start`, `flex-end`, `center`, `stretch` | 对应 `CSS` `align-self` 属性，但阉割了 `baseline` 取值

### Other 其他
属性名 | 取值 | 描述
---|---|---
**opacity** | [&lt;number&gt;](#number-数值) | 对应 `CSS` `opacity` 属性
**overflow** | `visible`, `hidden`, `scroll` | 对应 `CSS` `overflow` 属性，但阉割了 `auto` 取值
**elevation**<br /><sup>`Android`</sup> | [&lt;number&gt;](#number-数值) | `CSS`中没有对应的属性，只在 `Android5.0+` 上有效
**resizeMode** | `cover`, `contain`, `stretch` | `CSS`中没有对应的属性，可以参考 `background-size` 属性
**overlayColor**<br /><sup>`Android`</sup> | string | `CSS`中没有对应的属性，当图像有圆角时，将角落都充满一种颜色
**tintColor**<br /><sup>`iOS`</sup> | [&lt;color&gt;](#color-颜色) | `CSS`中没有对应的属性，`iOS` 图像上特殊的色彩，改变不透明像素的颜色
f
### Color 颜色
`React Native` 支持了 `CSS` 中大部分的颜色类型：

* `#f00` (#rgb)
* `#f00c` (#rgba)：`CSS` 中无对应的值
* `#ff0000` (#rrggbb)
* `#ff0000cc` (#rrggbbaa)：`CSS` 中无对应的值
* `rgb(255, 0, 0)`
* `rgba(255, 0, 0, 0.9)`
* `hsl(360, 100%, 100%)`
* `hsla(360, 100%, 100%, 0.9)`
* `transparent`
* `0xff00ff00` (0xrrggbbaa)：`CSS` 中无对应的值
* `Color Name`：支持了 [基本颜色关键字](http://css.doyoe.com/appendix/color-keywords.htm#basic) 和 [拓展颜色关键字](http://css.doyoe.com/appendix/color-keywords.htm#extended)，但不支持 [28个系统颜色](http://css.doyoe.com/appendix/color-keywords.htm#system)；

### Number 数值
在 `React-Native` 中，目前仅支持 `Number` 这一种长度取值。默认缺省了 `pt` 单位，详细请看 [Units 单位](#units-单位) 部分。
### Units 单位
#### Pt 点
在 `React-Native` 中，并不支持百分比单位，目前只支持一种单位，即 `pt` 绝对长度单位，同时，你在定义时不需要加单位，例如：

```js
...
<View style={{width: 100, height: 50}}></View>
...
let styles = StyleSheet.create({
    box: {
        width: 100,
        height: 50
    }
})
```
### PixelRatio 像素密度
在 `React-Native` 中，访问设备像素密度的方法由 `PixelRatio` 类提供。

我们的应用通常都会运行在不同的设备上，并且这些设备的像素密度很有可能各不相同。这会造成一个现象就是：

* 定义了元素的边框为 `1像素`，而实际上在不同像素密度的设备上结果不一样，比如：`iPhone6` 显示为 `2像素`，iPhone6 Plus 显示为 `3像素`； 
* 对于一个图片来讲，因为设备的像素密度不同，它也需要对应不同尺寸的规则，以防止图片过小变得模糊；

#### 根据像素密度指定边框厚度
出于对产品体验的一致性，我们会要求不论是在哪种设备上，其边框厚度都应该是相同的。一个取得物理上的相同边框厚度的好方法就是用逻辑尺寸除以像素密度比：
```js
const styles = StyleSheet.create({
    box: {
        borderWidth: 1 / PixelRatio.get(),
        borderStyle: solid
    }
})
```
上述代码将保证你的应用在所有的设备上（像素密度），都获得 `1像素` 的边框厚度。`PixelRatio` 通过 `get()` 方法来返回设备的像素密度。

## 参考
- [React Native中文网](https://reactnative.cn/)
- [React Native开发者菜单&Chrome调试](https://blog.csdn.net/u010127332/article/details/82865898)
- [贾鹏辉的技术博客官网](http://www.devio.org)
- [React Native 样式指南](https://github.com/doyoe/react-native-stylesheet-guide)
<!-- react-navigation
redux
fetch
AsyncStorag
FlatList
自定义组件
离线缓存框架
Native Modules
CodePush
Native SDK
插件
官方组件 -->

<!-- |属性名|取值|描述|
|:---:|:---|:---|
|**flexDirection** |`row`  从左向右依次排列 </br> `row-reverse`   从右向左依次排列  </br> `column(default)`   默认的排列方式，从上向下排列  </br> `column-reverse`   从下向上排列 | 定义了父视图中的子元素沿横轴或侧轴方片的排列方式 |
|**flexWrap**|`nowrap(default)`   flex的元素只排列在一行上，可能导致溢出。 </br> `wrap`   flex的元素在一行排列不下时，就进行多行排列 。|属性定义了子元素在父视图内是否允许多行排列|
|**justifyContent**|`flex-start(default)`  从行首开始排列。每行第一个弹性元素与行首对齐，同时所有后续的弹性元素与前一个对齐。  </br>`flex-end` 从行尾开始排列。每行最后一个弹性元素与行尾对齐，其他元素将与后一个对齐。</br>`center`  伸缩元素向每行中点排列。每行第一个元素到行首的距离将与每行最后一个元素到行尾的距离相同。</br>`space-between` 在每行上均匀分配弹性元素。相邻元素间距离相同。每行第一个元素与行首对齐，每行最后一个元素与行尾对齐。</br>`space-around` 在每行上均匀分配弹性元素。相邻元素间距离相同。每行第一个元素到行首的距离和每行最后一个元素到行尾的距离将会是相邻元素之间距离的一半。|属性定义了浏览器如何分配顺着父容器主轴的弹性（flex）元素之间及其周围的空间，默认为`flex-start`。|
|**alignItems**|`flex-start` 元素向侧轴起点对齐。</br>`flex-end` 元素向侧轴终点对齐。</br>`center` 元素在侧轴居中。如果元素在侧轴上的高度高于其容器，那么在两个方向上溢出距离相同。</br>`stretch` 弹性元素被在侧轴方向被拉伸到与容器相同的高度或宽度。|属性以与`justify-content`相同的方式在侧轴方向上将当前行上的弹性元素对齐，默认为`stretch`。|
|**alignSelf**|`auto(default)` 元素继承了它的父容器的 `align-items` 属性。如果没有父容器则为 “`stretch`”。`stretch`	元素被拉伸以适应容器。</br>`center`	元素位于容器的中心。</br>`flex-start`	元素位于容器的开头。</br>`flex-end`	元素位于容器的结尾。|属性以属性定义了`flex`容器内被选中项目的对齐方式。注意：`alignSelf` 属性可重写灵活容器的 `alignItems` 属性。|
|**flex**|`number(defult = 0)`| 属性定义了一个可伸缩元素的能力，默认为0。| -->