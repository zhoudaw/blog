
## 快速上手
::: warning
 #### 前提条件
 VuePress 需要 Node.js>= 8.6
:::
::: tip
```js
1.创建并进入一个新目录
mkdir vuepress-starter && cd vuepress-starter
2.使用你喜欢的包管理器进行初始化
yarn init # npm init
3.将 VuePress 安装为本地依赖 我们已经不再推荐全局安装 VuePress
yarn add -D vuepress # npm install -D vuepress
4.创建你的第一篇文档
mkdir docs && echo '# Hello VuePress' > docs/README.md
5.在 package.json 中添加一些 scripts
{
  "scripts": {
    "docs:dev": "vuepress dev docs",
    "docs:build": "vuepress build docs"
  }
}
6.在本地启动服务器
yarn docs:dev # npm run docs:dev
```
:::
