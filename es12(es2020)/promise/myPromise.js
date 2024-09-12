// 避免hard code
const FULFILLED = 'fulfilled'
const REJECTED = 'rejected'
const PENDING = 'pending'

class MyPromise {
  #result = undefined
  #state = PENDING
  #handlers = []

  constructor(executor) {

    this.onResolvedCallbacks = [];
    this.onRejectedCallbacks = [];
    const resolve = (value) => {
      this.#changeState(FULFILLED, value)
    }

    const reject = (reason) => {
      this.#changeState(REJECTED, reason)
    }

    try { // 只能捕捉同步错误
      executor(resolve, reject)
    } catch (error) {
      reject(error)
    }
  }

  #changeState(state, result) {
    if (this.#state !== PENDING) return;
    this.#state = state
    this.#result = result

    this.#run()
  }

  then(onFullfilled, onRejected) {
    return new MyPromise((resolve, reject) => {
      this.#handlers.push({
        onFullfilled,
        onRejected,
        resolve,
        reject
      })
      this.#run()

      // if (this.#state === FULFILLED) {
      //   onFullfilled(this.#result)
      // } else if (this.#state === REJECTED) {
      //   onRejected(this.#result)
      // } else {
      //   // pending
      // }
    })
  }

  // 满足Promise A+规范
  // 一个对象或者函数有then属性并且then是函数
  #isPromiseLike(obj) {
    if (obj !== null && (typeof obj === 'object' || typeof obj === 'function')) {
      const then = obj.then
      return typeof then === 'function'
    }
    return false
  }

  #runMicroTask(func) { // 将func放到微队列中,分环境 node环境和浏览器环境
    if (typeof process === 'object' && typeof process.nextTick === 'function') {
      process.nextTick(func)
    } else if (typeof MutationObserver === 'function') {
      const textNode = document.createTextNode('1')
      const ob = new MutationObserver(func)
      // 观察某一个元素有没有变化，只要变化了就会运行func，并且将func放入微队列运行
      ob.observe(textNode, { characterData: true /* 观察文本节点字符的变化，变化了就执行回调函数*/ })
      textNode.data = '2'
    } else {
      setTimeout(func, 0) // 脱离了环境给的API，我们无法用标准库里的代码来模拟微队列的
    }

  }

  #runOne(cb, resolve, reject) { // 运行then的回调是放在微队列中的
    this.#runMicroTask(() => {
      if (typeof cb === 'function') {
        try {
          const data = cb(this.#result)
          if (this.#isPromiseLike(data)) {
            data.then(resolve, reject)
          } else {
            resolve(data)
          }
        } catch (error) {
          reject(error)
        }
      } else {
        // 值穿透处理
        const settled = this.#state === FULFILLED ? resolve : reject
        settled(this.#result)
      }
    })
  }

  #run() { // 专门负责执行#handle保存的属性
    if (this.#state === PENDING) return;
    while (this.#handlers.length) {
      const { onFullfilled, onRejected, resolve, reject } = this.#handlers.shift()
      if (this.#state === FULFILLED) {
        this.#runOne(onFullfilled, resolve, reject)
        // if (typeof (onFullfilled) === 'function') {
        //   try {
        //     const data = onFullfilled(this.#result)
        //     resolve(data)
        //   } catch (error) {
        //     reject(error)
        //   }
        // } else {
        //   resolve(this.#result)
        // }
      } else {
        this.#runOne(onRejected, resolve, reject)
        // if (typeof (onRejected) === 'function') {
        //   try {
        //     const data = onRejected(this.#result)
        //     resolve(data)
        //   } catch (error) {
        //     reject(error)
        //   }
        // } else {
        //   reject(this.#result)
        // }
      }
    }
  }

  catch(onRejected) {
    return this.then(null, onRejected)
  }

  finally(onFinally) {
    return this.then(data => {
      console.log(1);
      onFinally()
      return data
      // return MyPromise.resolve(cb()).then(() => data)
    }, err => {
      console.log(2);
      onFinally()
      throw err
      // return MyPromise.resolve(cb()).then(() => { throw err })
    })
  }

  static resolve(value) {
    if (value instanceof MyPromise) return value
    //  new MyPromise((resolve, reject) => {
    //   if (this.#isPromiseLike(value)) { } // 在静态方法中不能调用实例#isPromiseLike方法，否则会报错
    // })
    let _resolve, _reject
    const p = new MyPromise((resolve, reject) => {
      _resolve = resolve
      _reject = reject
    })
    if (p.#isPromiseLike(value)) {
      value.then(_resolve, _reject)
    } else {
      _resolve(value)
    }

    return p
  }

  static reject(reason) {
    return new MyPromise((resolve, reject) => reject(reason))
  }
}


// catch
// new MyPromise((resolve, reject) => {
//   reject(123)
// }).catch(err => {
//   console.log(err, 88);
// })

// finally
// new MyPromise((resolve, reject) => {
//   resolve(444)
//   reject(123)
// }).finally(() => {
//   console.log('finally', 88);
// }).then(res => {
//   console.log(res, 'lll');
// })

// resolve
// const p1 = new MyPromise(resolve => resolve(123))
// console.log(MyPromise.resolve(p1) === p1) // true

// const p1 = new Promise(resolve => resolve(123))
// MyPromise.resolve(p1).then(e => console.log(e, 666))

// reject
const p1 = new MyPromise(resolve => resolve(123))
MyPromise.reject(p1).then(e => console.log(e, 666)).catch(e => console.log(e, 888))
MyPromise.reject(11).then(e => console.log(e, 666)).catch(e => console.log(e, 888))



const p = new MyPromise((resolve, reject) => {
  // resolve('resolve123')
  // reject('reject234')
  // throw new Error('error')
  setTimeout(() => {
    // throw new Error('2error')
    // resolve('ok')
    reject('err')
  }, 2000);
});
// console.log(p);

// then的回调参数有三种情况
// 情况一 then的回调不是函数 => 值穿透

// p.then(444, err => {
//   console.log('p 1失败:', err);
// }).then(res => {
//   console.log(res, '----');
// }, err => {
//   console.log('p 2失败:', err);
// })

// p.then(res => {
//   console.log(res, '---1-');
// }, null).then(res => {
//   console.log(res, '---2-');
// }, err => {
//   console.log('p 2失败:', err);
// })

// 情况二 then的回调是函数 => 调用该函数
// p.then(res => {
//   console.log(res, '--res1--');
//   throw new Error('error1')
//   return 666
// }, err => {
//   console.log('p 1失败:', err);
// }).then(res => {
//   console.log(res, '--res2--');
// }, err => {
//   console.log('p 2失败:', err);
// })

// p.then(res => {
//   console.log(res, '--res1--');
//   return 666
// }, err => {
//   console.log('p 1失败:', err);
//   // throw new Error('error2')
//   return err
// }).then(res => {
//   console.log(res, '--res2--');
// }, err => {
//   console.log('p 2失败:', err);
// })

// 情况三 then的回调是函数的返回结果是Promise => 看返回Promise的结果


// p.then(res => {
//   console.log('p 1完成:', res);
// }, err => {
//   console.log('p 1失败:', err);
// })
// p.then(res => {
//   console.log('p 2完成:', res);
// },)
// p.then(res => {
//   console.log('p 3完成:', res);
// }, err => {
//   console.log('p 3失败:', err);
// })
// p.then(res => {
//   console.log('p 4完成:', res);
// }, err => {
//   console.log('p 4失败:', err);
// })

// test1
// const pr = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('ok')
//   }, 1000);
// })

// pr.then(res => {
//   console.log(res);
//   return new MyPromise(resolve => {
//     setTimeout(() => {
//       resolve(10)
//     }, 2000);
//   })
// }).then(data => {
//   console.log('ok', data);
// })

// test2
// function delay(duration = 1000) {
//   return new MyPromise(resolve => {
//     setTimeout(resolve, duration);
//   })
// }

// async function test() {
//   console.log('start');
//   await delay(2000)
//   console.log('end');
// }
// test()


// test3
// setTimeout(() => {
//   console.log(1);
// }, 0);
// new MyPromise(resolve => resolve(2)).then(data => console.log(data))
// console.log(3);