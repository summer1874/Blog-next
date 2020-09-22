---
layout: post
title: "📦GIT"
date: 2018-06-05
categories:
  -  Coding
tags:
  - git
  - ssh
---

## 一般来说，日常使用只要记住下图6个命令，就可以了。但是熟练使用，恐怕要记住60～100个命令。
![专用](http://www.ruanyifeng.com/blogimg/asset/2015/bg2015120901.png)


下面是我整理的常用 Git 命令清单。几个专用名词的译名如下。
- **Workspace：工作区**
- **Index / Stage：暂存区**
- **Repository：仓库区（或本地仓库）**
- **Remote：远程仓库**
### 一、新建代码库

```bash
# 在当前目录新建一个Git代码库
$ git init

# 新建一个目录，将其初始化为Git代码库
$ git init [project-name]

# 下载一个项目和它的整个代码历史
$ git clone [url]
```
### 二、配置
Git的设置文件为.gitconfig，它可以在用户主目录下（全局配置），也可以在项目目录下（项目配置）。


```bash
# 显示当前的Git配置
$ git config --list

# 编辑Git配置文件
$ git config -e [--global]

# 设置提交代码时的用户信息
$ git config [--global] user.name "[name]"
$ git config [--global] user.email "[email address]"
```
### 三、增加/删除文件
```bash
# 添加指定文件到暂存区
$ git add [file1] [file2] ...

# 添加指定目录到暂存区，包括子目录
$ git add [dir]

# 添加当前目录的所有文件到暂存区
$ git add .

# 添加每个变化前，都会要求确认
# 对于同一个文件的多处变化，可以实现分次提交
$ git add -p

# 删除工作区文件，并且将这次删除放入暂存区
$ git rm [file1] [file2] ...

# 停止追踪指定文件，但该文件会保留在工作区
$ git rm --cached [file]

# 改名文件，并且将这个改名放入暂存区
$ git mv [file-original] [file-renamed]
```
### 四、代码提交

```bash
# 提交暂存区到仓库区
$ git commit -m [message]

# 提交暂存区的指定文件到仓库区
$ git commit [file1] [file2] ... -m [message]

# 提交工作区自上次commit之后的变化，直接到仓库区
$ git commit -a

# 提交时显示所有diff信息
$ git commit -v

# 使用一次新的commit，替代上一次提交
# 如果代码没有任何新变化，则用来改写上一次commit的提交信息
$ git commit --amend -m [message]

# 重做上一次commit，并包括指定文件的新变化
$ git commit --amend [file1] [file2] ...
```
### 五、分支
```bash
# 列出所有本地分支
$ git branch

# 列出所有远程分支
$ git branch -r

# 列出所有本地分支和远程分支
$ git branch -a

# 新建一个分支，但依然停留在当前分支
$ git branch [branch-name]

# 新建一个分支，并切换到该分支
$ git checkout -b [branch]

# 新建一个分支，指向指定commit
$ git branch [branch] [commit]

# 新建一个分支，与指定的远程分支建立追踪关系
$ git branch --track [branch] [remote-branch]

# 切换到指定分支，并更新工作区
$ git checkout [branch-name]

# 切换到上一个分支
$ git checkout -

# 建立追踪关系，在现有分支与指定的远程分支之间
$ git branch --set-upstream [branch] [remote-branch]

# 合并指定分支到当前分支
$ git merge [branch]

# 选择一个commit，合并进当前分支
$ git cherry-pick [commit]

# 删除分支
$ git branch -d [branch-name]

# 删除远程分支
$ git push origin --delete [branch-name]
$ git branch -dr [remote/branch]
```
### 六、标签
```bash
# 列出所有tag
$ git tag

# 新建一个tag在当前commit
$ git tag [tag]

# 新建一个tag在指定commit
$ git tag [tag] [commit]

# 删除本地tag
$ git tag -d [tag]

# 删除远程tag
$ git push origin :refs/tags/[tagName]

# 查看tag信息
$ git show [tag]

# 提交指定tag
$ git push [remote] [tag]

# 提交所有tag
$ git push [remote] --tags

# 新建一个分支，指向某个tag
$ git checkout -b [branch] [tag]
```
### 七、查看信息
```bash
# 显示有变更的文件
$ git status

# 显示当前分支的版本历史
$ git log

# 显示commit历史，以及每次commit发生变更的文件
$ git log --stat

# 搜索提交历史，根据关键词
$ git log -S [keyword]

# 显示某个commit之后的所有变动，每个commit占据一行
$ git log [tag] HEAD --pretty=format:%s

# 显示某个commit之后的所有变动，其"提交说明"必须符合搜索条件
$ git log [tag] HEAD --grep feature

# 显示某个文件的版本历史，包括文件改名
$ git log --follow [file]
$ git whatchanged [file]

# 显示指定文件相关的每一次diff
$ git log -p [file]

# 显示过去5次提交
$ git log -5 --pretty --oneline

# 显示所有提交过的用户，按提交次数排序
$ git shortlog -sn

# 显示指定文件是什么人在什么时间修改过
$ git blame [file]

# 显示暂存区和工作区的差异
$ git diff

# 显示暂存区和上一个commit的差异
$ git diff --cached [file]

# 显示工作区与当前分支最新commit之间的差异
$ git diff HEAD

# 显示两次提交之间的差异
$ git diff [first-branch]...[second-branch]

# 显示今天你写了多少行代码
$ git diff --shortstat "@{0 day ago}"

# 显示某次提交的元数据和内容变化
$ git show [commit]

# 显示某次提交发生变化的文件
$ git show --name-only [commit]

# 显示某次提交时，某个文件的内容
$ git show [commit]:[filename]

# 显示当前分支的最近几次提交
$ git reflog
```
### 八、远程同步

```bash
# 下载远程仓库的所有变动
$ git fetch [remote]

# 显示所有远程仓库
$ git remote -v

# 显示某个远程仓库的信息
$ git remote show [remote]

# 增加一个新的远程仓库，并命名
$ git remote add [shortname] [url]

# 取回远程仓库的变化，并与本地分支合并
$ git pull [remote] [branch]

# 上传本地指定分支到远程仓库
$ git push [remote] [branch]

# 强行推送当前分支到远程仓库，即使有冲突
$ git push [remote] --force

# 推送所有分支到远程仓库
$ git push [remote] --all
```
### 九、撤销

```bash
# 恢复暂存区的指定文件到工作区
$ git checkout [file]

# 恢复某个commit的指定文件到暂存区和工作区
$ git checkout [commit] [file]

# 恢复暂存区的所有文件到工作区
$ git checkout .

# 重置暂存区的指定文件，与上一次commit保持一致，但工作区不变
$ git reset [file]

# 重置暂存区与工作区，与上一次commit保持一致
$ git reset --hard

# 重置当前分支的指针为指定commit，同时重置暂存区，但工作区不变
$ git reset [commit]

# 重置当前分支的HEAD为指定commit，同时重置暂存区和工作区，与指定commit一致
$ git reset --hard [commit]

# 重置当前HEAD为指定commit，但保持暂存区和工作区不变
$ git reset --keep [commit]

# 新建一个commit，用来撤销指定commit
# 后者的所有变化都将被前者抵消，并且应用到当前分支
$ git revert [commit]

# 暂时将未提交的变化移除，稍后再移入
$ git stash
$ git stash pop
```
### 十、其他

```bash
# 生成一个可供发布的压缩包
$ git archive
```
















## 思维导图

### 工作区，版本库(暂存区-stage，分支-master)
![工作区，版本库(暂存区-stage，分支-master)](https://ae01.alicdn.com/kf/HTB11KfGKMTqK1RjSZPh760fOFXaU.png)
### 创建与合并分支
![创建与合并分支](https://ae01.alicdn.com/kf/HTB1Oer.KNnaK1RjSZFB763W7VXaN.png)
![创建与合并分支](https://ae01.alicdn.com/kf/HTB1o2LGKMTqK1RjSZPh760fOFXah.png)
###  分支
![branches](https://ae01.alicdn.com/kf/HTB1xsPOKNTpK1RjSZFK7612wXXa5.png)
### git folw
![flow.png](https://ae01.alicdn.com/kf/HTB1yV6MKH2pK1RjSZFs761NlXXav.png)


## SSH KEY

### git config

```bash
#  用户名
git config --global user.name "summer1874"
#  用于辨识身份 与github贡献挂钩 
git config --global user.email  "summer.mail1874@foxmail.com"
```
### 查看 `=>` 生成
```bash
# ssh key 目录
cd ~/.ssh
ls

# 生成ssh key
ssh-keygen 
#  ssh-keygen -t rsa -C "summer.mail1874@foxmail.com"

# 查看shh key
cat ~/.ssh/id_rsa.pub 
```

### 提示“Enter passphrase for key /root/.ssh/id_rsa.pub”让输入私钥
```bash
eval `ssh-agent` 
ssh-add
```
>ssh-agent是用于管理密钥，ssh-add用于将密钥加入到ssh-agent中，SSH可以和ssh-agent通信获取密钥，这样就不需要用户手工输入密码了。 

## git删除远程文件夹或文件的方法

具体操作步骤如下：

1. 预览将要删除的文件
```bash
$ git rm -r -n --cached <file>
# 加上 -n 这个参数，执行命令时，是不会删除任何文件，而是展示此命令要删除的文件列表预览。
```
1. 确定无误后删除文件

```bash
git rm -r --cached <file>
```
3. 提交到本地并推送到远程服务器
```
git commit -m "msg"
git push origin master
```
4. 修改本地 .gitignore 文件 并提交
```bash
  git commit -m "msg"
  git push origin master
```

## cherry-pick的使用
1. 将指定的提交（commit）应用于其他分支。
```bash
$ git cherry-pick <commitHash>
```
2. 转移该分支的最新提交
```bash
$ git cherry-pick <branchName>
```
3. 转移多个提交
```bash
$ git cherry-pick <HashA> <HashB>
```
4. 不包含 HashA , 转移一系列的连续提交
```bash
$ git cherry-pick <HashA>..<HashD>
```
5. 包含提交 HashA
```bash
$ git cherry-pick <HashA>^..<HashD>
```
6. 打开外部编辑器，编辑提交信息。
```bash
$ git cherry-pick (-e | --edit)
```
7. 只更新工作区和暂存区，不产生新的提交。
```bash
$ git cherry-pick (-n | --no-commit)
```
8. 在提交信息的末尾追加一行(cherry picked from commit ...)，方便以后查到这个提交是如何产生的。
```bash
$ git cherry-pick (-x | --edit)
```
9. 在提交信息的末尾追加一行操作者的签名，表示是谁进行了这个操作。
```bash
$ git cherry-pick (-s | --signoff)
```
10. 如果原始提交是一个合并节点，来自于两个分支的合并，那么 Cherry pick 默认将失败，因为它不知道应该采用哪个分支的代码变动。-m配置项告诉 Git，应该采用哪个分支的变动。它的参数parent-number是一个从1开始的整数，代表原始提交的父分支编号。
```bash
$ git cherry-pick (-m parent-number | --mainline parent-number)
```
11. - 用户解决代码冲突后，第一步将修改的文件重新加入暂存区（git add .），第二步使用下面的命令，让 Cherry pick 过程继续执行。
    - 跳过当前提交并继续执行其余的序列。
    - 发生代码冲突后，放弃合并，回到操作前的样子。
    - 发生代码冲突后，退出 Cherry pick，但是不回到操作前的样子。
```bash
$ git cherry-pick (--continue | --skip | --abort | --quit)
```
## git commit 规范
```
<type>(<scope>): <subject>
<BLANK LINE>
<body>
<BLANK LINE>
<footer>


feat(*): add page
add pages
resolve #001
```
#### 通过 git commit 命令带出的 vim 界面填写的最终结果应该类似如上这个结构, 大致分为三个部分(使用空行分割):
- 标题行: 必填, 描述主要修改类型和内容
- 主题内容: 描述为什么修改, 做了什么样的修改, 以及开发的思路等等
- 页脚注释: 放 Breaking Changes 或 Closed Issues

#### 分别由如下部分构成:
- type: commit 的类型
- feat: 新特性
- fix: 修改问题
- refactor: 代码重构
- docs: 文档修改
- style: 代码格式修改, 注意不是 css 修改
- test: 测试用例修改
- chore: 其他修改, 比如构建流程, 依赖管理.
- scope: commit 影响的范围, 比如: route, component, utils, build...
- subject: commit 的概述, 建议符合  50/72 formatting
- body: commit 具体修改内容, 可以分为多行, 建议符合 50/72 formatting
- footer: 一些备注, 通常是 BREAKING CHANGE 或修复的 bug 的链接.
这样一个符合规范的 commit message, 就好像是一份邮件.

## git 覆盖另一个分支
```bash
git checkout better_branch
git merge --strategy=ours master    # keep the content of this branch, but record a merge
git checkout master
git merge better_branch             # fast-forward master up to the merge

# 如果您想更清楚地了解历史记录，建议您向合并提交消息中添加一些信息，以使您清楚自己所做的事情。将第二行更改为：

git merge --strategy=ours --no-commit master
git commit          # add information to the template merge message
```

## git 从远程仓库获取所有分支
```bash
git clone xxx
git branch -r | grep -v '\->' | while read remote; do git branch --track "${remote#origin/}" "$remote"; done
git fetch --all
git pull --all
```
[How to fetch all Git branches](https://stackoverflow.com/questions/10312521/how-to-fetch-all-git-branches)

## git 大纲
![git 大纲](https://pic.downk.cc/item/5e7852a45c5609112978b039.png)
#### 参考

[Git Cheat Sheet 中文版](https://github.com/flyhigher139/Git-Cheat-Sheet)
[Git教程 廖雪峰的官方网站](https://www.liaoxuefeng.com/wiki/0013739516305929606dd18361248578c67b8067c8c017b000)
[阿里南京技术专刊](https://juejin.im/post/5afc5242f265da0b7f44bee4)