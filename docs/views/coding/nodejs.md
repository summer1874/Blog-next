---
layout: post
title: "🧶 Node.js 不完全指南"
date: 2019-08-7
categories:
  -  Coding
tags:
  - node.js
keys:
  - a0c280fb6cb59d4e8f9d0c9eded5d346
---

### 使用nvm管理node
#### 安装nvm
(Windows 下安装 nvm 管理 nodejs 版本)[https://segmentfault.com/a/1190000007612011]
(Mac OS)[https://segmentfault.com/a/1190000007612011#articleHeader6]

#### 使用
```bash
nvm arch                     : Show if node is running in 32 or 64 bit mode.
nvm install <version> [arch] : The version can be a node.js version or "latest" for the latest stable version.
                                Optionally specify whether to install the 32 or 64 bit version (defaults to system arch).
                                Set [arch] to "all" to install 32 AND 64 bit versions.
                                Add --insecure to the end of this command to bypass SSL validation of the remote download server.
nvm list [available]         : List the node.js installations. Type "available" at the end to see what can be installed. Aliased as ls.
nvm on                       : Enable node.js version management.
nvm off                      : Disable node.js version management.
nvm proxy [url]              : Set a proxy to use for downloads. Leave [url] blank to see the current proxy.
                                Set [url] to "none" to remove the proxy.
nvm node_mirror [url]        : Set the node mirror. Defaults to https://nodejs.org/dist/. Leave [url] blank to use default url.
nvm npm_mirror [url]         : Set the npm mirror. Defaults to https://github.com/npm/cli/archive/. Leave [url] blank to default url.
nvm uninstall <version>      : The version must be a specific version.
nvm use [version] [arch]     : Switch to use the specified version. Optionally specify 32/64bit architecture.
                                nvm use <arch> will continue using the selected version, but switch to 32/64 bit mode.
nvm root [path]              : Set the directory where nvm should store different versions of node.js.
                                If <path> is not set, the current root will be displayed.
nvm version                  : Displays the current running version of nvm for Windows. Aliased as v.
```

```bash
$ nvm -h //查看nvm的指令
$ nvm list //查看本地已经安装的node版本列表
$ nvm list available //查看可以安装的node版本
$ nvm install latest //安装最新版本的node
$ nvm install [version][arch] //安装指定版本的node 例如：nvm install 10.16.3 安装node v10.16.3 arch表示电脑的位数 如果电脑需要安装32位的， 则运行：nvm install 10.16.3 32
$ nvm use [version] //使用node 例如：nvm use 10.16.3
$ nvm uninstall [version] //卸载node
```

## npx
1. 避免全局安装
2. 调用项目内部安装模块
```bash
npx <package> --version
```