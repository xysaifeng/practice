// part1

// async function async1() {
//   await async2()
//   console.log('async1 end');
// }
// async function async2() {
//   console.log('async2 end');
// }

// async1()

// setTimeout(()=> {
//   console.log('setTimeout');
// }, 0)

// new Promise(resolve => {
//   console.log('Promise');
//   resolve()
// }).then( _ => {
//   console.log('Promise1');
// }).then( _ => {
//   console.log('Promise2');
// })
// 执行结果：async2 end =>Promise=>async1 end => Promise1 => Promise2 => setTimeout
// 结论：执行宏任务，然后执行该宏任务产生的微任务，若微任务在执行过程中产生了新的微任务，则继续执行微任务，微任务执行完毕后，再回到宏任务中执行下一轮循环。

// part2

/*
console.log('start');

async function async1(a) {
  await async2()
  console.log('async1 end');
}
async function async2() {
  console.log('async2 end');
  return 123    
  return Promise.resolve('async2 end 1')
  return Promise.resolve('async2 end 1').then((res) => {
    console.log(res);
  })
}

async1()

setTimeout(()=> {
  console.log('setTimeout');
}, 0)

new Promise(resolve => {
  console.log('Promise');
  resolve()
}).then( _ => {
  console.log('Promise1');
}).then( _ => {
  console.log('Promise2');
})
console.log('end');
*/

// 执行结果：（await 后面直接跟一个变量（同步函数），比如：123）start =>async2 end =>Promise =>end =>async1 end =>Promise1 =>Promise2 =>setTimeout
// 执行结果：（await 后面是一个异步函数的调用）start =>async2 end =>Promise =>end =>async2 end 1 =>Promise1 =>Promise2 =>async1 end =>setTimeout

// 上面执行结果的差异，需要分2种情况来理解：
// 1.如果await后面直接跟的一个变量，比如：await:1,这种情况相当于直接把await 后面的代码注册为一个微任务，可以简单的理解为promise.then(await *下面* 的代码)。然后跳出async1函数，执行其他代码，当遇到promise函数时候，会注册promise.then()函数到微任务队列，注意此时微任务队列里面已经存在await后面的微任务。所以这种情况会先执行await后面的代码（async1 end），再执行async1函数后面注册的微任务代码(promise1 promise2)
// 2.如果await后面跟的是一个异步函数的调用，比如上面的代码。此时执行为await并不把await后面的代码注册到微任务队列中去，而是执行完await之后，直接跳出async1函数，执行其他代码。然后遇到promise函数时候，把promise.then()函数注册到微任务队列中。其它代码执行完毕后，需要回到async1函数去执行剩下的代码，然后把await后面的代码注册到微任务队列当中，注意此时微任务队列中是有之前注册的微任务的。所以这种情况会先执行async1函数之外的微任务（promise1, promise2），然后执行async1内注册的微任务（async1 end）。可以简单理解为，await后面的代码会在本轮循环的最后被执行。
// ---以上摘抄自公众号【前端Q】 《说说JS的事件循环机制》


// part3 https://github.com/dwqs/blog/issues/61
/*
console.log('script start');
setTimeout(function() {
  console.log('timeout1');
  new Promise(resolve => {
        console.log('promise2');
        resolve();
    }).then(function() {
        console.log('then2')
    })
}, 0);

new Promise(resolve => {
    console.log('promise1');
    setTimeout(() => console.log('timeout2'), 0);
    resolve();
}).then(function() {
    console.log('then1')
})
console.log('script end');
*/

// res: script start =>promise1  => script end=>then1=> timeout1=>promise2 => then2=>timeout2


// part4

// new Promise(resolve => {
//   resolve(10);
//   Promise.resolve(1).then(() => { // 结果并不会不一样啊
//     // t2
//     console.log(2)
//   });
//   console.log(4)
// }).then(t => {
//   // t1
//   console.log(t)
// });
// console.log(3);

// res: 4 3 2 10


// let thenable = {
//   then: function(resolve, reject) {
//     console.log(666);
//     resolve(42);
//   }
// };
// new Promise(resolve => {
//     resolve(1);

//     Promise.resolve(thenable).then((t) => { 
//     	// t2
//     	console.log(t)
//     });
//     console.log(4)
// }).then(t => {
// 	// t1
// 	console.log(t)
// });
// console.log(3);

// 可以看到thenable对象的then方法（then$$1变量）是在asap回调中执行的。asap方法是一个用于异步执行回调的函数。会在下一个事件循环中执行传入的回调函数。
// 当Promise.resolve处理thenable对象时，解析thenable对象这个操作会放到一个事件循环（微任务）中去执行，所以t1比t2先执行。

// res: 4 3 666 1 42


// part5
// demo
const thenable = {
  then: function (resolve, reject) {
    console.log('flag-0');
    resolve(1);
    console.log('flag-1');
  }
};

const p1 = Promise.resolve();
p1.then(() => {
  console.log(2);
});

console.log('flag-2');

const p2 = Promise.resolve(thenable);
p2.then((value) => {
  console.log(value);
});

setTimeout(() => {
  console.log('timeout');
}, 0);

const p3 = Promise.resolve();
p3.then(() => {
  console.log(3);
});

console.log('flag-3');

// res: flag-2 => flag-3 => 2 => flag-0 =>  flag-1=> 3 =>  1=>timeout 