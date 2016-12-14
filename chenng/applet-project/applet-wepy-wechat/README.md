wepy 组件式开发模仿微信的小程序
---
原地址：<https://github.com/wepyjs/wepy-wechat-demo>

技术栈：wepy

本项目基于wepy开发，[参考这里](https://github.com/wepyjs/wepy)

- wepy仿微信聊天界面，数据来自mock数据，支持聊天，自动回复等，聊天记录存储在本地storage

### 体验步骤
1、安装 wepy
```bash
npm install wepy-cli -g
```
2、下载源代码
```bash
git clone git@github.com:wepyjs/wepy-wechat-demo.git
```
3、安装开发依赖
```bash
npm install
```
4、编译源代码
```bash
wepy build --watch
```
5、导入至开发者工具

编译完成后会生成`dist`目录，开发者工具本地开发目录指向`dist`目录。

**切记： 取消勾选`项目-->开启ES6转ES5`，否则代码运行出现如下错误ˇ。**
![qq 20161129203744](https://cloud.githubusercontent.com/assets/2182004/20710080/bfe6d6b6-b673-11e6-8837-07d0c2fb6953.png)

### 更新脚手架工具
```bash
npm install wepy-cli -g
```
在项目文件夹下
```bash
npm install wepy --save
wepy build --no-cache
```