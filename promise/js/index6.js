// **非常重要的一环节** https://segmentfault.com/q/1010000016147496
// RESOLVE(thenable) 和 Promise.resolve(thenable) 的转换关系是这样的，
// new Promise(resolve => {
//   resolve(thenable)
// })
// (根据规范)会被转换成
// new Promise(resolve => {
//   Promise.resolve().then(()=> {
//     thenable.then(() => {
//       resolve()
//     })
//   })
// })

// 注意：该转换与asyn修饰的函数里的await fn的转换不一样（见index5.js）
// async1不采用new Promise包装，而直接采用Promise.resolve()来包装
// async function async1(){
//   await async2()
//   console.log('async1 end')
//   // 等价于
//   Promise.resolve(async2()).then(() => {
//     console.log('async1 end')
//   })
//   // 又因为 async2() 返回一个 promise, 根据规范Promise.resolve，
//   // 所以Promise.resolve(promise)返回promise,即 Promise.resolve(async2())等价于async2()
//   // 等价于
//   async2().then(() => {
//     console.log('async1 end')
//   })
// }
// async function async2(){
//   console.log('async2')
// }

new Promise((r) => {
  console.log('in p0');
  // r(new Promise((r) => {
  //   console.log('in internal p');
  //   r();
  // }));
  // 相当于：
  let thenable = new Promise((r) => {
    console.log('in internal p');
    r();
  })
  Promise.resolve().then(() => {
    console.log(1);
    thenable.then(r)
  })
})
.then(() => { console.log('0-0') })
.then(() => { console.log('0-1') })
.then(() => { console.log('0-2') })
.then(() => { console.log('0-3') });

new Promise((r) => {
  console.log('in p1');
  r();
})
.then(() => { console.log('1-0') })
.then(() => { console.log('1-1') })
.then(() => { console.log('1-2') })
.then(() => { console.log('1-3') });
// res: in p0 => in internal p => in p1 => 1 => 1-0 => 1-1 => 0-0 => 1-2 => 0-1  => 1-3 => 0-2 => 0-3