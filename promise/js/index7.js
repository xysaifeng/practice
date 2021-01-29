// new Promise((resolve, reject) => {
//   console.log('外部promise');
//   resolve();
// })
//   .then(() => {
//     console.log('外部第一个then');
//     new Promise((resolve, reject) => {
//       console.log('内部promise');
//       resolve();
//     })
//       .then(() => {
//         console.log('内部第一个then');
//       })
//       .then(() => {
//         console.log('内部第二个then');
//       })
//   })
//   .then(() => {
//     console.log('外部第二个then');
//   })
//   .then(() => {
//     console.log('外部第三个then');
//   })

// my error res: 外部promise => 外部第一个then => 内部promise => 外部第二个then（j-1） => 内部第一个then => 外部第三个then => 内部第二个then
// 分析错误的原因：首先执行宏任务输出：'外部promise'，接着执行第一轮微任务，输出：'外部第一个then'、'内部promise'（输出该值时，注册第二轮一个微任务（内部第一个then），跳出程序执行下一个微任务输出：'外部第二个then'，并注册第二轮又一个微任务（外部第三个then）），接着执行第二轮微任务：输出：'内部第一个then'（注册第三轮微任务（内部第二个then））、'外部第三个then'，接着执行第三轮微任务：输出：'内部第二个then'

// ok res: 外部promise => 外部第一个then => 内部promise => 内部第一个then => 外部第二个then => 内部第二个then => 外部第三个then
// 正确分析：前提一定要明白，微任务的执行是按顺序注册的。首先执行宏任务输出：'外部promise'，此时注册了一个微任务等待执行。第二：执行第一轮微任务，输出：'外部第一个then'、'内部promise'（输出该值后，遇到then,注册第二轮第一个微任务（内部第一个then），跳出程序往下执行，再遇到一个then并注册为第二轮第二个微任务[注意此时微任务队列里已经有了一个job]），第三：执行第二轮微任务，输出：'内部第一个then'（输出该值后，遇到then,注册第三轮第一个微任务（内部第二个then）、'外部第二个then'（输出该值后，遇到then,注册第三轮第二个微任务（外部第三个then），第四：执行第三轮微任务，输出：'内部第二个then'、'外部第三个then'


// 增加一行代码 
// new Promise((resolve, reject) => {
//   console.log('外部promise');
//   resolve();
// })
//   .then(() => {
//     console.log('外部第一个then');
//     new Promise((resolve, reject) => {
//       console.log('内部promise');
//       resolve();
//     })
//       .then(() => {
//         console.log('内部第一个then');
//         // return Promise.resolve();// 如果return 一个promise，则相当于在这里再增加一个job 

//         // equal to below
//         // return new Promise(r => {
//         //   Promise.resolve().then(() => {
//         //     // console.log(2);
//         //     r()
//         //   })
//         // })

//         // also equal to below
//         return Promise.resolve().then(() => {
//         })

//       })
//       .then(() => {
//         console.log('内部第二个then');
//       })
//   })
//   .then(() => {
//     console.log('外部第二个then');
//   })
//   .then(() => {
//     console.log('外部第三个then');
//   })
// res: 外部promise => 外部第一个then => 内部promise => 内部第一个then => 外部第二个then => 外部第三个then => 内部第二个then


// 增加一行代码 
// new Promise((resolve, reject) => {
//   console.log('外部promise');
//   resolve();
// })
//   .then(() => {
//     console.log('外部第一个then');
//     new Promise((resolve, reject) => {
//       console.log('内部promise');
//       resolve();
//     })
//       .then(() => {
//         console.log('内部第一个then');
//       })
//       .then(() => {
//         console.log('内部第二个then');
//       })
//   })
//   .then(() => {
//     console.log('外部第二个then');
//     return Promise.resolve()
//     // equal to below
//     // return Promise.resolve().then()
//   })
//   .then(() => {
//     console.log('外部第三个then');
//   })
// res: 外部promise => 外部第一个then => 内部promise => 内部第一个then => 外部第二个then => 内部第二个then=> 外部第三个then 


// ======================================================================================================
// demo1
// new Promise(function (resolve) {
//   resolve()
// }).then(function () {
//   console.log(0);
//   let pro = new Promise((r) => {
//     r(4);
//   });
//   return pro;
// })
//   .then(function (r) {
//     console.log(r)
//   })

// new Promise(function (resolve, reject) {
//   resolve(2);
// }).then(function (r) {
//   console.log(1)
// }).then(function () {
//   console.log(2)
// }).then(function (r) {
//   console.log(3)
// }).then(function () {
//   console.log(5);
// });
// res: 0 1 2  3 4 5

// 上面demo1可以简化为demo1-1
// demo1-1
// new Promise(function (resolve) {
//   resolve()
// }).then(function () {
//   console.log(0);
//   return Promise.resolve(4);
// }).then(function (r) {
//   console.log(r)
// })

// new Promise(function (resolve, reject) {
//   resolve(2);
// }).then(function (r) {
//   console.log(1)
// }).then(function () {
//   console.log(2)
// }).then(function (r) {
//   console.log(3)
// }).then(function () {
//   console.log(5);
// });


// 上面demo 的令人疑惑的地方就是， 在 then 里面 return promise 产生了额外的延迟，对吧？那去翻规范的话，就是promise.prototype.then 这里，这个 then 方法里最终返回了 resultCapability.[[Promise]]，这个 resultCapability 是什么呢？
// 规范里给的是
// Let resultCapability be ? NewPromiseCapability(C).
// 也就是说，你在 then 里返回的值，**最终会经过 new Promise 重新包裹一遍**，对于非 thenable，重新包裹一遍不影响，对于 thenable 重新包裹一遍就有影响了，这里的影响结果和 await obj 是一样的道理， obj 是不是 thenable 很关键。

// 所以上面demo1可以简化为demo1-2
// demo1-2
// Promise.resolve().then(function () {
//   console.log(0);
//   new Promise(resolve => {
//     resolve(Promise.resolve(4))
//   }).then((r) => {
//     console.log(r);
//   })
// })

// Promise.resolve().then(function (r) {
//   console.log(1)
// }).then(function () {
//   console.log(2)
// }).then(function (r) {
//   console.log(3)
// }).then(function () {
//   console.log(5);
// });

// 到这为止，区别就是 RESOLVE(promise) 和 Promise.resolve(promise) 的区别了，最终demo1-2 的代码可以转换成
// demo1-3
// Promise.resolve().then(function () {
//   console.log(0);
//   new Promise(resolve => {
//     // resolve(Promise.resolve(4))
//     // equal to below
//     let p = Promise.resolve(4)
//     Promise.resolve().then(() => { // job1
//       p.then(resolve)// job2
//     })
//   }).then((r) => {
//     console.log(r);// job3
//   })
// })

// Promise.resolve().then(function (r) {
//   console.log(1)
// }).then(function () {
//   console.log(2)
// }).then(function (r) {
//   console.log(3)
// }).then(function () {
//   console.log(5);
// });

// res： 0 1 2 3 4 5
// ->：注册微任务
// 分析：
// 1th-job: 0->job1,1->2, 
// 2th-job: job1->job2,2->3, 
// 3th-job: job2->job3,3->5, 
// 4th-job: 4(job3),5,


// 将demo1进行转换为demo2
// 转换依据1
// Promise.resolve 等价于new Promise(r => r())
// 转换依据2
// then 里返回的值，**最终会经过 new Promise 重新包裹一遍**，

// demo2
// Promise.resolve().then(function () {
//   console.log(0);
//   // let pro = new Promise((r) => {
//   //   r(4);
//   // });
//   // return pro;
//   new Promise(resolve => {
//     resolve(Promise.resolve(4))
//   }).then(function (r) {
//     console.log(r)
//   })
// })
// Promise.resolve().then(function (r) {
//   console.log(1)
// }).then(function () {
//   console.log(2)
// }).then(function (r) {
//   console.log(3)
// }).then(function () {
//   console.log(5);
// });

// 将demo2再进行转换demo3
// 转换依据：
// **非常重要的一环节** https://segmentfault.com/q/1010000016147496
// RESOLVE(thenable) 和 Promise.resolve(thenable) 的转换关系是这样的，
// new Promise(resolve => {
//   resolve(thenable)
// })
// 会被转换成
// new Promise(resolve => {
//   Promise.resolve().then(()=> {
//     thenable.then(() => {
//       resolve()
//     })
//   })
// })

// demo3
Promise.resolve().then(function () {
  console.log(0);
  new Promise(resolve => {
    // resolve(Promise.resolve(4))
    Promise.resolve().then(() => {
      Promise.resolve(4).then(resolve)
    })
  }).then(function (r) {
    console.log(r)
  })
})
Promise.resolve().then(function (r) {
  console.log(1)
}).then(function () {
  console.log(2)
}).then(function (r) {
  console.log(3)
}).then(function () {
  console.log(5);
});
// res: 0 1 2 3 4 5