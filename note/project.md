# 解决安装node-sass卡住很慢方法一

### 参考文章
[yarn 安装node-sass卡住很慢](https://blog.csdn.net/Beauty_zhang666/article/details/106331459)

### 前言
遇到问题：yarn安装项目依赖，遇到node-sass模块被卡住，整个时间用了600s+,实在令人头大。

### yarn解决
1.设置yarn源为淘宝源
> yarn config set registry https://registry.npm.taobao.org -g

2.配置下 node-sass 的二进制包镜像地址
> yarn config set sass_binary_site http://cdn.npm.taobao.org/dist/node-sass -g

3.愉快的安装sass-node
> yarn add node-sass

### npm解决
把yarn改成npm, 其他配置一模一样
> npm config set registry https://registry.npm.taobao.org -g   
npm config set sass_binary_site http://cdn.npm.taobao.org/dist/node-sass -g


# 解决安装node-sass卡住很慢方法二

### 参考文章
[node-sass下载太慢解决方法](https://blog.csdn.net/weixin_37221852/article/details/104800962)

在项目根目录建立 .npmrc文件
> sass_binary_site=https://npm.taobao.org/mirrors/node-sass/
