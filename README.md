---
title: 开始使用
description: 使用最新的 Vue3.3 和 TS， 意在让大家从零到一，由浅入深的提高自己的 Vue 和 typescript 水平
---

# 开始使用
使用最新的 Vue3.3 和 TS， 意在从零到一，由浅入深的提高自己的 Vue 和 typescript 水平


## 安装
```bash
npm install @sumilerjr/sparkle-ui --save
```
## 开始使用
### 全局使用

```js
// 引入所有组件
import SparkleUI from '@sumilerjr/sparkle-ui'
// 引入样式
import '@sumilerjr/sparkle-ui/dist/style.css'

import App from './App.vue'
// 全局使用
createApp(App).use(SparkleUI).mount('#app')
```
```js
<template>
  <sm-button>我是 SmButton</sm-button>
</template>
```


### 单个导入
SparkleUI 提供了基于 ES Module 的开箱即用的 Tree Shaking 功能。
```vue
<template>
  <Button>我是 SmButton</Button>
</template>
<script>
  import { Button } from '@sumilerjr/sparkle-ui'
  export default {
    components: { Button },
  }
</script>
```

## 项目亮点
- 亮点1 🔥：“热门”，由浅入深的高仿 Element-Plus 完成组件库开发的全流程。
- 亮点2 💧: “专业”，传授大厂前端项目架构设计思想/开发模式/代码规范/流程，不搞小作坊式代码。
- 亮点3 ⛑️: “全”，精选十几个组件，可以涵盖大部分的主流组件的设计思想以及原理，知识覆盖面全。
- 亮点4 📚：“新”，使用目前2023年 Vue3 周边最新 ，最全技术：Vue3.2 + Typescript4， Vite，Vitest， Vitepress，Vue-test-utils2，Rollup, Postcss 一网打尽。
- 亮点5 🎉：“难”，难度逐渐上升，高薪必备敲门砖，包括：Message - Select - Form 这种高难度高复杂组件。
- 亮点6 🌹：单元测试，被常年忽略但是非常重要的内容，简历加分项，使用最新的 Vitest，Vue-test-utils2 完成单元测试。
- 亮点7 📚: 文档生成工具，组件库打包和发布以及其他周边流程应有尽有，提供一揽子解决方案。
- 亮点8 📦: 长期维护以及更新，会根据自身需求持续更新几个高频组件。