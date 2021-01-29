console.log('================= index3.js');

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

// demo1:resolve(promise)
let resolvePromise = new Promise(resolve => {
  let resolvedPromise = Promise.resolve()

  resolve(resolvedPromise) // This Job uses the supplied thenable and its then method to resolve the given promise. This process must take place as a Job to ensure that the evaluation of the then method occurs after evaluation of any surrounding code has completed.(https://stackoverflow.com/questions/53894038/whats-the-difference-between-resolvethenable-and-resolvenon-thenable-object)
  // equal to follow
  // Promise.resolve().then(() => {
  //   console.log(1);
  //   Promise.resolve(resolvedPromise).then(()=> {
  //     console.log(2);
  //     resolve()
  //   })
  // })

  // equal to follow also(个人认为更好理解)
  // Promise.resolve().then(() => {
  //   console.log(1);
  //   resolvedPromise.then(()=> {
  //     console.log(2);
  //     resolve()
  //   })
  // })
})
resolvePromise.then(() => {
  console.log('resolvePromise resolved')
})

let resolvedPromiseThen = Promise.resolve().then(res => {
  console.log('promise1')
})
resolvedPromiseThen
  .then(() => {
    console.log('promise2')
  })
  .then(() => {
    console.log('promise3')
  })

  // res: promise1 =>  promise2=>resolvePromise resolved=> promise3

  // demo1-1:resolve(promise)
  /*
  let resolvePromise = new Promise(resolve => {
    let resolvedPromise = Promise.resolve()
    resolvedPromise.then(() => {
      console.log(1);
      resolve()
    })
  })
  resolvePromise.then(() => {
    console.log('resolvePromise resolved')
  })
  
  let resolvedPromiseThen = Promise.resolve().then(res => {
    console.log('promise1')
  })
  resolvedPromiseThen
    .then(() => {
      console.log('promise2')
    })
    .then(() => {
      console.log('promise3')
    })*/
  // 好理解
  // res: 1=》promise1 => resolvePromise resolved=》 promise2=> promise3


  // demo1-2:resolve(promise)
  /*
  let resolvePromise = new Promise(resolve => {
    let resolvedPromise = Promise.resolve()
    Promise.resolve().then(() => {
      console.log(1);
      resolvedPromise.then(() => {
        console.log(2);
        resolve()
      })
    })
  })
  resolvePromise.then(() => {
    console.log('resolvePromise resolved')
  })
  
  let resolvedPromiseThen = Promise.resolve().then(res => {
    console.log('promise1')
  })
  resolvedPromiseThen
    .then(() => {
      console.log('promise2')
    })
    .then(() => {
      console.log('promise3')
    })
  */
  // res: 1=>promise1 =>  2=>promise2=>resolvePromise resolved=> promise3


  // demo1-3:resolve(promise)
  /*
  let resolvePromise = new Promise(resolve => {
    let resolvedPromise = Promise.resolve()
    Promise.resolve().then(() => {
      console.log(1);
      Promise.resolve(resolvedPromise).then(() => {
        console.log(2);
        resolve()
      })
    })
  })
  resolvePromise.then(() => {
    console.log('resolvePromise resolved')
  })
  
  let resolvedPromiseThen = Promise.resolve().then(res => {
    console.log('promise1')
  })
  resolvedPromiseThen
    .then(() => {
      console.log('promise2')
    })
    .then(() => {
      console.log('promise3')
    })
    */
  //  于是也好理解了
  // res: 1=>promise1 =>  2=>promise2=>resolvePromise resolved=> promise3


  // Demo2: resolve('non-thenable-object')

  // let resolvePromise2 = new Promise(resolve => {
  //   resolve(12)
  // })
  // about equal to follow
  // let resolvePromise = Promise.resolve(12)
  // resolvePromise.then(() => {
  //   console.log('resolvePromise resolved')
  // })

  // let resolvedPromiseThen = Promise.resolve().then(res => {
  //   console.log('promise1')
  // })
  // resolvedPromiseThen
  //   .then(() => {
  //     console.log('promise2')
  //   })
  //   .then(() => {
  //     console.log('promise3')
  //   })

  // res:resolvePromise resolved => promise1 =>  promise2=> promise3


  // 理解微任务的执行顺序

  // let resolvedPromiseThen = Promise.resolve().then(res => {
  //   console.log('promise1')
  // })
  // resolvedPromiseThen
  //   .then(() => {
  //     console.log('promise2')
  //   })
  //   .then(() => {
  //     console.log('promise3')
  //   })
  // let resolvedPromiseThen2 = Promise.resolve().then(res => {
  //   console.log('promise11')
  // })
  // resolvedPromiseThen2
  //   .then(() => {
  //     console.log('promise22')
  //   })
  //   .then(() => {
  //     console.log('promise33')
  //   })

  // res:promise1 => promise11 => promise2 => promise22 => promise3 => promise33
  // 总结：当只有微任务时，微任务的执行也会按照注册顺序调用，及当宏任务（script）执行后，接着执行微任务，此时执行promise1,promise1又注册了一个then放入微任务队列中（promise2），执行下一个微任务promise11,promise11注册了一个then放入微任务队列中（promise22），此时第一轮微任务执行完了同时微任务队列也已经放入了两个微任务等待执行


  ; (() => {
    // console.log('--------in closer');
    // 1.Promise.resolve('non-thenable') and RESOLVE('non-thenable')
    // That's the where Promise.resolve('non-thenable') was transformed to
    // new Promise(resolve=>{
    //   resolve('non-thenable')
    // })
    // so
    // Promise.resolve('non-thenable') can be transformed into RESOLVE('non-thenable')

    // 2.RESOLVE(thenable)
    // demo1
    /*
    let resolveThenable = new Promise(resolve => {
      let thenable = {
        then: function(resolve, reject) {
          console.log('in thenable');
          resolve(42)
        }
      }
      // resolve(thenable)
      // equivalent to
      Promise.resolve().then(() => {
        console.log('---11');
        thenable.then(resolve)
      })
    })
    
    resolveThenable.then(() => {
      console.log('resolveThenable resolved')
    })

    let resolvedPromiseThen = Promise.resolve().then(res => {
      console.log('promise1')
    })
    resolvedPromiseThen
      .then(() => {
        console.log('promise2')
      })
      .then(() => {
        console.log('promise3')
      })
      */
    // res: in thenable =》promise1 =》resolveThenable resolved =》promise2 =》promise3
    // so This would make RESOLVE(thenable) works like
    // Promise.resolve().then(() => {
    //   thenable.then(resolve)
    // })

    // demo2, RESOLVE(resolvedPromise)
    // So, in the same way, RESOLVE(resolvedPromise) can be transformed
    // Promise.resolve().then(() => {
    //   resolvedPromise.then(resolve)
    // })
    // Though, in this case, the order between RESOLVE(thenable) and RESOLVE(promise) is different. Because thenable.then is a sync operation while resolvedPromise.then is an async operation. They are not the same then method.

    // So, here is our conclusion:
      // Both RESOLVE(thenable) and RESOLVE(promise) can be transformed into
      // new Promise((resolve, reject) => {
      //   Promise.resolve().then(() => {
      //     thenable.then(resolve)
      //   })
      // })


    // https://stackoverflow.com/questions/53894038/whats-the-difference-between-resolvethenable-and-resolvenon-thenable-object
    // 结论：
    // Promise.resolve('nonThenable') can be transformed into RESOLVE('nonThenable').They have the same effects.
    //   Promise.resolve(thenable) is different from RESOLVE(thenable).They have different effects.
    //     RESOLVE(thenable) and RESOLVE(promise) can be transformed into
    // new Promise((resolve, reject) => {
    //   Promise.resolve().then(() => {
    //     thenable.then(resolve)
    //   })
    // })
    // Promise.resolve(promise) === promise while Promise.resolve(nonPromiseThenable) can be transformed into
    // new Promise(resolve => {
    //   Promise.resolve().then(() => {
    //     nonPromiseThenable.then(resolve)
    //   })
    // })
  })()


