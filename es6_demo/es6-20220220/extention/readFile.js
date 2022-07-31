var fs = require('fs');

var readFileThunk = thunkify(fs.readFile);

// var s = 's'
var gen = function* () {
  // console.time(s);
  var r1 = yield readFileThunk('es6_demo/es6-20220220/extention/a.txt');
  console.log(r1.toString());
  var r2 = yield readFileThunk('es6_demo/es6-20220220/extention/b.txt');
  console.log(r2.toString());
  console.log(log(r1.toString(), r2.toString()));
  // console.timeEnd(s);
};

var log = (a, b) => {
  console.log(a, b, '---log');
  return a + ' : ' + b
}

// 手动执行
// var g = gen()
// var r1 = g.next()
// r1.value(function(err, data) {
//   if(err) {
//     console.log('-----err: ', err);
//     throw err
//   }
//   console.log(data, '----data');
//   var r2 = g.next(data)
//   r2.value(function(err2, data2) {
//     if(err2) throw err2
//     console.log(data2, '----data2');
//     console.log(' g.next(data2): ',  );
//     var r3 = g.next(data2)
//     console.log(r3.value, '--r3');
//   })
// })

// 自动执行
// console.log(run(gen), '---99');


function run(fn) {
  var g = fn()
  // debugger
  function next(err, data) {
    // console.log(data, '----data');
    var r = g.next(data)
    // console.log('r: ', r);
    if (r.done) {
      // console.log(r.value,'----vvv');
      return r.value
    }
    // debugger
    return r.value(next)
  }
  return next()
}

function thunkify(fn) {
  return function () {
    // console.log(arguments,'--arguments');
    var args = new Array(arguments.length)
    // console.log('args: ', args);
    var ctx = this
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i]
    }
    return function (done) {
      var called
      args.push(function () {
        if (called) return
        called = true
        // console.log(arguments, 'arguments2');
        done.apply(null, arguments)
      })

      try {
        fn.apply(ctx, args)
      } catch (error) {
        done(error)
      }
    }
  }
}





// 基于 Promise 对象的自动执行
var gen2 = function* () {
  var r1 = yield readFile('es6_demo/es6-20220220/extention/a.txt');
  var r2 = yield readFile('es6_demo/es6-20220220/extention/b.txt');
  var r = ''
  console.log(r = log(r1.toString(), r2.toString()));
  return r
};

const readFile = function (fileName) {
  return new Promise((resolve, reject) => {
    fs.readFile(fileName, function (err, data) {
      if (err) return reject(err)
      resolve(data)
    })
  })
}

// 手动执行
// var g2 = gen2()
// var res = g2.next()
// console.log('res: ', res);
// res.value.then(r => {
//   console.log(r, '---r');
//   res = g2.next(r)
//   res.value.then(r2 => {
//     console.log(r2, '----r2');
//     console.log('g2.next(r2): ', g2.next(r2));
//   })
// })

// 自动执行
function run2(fn) {
  var g = fn()
  function next(data) {
    var r = g.next(data)
    if (r.done) return r.value
    return r.value.then(next)
  }
  return next()
}

function spawn(genF){
  return new Promise((resolve, reject) => {
    var gen = genF()
    function step(nextF) {
      let next
      try {
        next = nextF()
      } catch (error) {
        return reject(error)
      }
      if(next.done) return resolve(next.value)
      
      Promise.resolve(next.value).then(v => {
        step(function() { return gen.next(v) })
      }, function(e) {
        step(function() { return gen.throw(e) })
      })
    }
    step(function() { return gen.next(undefined) })
  })
}


// console.log(, '----999');
// run2(gen2).then(s => console.log(s, '----sss'))

// co(gen2).then(s => console.log(s, '-----sss3'))

spawn(gen2).then(s => console.log(s, '-----sss4')) // aaa : bbb


function co(gen) {
  var ctx = this

  // 2.在返回的 Promise 对象里面，co 先检查参数gen是否为 Generator 函数。如果是，就执行该函数，得到一个内部指针对象；
  // 如果不是就返回，并将 Promise 对象的状态改为resolved。
  return new Promise((resolve, reject) => {
    if (typeof gen === 'function') gen = gen.call(ctx)
    if (!gen || typeof gen.next !== 'function') return resolve(gen)

    // 3.接着，co 将 Generator 函数的内部指针对象的next方法，包装成onFulfilled函数。这主要是为了能够捕捉抛出的错误。
    onFulfilled()

    function onFulfilled(res) {
      var ret
      try {
        ret = gen.next(res)
      } catch (e) {
        return reject(e)
      }
      // 4.最后，就是关键的next函数，它会反复调用自身。
      next(ret)
    }

    function onRejected(err) {
      var ret;
      try {
        ret = gen.throw(err)
      } catch (e) {
        reject(e)
      }
      next(ret)
    }

    function next(ret) {
      if (ret.done) return resolve(ret.value)
      var value = toPromise.call(ctx, ret.value)
      if (value && isPromise(value)) return value.then(onFulfilled, onRejected)
      return onRejected(
        new TypeError(
          'You may only yield a function, promise, generator, array, or object,'
          + 'but the following object was passed: "'
          + String(ret.value)
          + '"'
        )
      )
    }
    // function next(ret) {
    //   if(ret.done) return resolve(ret.value)
    //   return ret.value.then(onFulfilled)
    // }

  })
}

/**
 * convert a `yield`ed value into a promise
 * @param {Mixed} obj
 * @return {Promise}
*/
function toPromise(obj) {
  if (!obj) return obj
  if (isPromise(obj)) {
    return obj
  }
  if (isGeneratorFunction(obj) || isGenerator(obj)) return co.call(this, obj)
  if ('function' === typeof obj) return thunkToPromise.call(this, obj)
  if (Array.isArray(obj)) return arrayToPromise.call(this, obj)
  if (isObject(obj)) return objectToPromise.call(this, obj)
  return obj
}

var slice = Array.prototype.slice
/**
 * convert a thunk to a promise
 * @param {Function} fn
 * @return {Promise}
*/
function thunkToPromise(fn) {
  var ctx = this
  return new Promise((resolve, reject) => {
    fn.call(ctx, function (err, res) {
      if (err) return reject(err)
      if (arguments.length > 2) res = slice.call(arguments, 1)
      resolve(res)
    })
  })
}


/**
  * convert an array of `yieldable` to a promise
  * Use `Promise.all` internally
  * @param {Array} obj
  * @return {Promise}
 */
function arrayToPromise(obj) {
  return Promise.all(obj.map(toPromise, this))
}

/**
  * convert an object of `yieldable` to a promise
  * Use `Promise.all` internally
  * @param {Object} obj
  * @return {Promise}
 */
function objectToPromise(obj) {
  // 基于obj的妈构建一个新对象实例
  var results = new obj.constructor()
  var keys = Object.keys(obj)
  var promises = []
  for (let i = 0; i < keys.length; i++) {
    var key = keys[i]
    var promise = toPromise.call(this, obj[key])
    if (promise && isPromise(promise)) defer(promise, key)
    else results[key] = obj[key]
  }

  return Promise.all(promises).then(function () {
    return results
  })

  function defer(promise, key) {
    // predefine the key in results
    results[key] = undefined
    promises.push(promise.then(function (res) {
      results[key] = res
    }))
  }
}

/**
 *  check if `obj` is a generator
 * @param {Mixed} obj
 * @return {Boolean}
 *
*/
function isGenerator(obj) {
  return typeof obj.next === 'function' && typeof obj.throw === 'function'
}

/**
 *  check if `obj` is a generator function
 * @param {Mixed} obj
 * @return {Boolean}
 *
*/
function isGeneratorFunction(obj) {
  var constructor = obj.constructor
  if (!constructor) return false
  if ('GeneratorFunction' === constructor.name || 'GeneratorFunction' === constructor.displayName) return true
  return isGenerator(constructor.prototype)
}

/**
 * check if `obj` is a promise
 * @param {Object} obj
 * @return {Boolean}
*/
function isPromise(obj) {
  return typeof obj.then === 'function'
}

/**
 * check for plain object
 * @param {Mixed} val
 * @return {Boolean}
*/
function isObject(val) {
  return Object === val.constructor
}

function co2(gen) {
  var ctx = this

  // 2.在返回的 Promise 对象里面，co 先检查参数gen是否为 Generator 函数。如果是，就执行该函数，得到一个内部指针对象；
  // 如果不是就返回，并将 Promise 对象的状态改为resolved。
  return new Promise((resolve, reject) => {
    if (typeof gen === 'function') gen = gen.call(ctx)
    if (!gen || typeof gen.next !== 'function') return resolve(gen)

    // 3.接着，co 将 Generator 函数的内部指针对象的next方法，包装成onFulfilled函数。这主要是为了能够捕捉抛出的错误。
    onFulfilled()

    function onFulfilled(res) {
      var ret
      try {
        ret = gen.next(res)
      } catch (e) {
        return reject(e)
      }
      // 4.最后，就是关键的next函数，它会反复调用自身。
      next(ret)
    }

    function next(ret) {
      if (ret.done) return resolve(ret.value)
      return ret.value.then(onFulfilled)
    }

  })
}


let stream = fs.createReadStream('es6_demo/es6-20220220/extention/c.txt')
let cssCount = 0;
// co(function*() {
//   while(true) {
//     const res = yield Promise.race([
//       new Promise(resolve => stream.once('data', function(d) {
//         console.log(d, '---d');
//         resolve(d)
//       })),
//       new Promise(resolve => stream.once('end', function(d2) {
//         console.log(d2, '---d2');
//         resolve(d2)
//       })),
//       new Promise((resolve, reject) => stream.once('error', reject))
//     ]);
//     console.log(res, '===res');
//     if (!res) {
//       break;
//     }
//     stream.removeAllListeners('data');
//     stream.removeAllListeners('end');
//     stream.removeAllListeners('error');
//     cssCount += (res.toString().match(/css/ig) || []).length;
//   }
//   console.log('count:', cssCount); // count: 2
//   return cssCount
// }).then(d => {
//   console.log(d, '=='); // 2
// }).catch(e => {
//   console.log(e, '---e');
// })