---
layout: post
title: "👨‍🚀记录工作中用到的 shell"
date: 2019-09-09
categories:
  -  Coding
tags: 
  - bash
---
### 文件
```bash
# 创建文件夹
mkdir <fileName>
# 创建文件
touch <fileName>
# 移动文件
mv <fileName>* <目标文件目录>
```
### shell获取系统当前时间并格式化
```bash
time=$(date "+%Y-%m-%d %H:%M:%S")
# 必须为双引号
git commit -m "commit"$time
```