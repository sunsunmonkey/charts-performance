# charts-performance

## 图表性能测速

项目启动

```shell
pnpm i

pnpm dev
```

## 添加用例方式

添加图表选项

在**src\layout\content\meta.json**里直接添加即可

添加测试代码

基于vite的**import.mete.glob**自动解析读入

但注意要加在第二层，例子**src\pref\cases\g2\echarts\area.ts**

## chartWrapper

由于不同引擎可能有不同特殊处理，所以进行了一些解耦操作，

在**src\pref\cases\chartWrapper.ts**可以添加一些wrapper，有点类似于中间件，目前只有timerWrapper，可以自行添加

然后再在**src\pref\cases\index.ts**的getPerfCase中包裹就好

## 懒加载

由于可能未来测试用例的增加，导致包体积太大，所以采用了一定的懒加载

## TODO

各种用例的添加，以及数据的调优
