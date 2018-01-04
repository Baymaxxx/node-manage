### 初始化项目环境配置方面 
    参考文章： https://segmentfault.com/a/1190000010324128
***
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