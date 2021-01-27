console.log('================= index3.js');


// demo1:resolve(promise)

let resolvePromise = new Promise(resolve => {
  let resolvedPromise = Promise.resolve()
  console.log('resolvedPromise:======= ', resolvedPromise);
  // resolve(resolvedPromise)

  // resolvedPromise.then(() => {
  //   console.log(1);
  //   resolve()
  // })

  Promise.resolve().then(() => {
    console.log(1);
    Promise.resolve(resolvedPromise).then(()=> {
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

// res: promise1 =>  promise2=>resolvePromise resolved=> promise3


// Demo2: resolve('non-thenable-object')

// let resolvePromise2 = new Promise(resolve => {
//   resolve(12)
// })
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

  // res:resolvePromise resolved => promise1 =>  promise2=> promise3 => 

