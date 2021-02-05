// const thenable = {
//   then: function(resolve, reject) {
//     console.log('flag-0');
//     resolve(1);
//     console.log('flag-1');
//   }
// };
// const p1 = Promise.resolve();
// p1.then(() => {
//   console.log(2);
// });
// console.log('flag-2');
// const p2 = Promise.resolve(thenable);
// p2.then((value) => {
//   console.log(value);
// });
// setTimeout(() => {
//   console.log('timeout');
// }, 0);
// const p3 = Promise.resolve();
// p3.then(() => {
//   console.log(3);
// });
// console.log('flag-3');

// res: flag-2 => flag-3 => 2 => flag-0 => flag-1 => 3  => 1 => timeout



async function async1() {
  console.log('async1 start') 
  await async2()
  console.log('async1 end') 
}
async function async2() {
  console.log('async2 start') 
  await async3()
  console.log('async2 end') 
}
async function async3() {
  console.log('async3 start') 
  await async4()
  console.log('async3 end')
}
async function async4() {
  console.log('async4') 
}
console.log('script start')
setTimeout(function () {
  console.log('settimeout')
})
async1()
new Promise(function (resolve) {
  console.log('promise1') 
  resolve()
}).then(function () {
  console.log('promise2') 
})
console.log('script end')

// res: script start => async1 start => async2 start =>async3 start=> async4 => promise1 => script end => async3 end => promise2  => async2 end => async1 end
