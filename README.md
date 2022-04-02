# vue-covid-19

## Project setup

```js
npm install
```

## Compiles and hot-reloads for development

```js
npm run serve
```

## Compiles and minifies for production

```js
npm run build
```

## Lints and fixes files

```js
npm run lint
```

## Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).


## 文件结构

```
├── public
│   ├── favicon.ico: 页签图标
│   └── index.html: 主页面
├── src
│   ├── api
│   │   └── index.js: api配置
│   ├── assets: 静态资源
│   │   └── common.css: 公共样式
│   │── components: 一般组件
│   │   └── Cascader.vue: 级联选择器
│   │   └── CaseCollectChina.vue: 国内各地区疫情统计汇总
│   │   └── CaseCollectWorld.vue: 国外各国家疫情统计汇总
│   │   └── CaseNumChina.vue: 国内疫情
│   │   └── CaseNumChina.vue: 国外疫情
│   │   └── CaseReport.vue: 疫情速报
│   │   └── Header.vue: 头部
│   │   └── MapChina.vue: 中国疫情地图父组件
│   │   └── MapChinaAll.vue: 中国疫情地图-累计确诊
│   │   └── MapChinaNow.vue: 中国疫情地图-现存确诊
│   │   └── MapWorld.vue: 世界疫情地图父组件
│   │   └── MapWorldAll.vue: 世界疫情地图-累计确诊
│   │   └── MapWorldNow.vue: 世界疫情地图-现存确诊
│   │   └── News.vue: 疫情新闻
│   │   └── Query.vue: 出行政策查询与核酸检测机构查询
│   │   └── Swiper.vue: 轮播图父组件
│   │   └── SwiperChart1.vue: 轮播图1
│   │   └── SwiperChart2.vue: 轮播图2
│   │   └── SwiperChart3.vue: 轮播图3
│   │   └── SwiperChart4.vue: 轮播图4
│   │── plugins
│   │   └── china.js: 中国地图
│   │   └── echarts.js: echarts相关
│   │   └── formatter.js: 数据格式化
│   │   └── nationName.js: echarts相关-世界地图中国家名中英文对照
│   │   └── vant.js: vant相关
│   │   └── world.js: 世界地图
│   │── router
│   │   └── index.js: router配置
│   │── store
│   │   └── modules: vuex模块
│   │   └── sinaAbout.js: 新浪接口（请求与处理数据）
│   │   └── tencentAbout.js: 新浪接口（请求与处理数据）
│   │   └── tianAbout.js: 天行接口（请求与处理数据）
│   │   └── wyAbout.js: 网易接口（请求与处理数据）
│   │   └── index.js: vuex配置
│   │── utils
│   │   └── request.js: axios配置
│   │── views: 路由组件
│   │   └── Home.vue: 父组件
│   │   └── HSJG.vue: 核算机构
│   │   └── Query.vue: 出行政策
│   │── App.vue: 根组件
│   │── main.js: 入口文件
├── .gitignore: git版本管制忽略的配置
├── babel.config.js: babel的配置文件
├── package.json: 本项目依赖的包配置文件
├── package-lock.json: node_modules包版本控制文件 
├── README.md: 描述文件
├── vue.config.js：vue配置（主要配置Proxy代理跨域）
```

## 技术栈

1. [Axios 网络请求](http://www.axios-js.com/)
2. [Echarts 数据可视化](https://echarts.apache.org/zh/index.html)
3. [Vue-cli 脚手架](https://cli.vuejs.org/zh/)
4. [Vue-router 路由](https://router.vuejs.org/zh/)
5. [Vant UI](https://vant-contrib.gitee.io/vant/#/zh-CN/)

## api 接口

1. 全国疫情数据：<http://api.tianapi.com/ncov/index?key=1418c5d0819239adbb4f75c949f15f08>

2. 城市疫情数据：<https://view.inews.qq.com/g2/getOnsInfo?name=disease_h5>

3. 海外疫情数据：<http://api.tianapi.com/ncovabroad/index?key=1418c5d0819239adbb4f75c949f15f08>

4. 城市清单：<http://apis.juhe.cn/springTravel/citys?key=e9b4d95bcb942e342a309093c53c9943>

5. 出行防疫政策：<http://apis.juhe.cn/springTravel/query?key=e9b4d95bcb942e342a309093c53c9943>

6. 境外输入Top10: <https://interface.sina.cn/news/wap/fymap2020_data.d.json>

## 项目预览

![](https://tva1.sinaimg.cn/large/e6c9d24egy1h0vj94o0gqj20xl0u0jv2.jpg)

![](https://tva1.sinaimg.cn/large/e6c9d24egy1h0vj9a2aqij20zl0u0gpk.jpg)

![](https://tva1.sinaimg.cn/large/e6c9d24egy1h0vjad6sukj21sj0u0ahv.jpg)
