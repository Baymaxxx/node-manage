### 初始化项目环境配置方面 
    参考文章： https://segmentfault.com/a/1190000010324128
    脱坑指南：https://juejin.im/post/59fa9257f265da43062a1b0e（遇坑先查询）
    > 需封装模块
      * vue的axios请求
***
#### 封装axios
    参考文章： https://juejin.im/post/59a22e71518825242c422604
    > 目的：解决代码冗余造成的开发及维护难度,对错误进行预处理。
    > 需求：   
        * 统一捕获接口报错：axios内置的拦截器
        * 弹窗提示：Message组件
        * 报错重定向：路由钩子
        * 基础鉴权：服务端过期时间戳和token,还有借助路由的钩子
        * 表单序列化：qs(npm模块)

#### 引入sass全局变量，mixin，function等
```
先安装 npm install sass-resources-loader --save-dev，
然后把scss: generateLoaders('sass')替换成如下代码
scss: generateLoaders('sass').concat(
    {
        loader: 'sass-resources-loader',
        options: {
        resources: path.resolve(__dirname, '../src/assets/scss/color.scss')
        }
    }
), 
```