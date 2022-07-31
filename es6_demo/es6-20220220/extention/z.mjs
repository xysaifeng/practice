import "./x.mjs";
import "./y.mjs";
console.log("Z");

// 1.顶层await只能用在 ES6 模块，不能用在 CommonJS 模块。
// 2.如果加载多个包含顶层await命令的模块，加载命令是同步执行的。

// 上面代码有三个模块，最后的z.js加载x.js和y.js，打印结果是X1、Y、X2、Z。这说明，z.js并没有等待x.js加载完成，再去加载y.js。