// node执行当前脚本和浏览器控制台里输出结果不一样
// https://developer.mozilla.org/zh-CN/docs/Web/API/Window/setImmediate
// console.log(0, Date.now());
// setTimeout(() => {
//     console.log(1, Date.now());
//     setTimeout(() => {
//         console.log(2, Date.now());
//         setTimeout(() => {
//             console.log(3, Date.now());
//             setTimeout(() => {
//                 console.log(4, Date.now());
//                 setTimeout(() => {
//                     console.log(5, Date.now());
//                     setTimeout(() => {
//                         console.log(6, Date.now());
//                     });
//                 });
//             });
//         });
//     });
// });


// setImmediate(()=> {
//     console.log('---------setImmediate 1');
// })

// console.log('------------1');
// console.log('------------2');
// console.log('------------3');
// console.log('------------4');

// setTimeout(() => {
//     console.log('---------setTimeout 1');
// }, 0);


setImmediate(()=> {
    console.log('---------setImmediate 1');
    setImmediate(()=> {
        console.log('---------setImmediate 2');
    })
    setTimeout(() => {
        console.log('---------setTimeout 1');
    }, 1);
})