---
layout: post
title: "Grid 布局"
date: 2020-02-05
categories:
  -  Coding
tags:
  - css
  - Grid
---

## 基本概念
:::tip
`Flex` 布局是轴线布局，只能指定"项目"针对轴线的位置，可以看作是一维布局。

`Grid` 布局则是将容器划分成"行"和"列"，产生单元格，然后指定"项目所在"的单元格，可以看作是二维布局。

**`Grid` 布局远比 `Flex` 布局强大**。
:::

### 容器与项目
:::tip
采用网格布局的区域，称为"容器"（container）。容器内部采用网格定位的子元素，称为"项目"（item）。
:::
```html
<div class="container">
  <div class="item"><p>2</p></div>
  <div class="item"><p>1</p></div>
  <div class="item"><p>3</p></div>
</div>
```
:::warning 注意
项目只能是容器的顶层子元素，不包含项目的子元素，比如上面代码的`<p>`元素就不是项目。Grid 布局只对项目生效。
:::

### 行和列
:::tip
容器里面的水平区域称为"行"（row），垂直区域称为"列"（column）。
:::
![行和列](https://www.wangbase.com/blogimg/asset/201903/1_bg2019032502.png)

上图中，水平的深色区域就是"行"，垂直的深色区域就是"列"。

### 单元格
:::tip
行和列的交叉区域，称为"单元格"（cell）。
:::
![单元格](https://img.imgdb.cn/item/601d07ee3ffa7d37b3e67b2a.png)
正常情况下，`n`行和`m`列会产生`n * m`个单元格。比如，3行3列会产生9个单元格。

### 网格线
:::tip
划分网格的线，称为"网格线"（grid line）。水平网格线划分出行，垂直网格线划分出列。

正常情况下，`n`行有`n + 1`根水平网格线，`m`列有`m + 1`根垂直网格线，比如三行就有四根水平网格线。
:::

![网格线](https://www.wangbase.com/blogimg/asset/201903/1_bg2019032503.png)

上图是一个 `4 x 4` 的网格，共有`5`根水平网格线和`5`根垂直网格线。



## 容器属性
```css
.container { 
  display: grid;
  display: inline-grid;
  /* 列宽  行高*/
  grid-template-columns: 100px 100px 100px; 
  grid-template-rows: 100px 100px 100px;
  /* 除了使用绝对单位，也可以使用百分比 */
  grid-template-columns: repeat(3, 33.3%)；
  grid-template-rows: repeat(3, 33.3%)；
  /* 重复某种模式 */
  grid-template-columns: repeat(2, 10px 20px 30px);
  grid-template-rows: repeat(2, 10px 20px 30px);
  /* auto-fill */
  grid-template-columns: repeat(auto-fill, 100px);
  /* fr */
  grid-template-columns: 1fr 1fr;
  grid-template-columns: 150px 1fr 2fr;
  /* mimax */
  grid-template-columns: 1fr 1fr minmax(100px, 1fr);
  /* auto */
  grid-template-columns: 1fr minmax(100px, 50px) auto;
  /* 网格线的名称 */
  grid-template-columns: [c1] 100px [c2] 100px [c3] auto [c4];
  grid-template-rows: [r1] 100px [r2] 100px [r3] auto [r4];
  /* grid-row-gap 属性，grid-column-gap 属性，grid-gap 属性 */
  row-gap: 20px;
  column-gap: 20px;
  gap: 20px 20px;
  /* grid-auto-flow */
  grid-auto-flow: row;
  grid-auto-flow: column;
  grid-auto-flow: row dense;
  grid-auto-flow: column dense;
  /* justify-items 属性，align-items 属性，place-items 属性 */
  justify-items: start | end | center | stretch；
  align-items: start | end | center | stretch；
  place-items: <align-items> <justify-items>;
}
```
:::tip 
- 设为网格布局以后，容器子元素（项目）的`float`、`display: inline-block`、`display: table-cell`、`vertical-align`和`column-*`等设置都将失效。
- <Tip text="grid-template-columns" /> 属性定义每一列的列宽，<Tip text="grid-template-rows" /> 属性定义每一行的行高。除了使用绝对单位，也可以使用百分比。
  - <Tip text="repeat() 函数" />
    - 接受两个参数，第一个参数是重复的次数，第二个参数是所要重复的值。repeat()重复某种模式也是可以的。
    - `grid-template-columns: repeat(2, 100px 20px 80px)`定义了6列，第一列和第四列的宽度为`100px`，第二列和第五列为`20px`，第三列和第六列为`80px`。
  - <Tip text="auto-fill 关键字" />
    - 表示自动填充。
    - `grid-template-columns: repeat(auto-fill, 100px)`表示每列宽度100px，然后自动填充，直到容器不能放置更多的列。
  - <Tip text="fr 关键字" /> 
    - 表示比例关系。
    - `grid-template-columns: 150px 1fr 2fr`表示第一列的宽度为150像素，第二列的宽度是第三列的一半。
  - <Tip text="minmax() 函数" />
    - 产生一个长度范围，表示长度就在这个范围之中。它接受两个参数，分别为最小值和最大值。
    - `minmax(100px, 1fr)`表示列宽不小于`100px`，不大于`1fr`。
  - <Tip text="auto 关键字" />
    - 表示由浏览器自己决定长度。
    - `grid-template-columns: 100px auto 100px`表示第二列的宽度，基本上等于该列单元格的最大宽度，除非单元格内容设置了`min-width`，且这个值大于最大宽度。
  - <Tip text="网格线的名称" /> 
    - `grid-template-columns` 属性和 `grid-template-rows` 属性里面，还可以使用方括号，指定每一根网格线的名字，方便以后的引用。
    - `grid-template-columns: [c1] 100px [c2] 100px [c3] auto [c4]`, `grid-template-rows: [r1] 100px [r2] 100px [r3] auto [r4]`指定网格布局为3行 x 3列，因此有4根垂直网格线和4根水平网格线。方括号里面依次是这八根线的名字。
    - 网格布局允许同一根线有多个名字，比如`[fifth-line row-5]`
  - <Tip text="布局实例" />
    - 两栏式布局
      ```css
        .wrapper {
          display: grid;
          grid-template-columns: 70% 30%;
        }
      ```
    - 十二网格布局
      ```css
        grid-template-columns: repeat(12, 1fr)
      ```
- <Tip text="grid-row-gap 属性，grid-column-gap 属性，grid-gap 属性" />
  - `grid-row-gap`属性设置行与行的间隔（行间距），`grid-column-gap`属性设置列与列的间隔（列间距）。
  - `grid-gap`属性是`grid-column-gap`和`grid-row-gap`的合并简写形式
    - 语法`grid-gap: <grid-row-gap> <grid-column-gap>;`
    - 如果`grid-gap`省略了第二个值，浏览器认为第二个值等于第一个值。
  :::warning
    根据最新标准，上面三个属性名的`grid-`前缀已经删除，`grid-column-gap`和`grid-row-gap`写成`column-gap`和`row-gap`，`grid-gap`写成`gap`。
  
- <Tip text="grid-auto-flow 属性" />
  - 元素放置顺序由`grid-auto-flow`属性决定，默认值是`row`。
  - `grid-auto-flow: row` 先行后列, `grid-auto-flow: column`先列后行
  - `grid-auto-flow: row dense` 表示"先行后列"，并且尽可能紧密填满，尽量不出现空格。`grid-auto-flow: column dense` 表示"先列后行"，并且尽量填满空格。

- <Tip text="justify-items 属性，align-items 属性，place-items 属性" />
  - `justify-items`属性设置单元格内容的水平位置（左中右）`justify-items: start | end | center | stretch`。 `align-items`属性设置单元格内容的垂直位置（上中下）`align-items: start | end | center | stretch`。
    - `start`：对齐单元格的起始边缘。
    - `end`：对齐单元格的结束边缘。
    - `center`：单元格内部居中。
    - `stretch`：拉伸，占满单元格的整个宽度（默认值）。
  - [单元格的内容左对齐 justify-items: start](https://jsbin.com/gijeqej/edit?css,output)
  - [单元格的内容头部对齐 align-items: start](https://jsbin.com/tecawur/edit?css,output)
  - `place-items`属性是`align-items`属性和`justify-items`属性的合并简写形式。
    -  `place-items: <align-items> <justify-items>`, `place-items: start end` 如果省略第二个值，则浏览器认为与第一个值相等。
:::
## 项目属性