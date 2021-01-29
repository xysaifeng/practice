// https://segmentfault.com/q/1010000016147496

// demo1
/*
async function async1(){
  console.log('async1 start')
  await async2()
  console.log('async1 end')
  // equal to about
  // Promise.resolve(async2()).then(() => console.log('async1 end'))
}
async function async2(){
  console.log('async2')
} 
async1();
new Promise(function(resolve){
  console.log('promise1')
  resolve();
}).then(function(){
  console.log('promise2')
}).then(function() {
  console.log('promise3')
})
*/
// res: async1 start => async2 => promise1=>async1 end =>promise2 => promise3

// demo1根据规范转换
/*
async function async1(){
  console.log('async1 start')
  // await async2()
  // console.log('async1 end')
  // 等价于
 new Promise(resolve => {
    // resolve(async2())
    // 等价于
    Promise.resolve().then(() => {
      async2().then(resolve)
    })
  }).then(_ => {
    console.log('async1 end')
  })
}
async function async2(){
  console.log('async2')
} 
async1();
new Promise(function(resolve){
  console.log('promise1')
  resolve();
}).then(function(){
  console.log('promise2')
}).then(function() {
  console.log('promise3')
})

*/
// res（根据规范转换的结果和在浏览器里输出是不一致的）: async1 start => promise1 => async2 => promise2 => promise3 => async1 end 


// demo1根据最新Promise.resolve规范转换（在 chrome canary 73及未来可能被解析为）
// 即：
// async1不采用new Promise包装，而直接采用Promise.resolve()来包装
  // async function async1() {
  //   Promise.resolve(async2).then(() => {
  //     console.log('async1 end')
  //   })
  // }
// 又因为 async2() 返回一个 promise, 根据规范Promise.resolve，
// 所以Promise.resolve(promise)返回promise,即 Promise.resolve(async2)等价于async2
// 所以最终得到了代码
  // async function async1 () {
  //   async2().then(() => {
  //     console.log('async1 end')
  //   })
  // }

  /*
async function async1(){
  console.log('async1 start')
  // await async2()
  // console.log('async1 end')
  // 等价于
  async2().then(() => {
    console.log('async1 end')
  })
}
async function async2(){
  console.log('async2')
} 
async1();
new Promise(function(resolve){
  console.log('promise1')
  resolve();
}).then(function(){
  console.log('promise2')
}).then(function() {
  console.log('promise3')
})
*/
// res: async1 start => async2 =>promise1 =>async1 end => promise2 => promise3

// /*
async function async1(){
  console.log('async1 start')
  new Promise(resolve => {
    console.log(0);
    Promise.resolve().then(() => {
      console.log(1);
      async2().then(_ => {
        console.log(2);
        resolve()
      })
    }).then(() => {
      console.log('async1 end')
    })
  })
}
async function async2(){
  console.log('async2')
} 
async1();
new Promise(function(resolve){
  console.log('promise1')
  resolve();
}).then(function(){
  console.log('promise2')
}).then(function() {
  console.log('promise3')
})
//  */
// task宏任务 job微任务
// res: async1 start => 0 => promise1 => 1(j1-1) => async2(j1-1) =>promise2(j1-2)  => 2(j2-1)  => async1 end(j2-2) =>promise3(j2-3)
// 分析出现上述结果的原因：首先跑脚本执行宏任务，依次输出async1 start => 0（注册微任务j1-1） => promise1（注册微任务j1-2）,接着执行第一轮微任务，输出：1 => (同步执行输出)async2(注册async2后的微任务j2-1，接着注册1后的微任务j2-2) =>promise2(注册微任务j2-3）,执行第二轮微任务，输出：2 => async1 end => promise3


// async function async1(){
//   console.log('async1 start')
//   new Promise(resolve => {
//     console.log(0);
//     Promise.resolve().then(() => {
//       console.log(1);
//       async2().then(_ => {
//         console.log(2);
//         resolve()
//       }).then(() => {
//         console.log('async1 end')
//       })
//     })
//   })
// }
// async function async2(){
//   console.log('async2')
// } 
// async1();
// new Promise(function(resolve){
//   console.log('promise1')
//   resolve();
// }).then(function(){
//   console.log('promise2')
// }).then(function() {
//   console.log('promise3')
// })

// res: async1 start => 0 => promise1 => 1 => async2 =>promise2  => 2  =>promise3=>async1 end



// async function async1(){
//   console.log('async1 start')
//   new Promise(resolve => {
//     console.log(0);
//     Promise.resolve().then(() => {
//       console.log(1);
//       async2().then(_ => {
//         console.log(2);
//         resolve()
//       })
//     })
//   }).then(() => {
//     console.log('async1 end')
//   })
// }
// async function async2(){
//   console.log('async2')
// } 
// async1();
// new Promise(function(resolve){
//   console.log('promise1')
//   resolve();
// }).then(function(){
//   console.log('promise2')
// }).then(function() {
//   console.log('promise3')
// })

// res: async1 start => 0 => promise1 => 1 => async2 =>promise2  => 2  =>promise3 =>async1 end


// async function async1(){
//   console.log('async1 start')
//   new Promise(resolve => {
//     console.log(0);
//     Promise.resolve().then(() => {
//       console.log(1);
//       async2().then(_ => {
//         console.log(2);
//         resolve()
//       }).then(() => {
//         console.log('async1 end')
//       })
//     })
//   })
// }
// async function async2(){
//   console.log('async2')
// } 
// async1();
// new Promise(function(resolve){
//   console.log('promise1')
//   resolve();
// }).then(function(){
//   console.log('promise2')
// }).then(function() {
//   console.log('promise3')
// })
// */
// res: async1 start => 0 => promise1 => 1 => async2 =>promise2  => 2  =>promise3=>async1 end