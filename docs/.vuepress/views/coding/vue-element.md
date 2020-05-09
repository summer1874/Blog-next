---
layout: post
title: "🛸vue Element UI 杂记"
date: 2019-06-11
categories:
  -   Coding
tags:
  - vue
---

## Table
### Rowspan and colspan
:::tip 
#### `:span-method`
`@param {row, column, rowIndex, columnIndex}`
- `row` 当前行
- `column` 当前列
- `rowIndex` 当前行号
- `columnIndex` 当前列号

`@return {rowspan, colspan }`
- `rowspan` 合并的行数
-  `colspan` 合并的列数
-  为`1`表示不变,为`0`表示去除该单元格
:::

```html
<template>
...
  <el-table
  :data="tableData"
  :span-method="objectSpanMethod"
  >
...
</template>
```
```js
...
data() {
  return {
    // 
    mergeSignIndex: [],
    // 预设需要合并的列
    reserveMergeArray: [0, 7]
  }
}
pushSign(key) {
  const formattingObj = {}
  this.tableDate.forEach((e, i) => {
    e.rowIndex = i
    // 获取key值对应的下标
    if(Reflect.has(formattingObj, e[key])) {
      formattingObj[e[key]].push(i)
    } else {
      formattingObj[e[key]] = []
      formattingObj[e[key]].push(i)
    }
  })
  for (let k in formattingObj) {
    if (formattingObj[k].length > 1) {
      this.mergeSignIndex.push(formattingObj[k])
    }
  }
}
/**
 * @param {row, column, rowIndex, columnIndex}
 *    row 当前行
 *    column 当前列
 *    rowIndex 当前行号
 *    columnIndex 当前列号
 * @return {rowspan, colspan }
 *    rowspan 合并的行数
 *    colspan 合并的列数
 *    为1表示不变,为0表示去除该单元格
 */
objectSpanMethod(row, column, rowIndex, columnIndex) {
  // 判断是否需要合并
  if (this.reserveMergeArray.includes(columnIndex)) {
    const _row = this.spanArr[rowIndex]
    // ０即表示该行不显示
    const _col = _row > 0 ? 1 : 0
    return {
      rowspan: _row,
      colspan: _col
    }
  }
}
...
```
### ate-picker
```html
<el-date-picker
  v-model="value"
  type="daterange"
  start-placeholder="开始日期"
  end-placeholder="结束日期"
  format="yyyy-MM-dd"
  value-format="yyyyMMdd"
/>
```