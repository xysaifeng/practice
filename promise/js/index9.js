// https://github.com/dwqs/blog/issues/61

console.log('script start');

setTimeout(function() {
  console.log('timeout1');
  new Promise(resolve => {
        console.log('promise2');
        resolve();
    }).then(function() {
        console.log('then2')
    })
}, 10);

new Promise(resolve => {
    console.log('promise1');
    setTimeout(() => console.log('timeout2'), 10);
    resolve();
}).then(function() {
    console.log('then1')
})

console.log('script end');

// res: script start => promise1 => script end => then1 => timeout1 => promise2 => then2 => timeout2 
