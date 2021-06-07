### async await 和 promise微任务执行顺序问题：
[参考](https://segmentfault.com/q/1010000016147496) 

> 宏任务&微任务：https://zhuanlan.zhihu.com/p/78113300

#### 1.先理解一些概念：
+ JS 分为同步任务和异步任务
+ 同步任务都在JS引擎线程上执行，形成一个 执行栈
+ 事件触发线程管理一个 任务队列，异步任务触发条件达成，将回调事件放到 任务队列中
+ 执行栈中所有*同步任务*执行完毕，此时JS引擎线程空闲，系统会去读取 任务队列，将可运行的异步任务回调事件添加到 执行栈中，开始执行

#### 2.运行机制：
在事件循环中，每进行一次循环操作称为 tick，每一次 tick 的任务处理模型是比较复杂的，但关键步骤如下：
+ 执行一个宏任务（栈中没有就从事件队列中获取）
+ 执行过程中如果遇到微任务，就将它添加到微任务的微任务队列中
+ 宏任务执行完毕后，立即执行当前微任务队列中的所有微任务（依次执行）
+ 当前宏任务执行完毕，开始检查渲染，然后GUI线程接管渲染
+ 渲染完毕后，JS引擎线程继续接管，开始下一轮宏任务（从事件队列中获取）


#### 宏任务包括：
* script代码、setTimeout、setInterval、I/O、UI render、 postMessage、MessageChannel、setImmediate(Node.js 环境)

#### 微任务包括：
+ promise.then、Object.observe(已废弃)、MutationObserver、process.nextTick(Node.js 环境)

### async/await 在chrome 环境和 node 环境的 执行结果不一致，求解？
[参考](https://www.zhihu.com/question/268007969)  

### What's the difference between resolve(thenable) and resolve('non-thenable-object')?
[参考](https://stackoverflow.com/questions/53894038/whats-the-difference-between-resolvethenable-and-resolvenon-thenable-object)  

### promise, async, await, execution order
[参考](https://github.com/xianshenglu/blog/issues/60#issuecomment-449739628)  

### 从一道题浅说 JavaScript 的事件循环
[参考](https://github.com/dwqs/blog/issues/61)  

### 8张图帮你一步步看清 async/await 和 promise 的执行顺序
[参考](https://segmentfault.com/a/1190000017224799)  

### 翻译】Promises/A+规范
[参考](https://www.ituring.com.cn/article/66566)  