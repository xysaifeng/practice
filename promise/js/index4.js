// async function async1() {
//   console.log("a");
//   await async2();
//   console.log("b");
// }
// async function async2() {
//   console.log('c');
// }
// async1();
// new Promise(function (resolve) {
//   console.log("d");
//   resolve();
// }).then(function () {
//   console.log("e");
// });
// res: a c d b e

// about在 chrome 70 会被解析成
// async function async1() {
//   console.log("a");
//   new Promise(resolve => {
//     resolve(async2())
//   }).then(() => {
//     console.log('b');
//   })
// }
// async function async2() {
//   console.log('c');
// }
// async1();
// new Promise(function (resolve) {
//   console.log("d");
//   resolve();
// }).then(function () {
//   console.log("e");
// });

// res: a c d e b

// 因为 async2() 返回 promise, 所以进一步转化就是：
// async function async1() {
//   console.log("a");
//   new Promise(resolve => {
//     console.log('----1');
//     Promise.resolve().then(() => {
//       async2().then(resolve)
//     })
//   }).then(() => {
//     console.log('b');
//   })
// }
// async function async2() {
//   console.log('c');
// }
// async1();
// new Promise(function (resolve) {
//   console.log("d");
//   resolve();
// }).then(function () {
//   console.log("e");
// });
// res: a d c e b


// 而在 chrome canary 73 会被解析成
async function async1() {
  console.log("a");

  // new Promise(resolve => {
  //   // resolve(async2())
  //   // works as below
  //   Promise.resolve().then(() => {
  //     async2().then(resolve)
  //   })
  // }).then(() => {
  //   console.log('b');
  // })

  Promise.resolve(async2()).then(() => {
    console.log('b');
  })
}
async function async2() {
  console.log('c');
}
async1();
new Promise(function (resolve) {
  console.log("d");
  resolve();
}).then(function () {
  console.log("e");
});

// res: a d c e b