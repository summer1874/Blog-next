---
layout: post
title: "📊Echarts 杂记"
date: 2019-07-31
categories:
  -  Coding
tags: 
  - echarts
---
## setOption
### title
:::tip
标题组件，包含主标题和副标题。
:::
<details>
<summary>options</summary>

```js
{
  id: '',
  show: true,
  text: '',
  link: '',
  target: 'blank', // 1.'self' 当前窗口打开   2.'blank' 新窗口打开
  textStyle: {
    color: '#333',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontFamily: 'sans-serif',
    fontSize: 18,
    lineHeight: ...,
    width: ..., // 不定义 rich 属性，则不能指定 width 和 height。 ()
    height: ...,
    textBorderColor: 'transparent',
    textBorderWidth: 0,
    textShadowColor: 'transparent',
    textShadowBlur: 0,
    textShadowOffsetX: 0,
    textShadowOffsetY: 0,
    rich: {...}
  },
  subtext: '',
  sublink: '',
  subtarget: 'blank',
  subtextStyle: ..., // 同 textStyle
  textAlign: 'auto',
  textVerticalAlign: 'auto',
  triggerEvent: false,
  padding: 5,
  itemGap: 10,
  zlevel: 0,
  z: 2,
  left: 'auto',
  top: 'auto',
  right: 'auto',
  bottom: 'auto',
  backgroundColor: 'transparent',
  borderColor: '#ccc',
  borderWidth: 0,
  borderRadius: 0,
  shadowBlur: ...,
  shadowColor: ...,
  shadowOffsetX: 0,
  shadowOffsetY: 0
}
```
</details>

----
###  legend
:::tip
图例组件。

图例组件展现了不同系列的标记(`symbol`)，颜色和名字。可以通过点击图例控制哪些系列不显示。
`ECharts 3` 中单个 `echarts` 实例中可以存在多个图例组件，会方便多个图例的布局。

当图例数量过多时，可以使用 滚动图例（垂直） 或 滚动图例（水平），参见：`legend.type`
:::
<details>
<summary>options</summary>

```js
{
  type: ...,
  id: ...,
  show: true,
  zlevel: 0,
  z: 2,
  left: 'auto',
  top: 'auto',
  right: 'auto',
  bottom: 'auto',
  width: 'auto',
  height: 'auto',
  orient: 'horizontal',
  align: 'auto',
  padding: 5,
  itemGap: 10,
  itemWidth: 25,
  itemHeight: 14,
  symbolKeepAspect: true,
  formatter: null,
  selectedMode: true,
  inactiveColor: '#ccc',
  selected: {...},
  textStyle: {...},
  tooltip: {...},
  /**
   * @data
   * 图例的数据数组  ['name', 'name'] ||  { name, icon, textStyle: {...} }
   * 无data 自动获取 series.name 或者 series.encode
   */
  data: [{...}], 
  backgroundColor: 'transparent',
  borderColor: '#ccc',
  borderWidth: 1,
  borderRadius: 0,
  shadowBlur: ...,
  shadowColor: ...,
  shadowOffsetX: 0,
  shadowOffsetY: 0,
  scrollDataIndex: 0,
  pageButtonItemGap: 5,
  pageButtonGap: null,
  pageButtonPosition: 'end',
  pageFormatter: '{current}/{total}',
  pageIcons: {...},
  pageIconColor: '#2f4554',
  pageIconInactiveColor: '#aaa',
  pageIconSize: 15,
  pageTextStyle: {...},
  animation: ...,
  animationDurationUpdate: 800
}
```
</details>

----

### grid

<details>
<summary>options</summary>
```js
 {
  id: ...,
  show: false,
  zlevel: 0,
  z: 2,
  left: '10%',
  top: 60,
  right: '10%',
  bottom: 60,
  width: 'auto',
  height: 'auto',
  containLabel: false,
  backgroundColor: 'transparent',
  borderColor: '#ccc',
  borderWidth: 1,
  shadowBlur: ...,
  shadowColor: ...,
  shadowOffsetX: 0,
  shadowOffsetY: 0,
  tooltip: {
    show: true,
    trigger: 'item',
    axisPointer: {...},
    position: ...,
    formatter: ...,
    backgroundColor: 'rgba(50,50,50,0.7)',
    borderColor: '#333',
    borderWidth: 0,
    padding: 5,
    textStyle: {...},
    extraCssText: ...,
  }
}
```
</details>

----

### xAxis
:::tip
直角坐标系 `grid` 中的 x 轴，一般情况下单个 `grid` 组件最多只能放上下两个 `x` 轴，多于两个 `x` 轴需要通过配置 `offset` 属性防止同个位置多个 `x` 轴的重叠。
:::
<details>
<summary>options</summary>

```js
{
  id: ...,
  show: true,
  gridIndex: 0,
  position: ...,
  offset: 0,
  type: 'category',
  name: ...,
  nameLocation: 'end',
  nameTextStyle: {...},
  nameGap: 15,
  nameRotate: null,
  inverse: false,
  /**
   * @boundaryGap
   * @default | boolean,Array |
   * 坐标轴两边留白策略，类目轴和非类目轴的设置和表现不一样。
  */
  boundaryGap: ...,
  min: null,
  max: null,
  scale: false,
  splitNumber: 5,
  minInterval: 0,
  maxInterval: ...,
  interval: ...,
  logBase: 10,
  silent: false,
  triggerEvent: false,
  axisLine: {...},
  /**
   * @axisTick
   * @default Object
   * 坐标轴刻度相关设置
  */
  axisTick: {...},
  axisLabel: {...},
  splitLine: {...},
  splitArea: {...},
  /**
   * @data
   * 
   *  ['周一', '周二', '周三', '周四', '周五', '周六', '周日'] 
   *  [{
   *    value: '周一',
   *    // 突出周一
   *    textStyle: {
   *        fontSize: 20,
   *        color: 'red'
   *    }
   * }, '周二', '周三', '周四', '周五', '周六', '周日']
   *
   * 类目数据，在类目轴（type: 'category'）中有效。
   * 如果没有设置 type，但是设置了 axis.data，则认为 type 是 'category'。
   * 如果设置了 type 是 'category'，但没有设置 axis.data，则 axis.data 的内容会自动从 series.data 中获取，这会比较方便。
   * 不过注意，axis.data 指明的是 'category' 轴的取值范围。
   * 如果不指定而是从 series.data 中获取，那么只能获取到 series.data 中出现的值。
   * 比如说，假如 series.data 为空时，就什么也获取不到。
  */
  data: [{...}],
  axisPointer: {...},
  zlevel: 0,
  z: 0,
}
```
</details>

----

### yAxis

<details>
<summary>options</summary>
```js
{
  id: ...,
  show: true,
  gridIndex: 0,
  position: ...,
  offset: 0,
  type: 'value',
  name: ...,
  nameLocation: 'end',
  nameTextStyle: {...},
  nameGap: 15,
  nameRotate: null,
  inverse: false,
  boundaryGap: ...,
  min: null,
  max: null,
  scale: false,
  splitNumber: 5,
  minInterval: 0,
  maxInterval: ...,
  interval: ...,
  logBase: 10,
  silent: false,
  triggerEvent: false,
}
```
</details>

### polar

<details>
<summary>options</summary>
```js
{
  id: ...,
  zlevel: 0,
  z: 2,
  center: ['50%', '50%'],
  radius: ...,
  tooltip: {...}
}
```
</details>

### radiusAxis

<details>
<summary>options</summary>
```js
{
  id: ...,
  polarIndex: 0,
  type: 'value',
  name: ...,
  nameLocation: 'end',
  nameTextStyle: {...},
  nameGap: 15,
  nameRotate: null,
  inverse: false,
  boundaryGap: ...,
  min: null,
  max: null,
  scale: false,
  splitNumber: 5,
  minInterval: 0,
  maxInterval: ...,
  interval: ...,
  logBase: 10,
  silent: false,
  triggerEvent: false,
}
```
</details>


### angleAxis

<details>
<summary>options</summary>

```js
{
  id: ...,
  polarIndex: 0,
  startAngle: 90,
  clockwise: true,
  type: 'category',
  boundaryGap: ...,
  min: null,
  max: null,
  scale: false,
  splitNumber: 5,
  minInterval: 0,
  maxInterval: ...,
  interval: ...,
  logBase: 10,
  silent: false,
  triggerEvent: false,
  axisLine: {...},
  axisTick: {...},
  axisLabel: {...},
  splitLine: {...},
  splitArea: {...},
  data: [{...}],
  axisPointer: {...},
  zlevel: 0,
  z: 0
}
```
</details>

### radar

<details>
<summary>options</summary>

```js
{
  id: ...,
  zlevel: 0,
  z: 2,
  center: ['50%', '50%'],
  radius: 75%,
  startAngle: 90,
  name: {...},
  nameGap: 15,
  splitNumber: 5,
  shape: 'polygon',
  scale: false,
  silent: false,
  triggerEvent: false,
  axisLine: {...},
  splitLine: {...},
  splitArea: {...},
  indicator: [{...}],
}
```
</details>

### dataZoom

<details>
<summary>options</summary>

```js
{
  {type: 'inside', ...},
  {type: 'slider', ...}
}
```
</details>

### visualMap
<details>
<summary>options</summary>

```js
{
  {type: 'continuous', ...},
  {type: 'piecewise', ...}
}
```
</details>

----

### tooltip
<details>
<summary>options</summary>

```js
{
  show: true,
  trigger: 'item',
  axisPointer: {...},
  showContent: true,
  alwaysShowContent: false,
  triggerOn: 'mousemove|click',
  showDelay: 0,
  hideDelay: 100,
  enterable: false,
  renderMode: 'html',
  confine: false,
  transitionDuration: 0.4,
  position: ...,
  formatter: ...,
  backgroundColor: 'rgba(50,50,50,0.7)',
  borderColor: '#333',
  borderWidth: 0,
  padding: 5,
  textStyle: {...},
  extraCssText: ...
}
```
</details>

----

### axisPointer
<details>
<summary>options</summary>

```js
{
  id: ...,
  show: false,
  type: 'line',
  snap: ...,
  z: ...,
  label: {...},
  lineStyle: {...},
  shadowStyle: {...},
  triggerTooltip: true,
  value: null,
  status: ...,
  handle: {...},
  link: [...],
  triggerOn: 'mousemove|click'
}
```
</details>

----

### toolbox
<details>
<summary>options</summary>

```js
{
  id: ...,
  show: true,
  orient: 'horizontal',
  itemSize: 15,
  itemGap: 10,
  showTitle: true,
  feature: {...},
  iconStyle: {...},
  emphasis: {...},
  zlevel: 0,
  z: 2,
  left: 'auto',
  top: 'auto',
  right: 'auto',
  bottom: 'auto',
  width: 'auto',
  height: 'auto'
}
```
</details>

----

### brush
<details>
<summary>options</summary>

```js
{
  id: ...,
  toolbox: ['rect', 'polygon', ...,
  brushLink: null,
  seriesIndex: 'all',
  geoIndex: null,
  xAxisIndex: null,
  yAxisIndex: null,
  brushType: 'rect',
  brushMode: 'single',
  transformable: true,
  brushStyle: {...},
  throttleType: 'fixRate',
  throttleDelay: 0,
  removeOnClick: true,
  inBrush: {...},
  outOfBrush: {...},
  z: 10000
}
```
</details>

----

### geo
<details>
<summary>options</summary>

```js
{
  id: ...,
  show: true,
  map: '',
  roam: false,
  center: [...],
  aspectScale: 0.75,
  boundingCoords: null,
  zoom: 1,
  scaleLimit: {...},
  nameMap: {...},
  selectedMode: false,
  label: {...},
  itemStyle: {...},
  emphasis: {...},
  zlevel: 0,
  z: 2,
  left: 'auto',
  top: 'auto',
  right: 'auto',
  bottom: 'auto',
  layoutCenter: null,
  layoutSize: ...,
  regions: [{...}],
  silent: false
}
```
</details>

----

### parallel
<details>
<summary>options</summary>

```js
{
  id: ...,
  zlevel: 0,
  z: 2,
  left: 80,
  top: 60,
  right: 80,
  bottom: 60,
  width: 'auto',
  height: 'auto',
  layout: 'horizontal',
  axisExpandable: false,
  axisExpandCenter: null,
  axisExpandCount: 0,
  axisExpandWidth: 50,
  axisExpandTriggerOn: 'click',
  parallelAxisDefault: {...}
}
```
</details>

----

### parallelAxis
<details>
<summary>options</summary>

```js
{
  id: ...,
  dim: ...,
  parallelIndex: 0,
  realtime: true,
  areaSelectStyle: {...},
  type: value,
  name: ...,
  nameLocation: 'end',
  nameTextStyle: {...},
  nameGap: 15,
  nameRotate: null,
  inverse: false,
  boundaryGap: ...,
  min: null,
  max: null,
  scale: false,
  splitNumber: 5,
  minInterval: 0,
  maxInterval: ...,
  interval: ...,
  logBase: 10,
  silent: false,
  triggerEvent: false,
  axisLine: {...},
  axisTick: {...},
  axisLabel: {...},
  data: [{...}]
}
```
</details>

----

### singleAxis
<details>
<summary>options</summary>

```js
{
  id: ...,
  zlevel: 0,
  z: 2,
  left: '5%',
  top: '5%,
  right: '5%',
  bottom: '5%',
  width: 'auto',
  height: 'auto',
  orient: 'horizontal',
  type: 'value',
  name: ...,
  nameLocation: 'end',
  nameTextStyle: {...},
  nameGap: 15,
  nameRotate: null,
  inverse: false,
  boundaryGap: ...,
  min: null,
  max: null,
  scale: false,
  splitNumber: 5,
  minInterval: 0,
  maxInterval: ...,
  interval: ...,
  logBase: 10,
  silent: false,
  triggerEvent: false,
  axisLine: {...},
  axisTick: {...},
  axisLabel: {...},
  splitLine: {...},
  splitArea: {...},
  data: [{...}],
  axisPointer: {...},
  tooltip: {...}
}
```
</details>

----

### timeline
<details>
<summary>options</summary>

```js
{
  show: true,
  type: 'slider',
  axisType: 'time',
  currentIndex: 0,
  autoPlay: false,
  rewind: false,
  loop: true,
  playInterval: 2000,
  realtime: true,
  controlPosition: 'left',
  zlevel: 0,
  z: 2,
  left: 'auto',
  top: 'auto',
  right: 'auto',
  bottom: 'auto',
  padding: 5,
  orient: 'horizontal',
  inverse: false,
  symbol: 'emptyCircle',
  symbolSize: 10,
  symbolRotate: ...,
  symbolKeepAspect: false,
  symbolOffset: [0, 0]
}
```
</details>

----

### dataZoom
<details>
<summary>options</summary>

```js
{
  
}
```
</details>

----

### graphic
<details>
<summary>options</summary>

```js
{
  id: ...,
  elements: [...]
}
```
</details>

----

### calendar
<details>
<summary>options</summary>

```js
{
  id: ...,
  zlevel: 0,
  z: 2,
  left: 80,
  top: 60,
  right: 'auto',
  bottom: 'auto',
  width: auto,
  height: auto,
  range: ...,
  cellSize: 20,
  orient: 'horizontal',
  splitLine: {...},
  itemStyle: {...},
  dayLabel: {...},
  monthLabel: {...},
  yearLabel: {...},
  silent: false
}
```
</details>

----

### dataset
<details>
<summary>options</summary>

```js
{
  id: ...,
  source: ...,
  dimensions: [...],
  sourceHeader: ...
}
```
</details>

----

### aria
<details>
<summary>options</summary>

```js
{
  show: false,
  description: null,
  general: {...},
  series: {...},
  data: {...}
}
```
</details>

----
### series
<details>
<summary>options</summary>

```js
{
  {type: 'line', ...},
  {type: 'bar', ...},
  {type: 'pie', ...},
  {type: 'scatter', ...},
  {type: 'effectScatter', ...},
  {type: 'radar', ...},
  {type: 'tree', ...},
  {type: 'treemap', ...},
  {type: 'sunburst', ...},
  {type: 'boxplot', ...},
  {type: 'candlestick', ...},
  {type: 'heatmap', ...},
  {type: 'map', ...},
  {type: 'parallel', ...},
  {type: 'lines', ...},
  {type: 'graph', ...},
  {type: 'sankey', ...},
  {type: 'funnel', ...},
  {type: 'gauge', ...},
  {type: 'pictorialBar', ...},
  {type: 'themeRiver', ...},
  {type: 'custom', ...}
}
```
</details>

----
### color
:::tip
调色盘颜色列表。如果系列没有设置颜色，则会依次循环从该列表中取颜色作为系列颜色。

默认为：`['#c23531','#2f4554', '#61a0a8', '#d48265', '#91c7ae','#749f83',  '#ca8622', '#bda29a','#6e7074', '#546570', '#c4ccd3']`
:::

----
### backgroundColor

### textStyle
<details>
<summary>options</summary>

```js
{
  color: '#fff',
  fontStyle: 'normal',
  fontWeight: normal,
  fontFamily: 'sans-serif',
  fontSize: 12,
  lineHeight: ...,
  width: ...,
  height: ...,
  textBorderColor: 'transparent',
  textBorderWidth: 0,
  textShadowColor: 'transparent',
  textShadowBlur: 0,
  textShadowOffsetX: 0,
  textShadowOffsetY: 0
}
```
</details>

----
### animation


----
### animationThreshold


----

### animationDuration

----
### animationEasing

----
### animationDelay

----
### animationDurationUpdate

---
### animationEasingUpdate

---
### animationDelayUpdate

---
### blendMode

---
### hoverLayerThreshold

---
### useUTC

---
<style>
details {
  cursor: pointer;
}
</style>