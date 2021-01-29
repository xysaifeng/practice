// copy index7.js

// new Promise((resolve, reject) => {
//   console.log('1');
//   resolve();
// })
//   .then(() => {
//     console.log('2');
//     new Promise((resolve, reject) => {
//       console.log('3');
//       resolve();
//     })
//       .then(() => {
//         console.log('4');
//       })
//       .then(() => {
//         console.log('5');
//       })
//   })
//   .then(() => {
//     console.log('6');
//   })
//   .then(() => {
//     console.log('7');
//   })

// res: 1 2 3 4 6 5 7


// 增加一行代码 
// new Promise((resolve, reject) => {
//   console.log('1');
//   resolve();
// })
//   .then(() => {
//     console.log('2');
//     new Promise((resolve, reject) => {
//       console.log('3');
//       resolve();
//     })
//       .then(() => {
//         console.log('4');
//         return Promise.resolve()
//       }).then(() => {
//         console.log('5');
//       })
//   })
//   .then(() => {
//     console.log('6');
//   })
//   .then(() => {
//     console.log('7');
//   })
// res: 1 2 3 4 6  7 5


// 增加一行代码后相当于： 
// new Promise((resolve, reject) => {
//   console.log('1');
//   resolve();
// })
//   .then(() => {
//     console.log('2');
//     new Promise((resolve, reject) => {
//       console.log('3');
//       resolve();
//     })
//       .then(() => {
//         console.log('4');
//         // return Promise.resolve(4)

//         // equal to below 
//         // new Promise.resolve(resolve => {
//         //   resolve(Promise.resolve())
//         // }).then(() => {
//         //   console.log('5');
//         // })

//         // because resolve(thenable), so equal to below 
//         new Promise(resolve => {
//           // resolve(Promise.resolve())
//           Promise.resolve().then(() => {// job1
//             Promise.resolve().then(resolve)// job2
//           })
//         }).then(() => {
//           console.log('5');
//         })
//       })
//       // .then(() => {
//       //   console.log('5');
//       // })
//   })
//   .then(() => {
//     console.log('6');
//   })
//   .then(() => {
//     console.log('7');
//   })

// res: 1 2 3  4 6 (job1) 7 (job2) 5


// 进行演变1：
/*
new Promise((resolve, reject) => {
  console.log('1');
  resolve();
})
  .then(() => {
    console.log('2');
    new Promise((resolve, reject) => {
      console.log('3');
      resolve();
    })
      .then(() => {
        console.log('4');
        new Promise(resolve => {
          Promise.resolve().then(() => {// job1
            // console.log('job1');
            Promise.resolve().then(() => {
              // console.log('job2');
              resolve()
            })// job2
          })
        })
      }).then(() => {
        console.log('5');
      })
  })
  .then(() => {
    console.log('6');
  })
  .then(() => {
    console.log('7');
  })
  */
// res: 1 2 3 4 (job1) 6 5 7 (job2)


// 进行演变2：
/*
new Promise((resolve, reject) => {
  console.log('1');
  resolve();
})
  .then(() => {
    console.log('2');
    new Promise((resolve, reject) => {
      console.log('3');
      resolve();
    })
      .then(() => {
        console.log('4');
      }).then(() => {
        console.log('5');
      })
  })
  .then(() => {
    console.log('6');
    return Promise.resolve()
  })
  .then(() => {
    console.log('7');
  })
  */

// 演变2进行转换：
/*
new Promise((resolve, reject) => {
  console.log('1');
  resolve();
})
  .then(() => {
    console.log('2');
    new Promise((resolve, reject) => {
      console.log('3');
      resolve();
    })
      .then(() => {
        console.log('4');
      }).then(() => {
        console.log('5');
      })
  })
  .then(() => {
    console.log('6');
    // return Promise.resolve()
    new Promise(resolve => {
      // resolve(Promise.resolve())
      // equalt to below
      Promise.resolve().then(() => {// job1
        // console.log('job1');
        Promise.resolve().then(() => {// job2
          // console.log('job2');
          resolve()
        })
      })
    }).then(() => {
      console.log('7');
    })
  })
  // .then(() => {
  //   console.log('7');
  // })
*/
// res: 1 2 3 4 6 5 (job1) (job2) 7

// 演变3
new Promise((resolve, reject) => {
  console.log('1');
  resolve();
})
  .then(() => {
    console.log('2');
  })
  .then(() => {
    console.log('3');
    return Promise.resolve()
  })
  .then(() => {
    console.log('4');
  })
  .then(() => {
    console.log('5');
  })
  .then(() => {
    console.log('6');
  })

// 问题：演变3 到底会转换为演变4还是演变5
// 转换为演变4则会把4 5 6都放到内层的new Promise().then后面
// 转换为演变5则会把4都放到内层的new Promise().then后面，5 6还是在外层


// 演变3进行转换为演变4
// 演变4
/*
new Promise((resolve, reject) => {
  console.log('1');
  resolve();
})
  .then(() => {
    console.log('2');
  })
  .then(() => {
    console.log('3');
    // return Promise.resolve()
    // equal to below
    new Promise(resolve => {
      // resolve(Promise.resolve())
      // equal to below
      Promise.resolve().then(() => { // job1
        // console.log('job1');
        Promise.resolve().then(() => {// job2
          // console.log('job2');
          resolve()
        })
      })
    }).then(() => {
      console.log('4');
    })
      .then(() => {
        console.log('5');
      })
      .then(() => {
        console.log('6');
      })
  })
*/
// res: 1 2 3 (job1) (job2) 4 5 6


// 演变3进行转换为演变5
// 演变5
/*
new Promise((resolve, reject) => {
  console.log('1');
  resolve();
})
  .then(() => {
    console.log('2');
  })
  .then(() => {
    console.log('3');
    new Promise(resolve => {
      Promise.resolve().then(() => { // job1
        // console.log('job1');
        Promise.resolve().then(() => {// job2
          // console.log('job2');
          resolve()
        })
      })
    }).then(() => {
      console.log('4');
    })
  }).then(() => {
    console.log('5');
  })
  .then(() => {
    console.log('6');
  })
// res: 1 2 3 (job1) 5 (job2) 6 4
*/