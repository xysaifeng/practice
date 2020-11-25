console.log('8888');

console.log(this);
console.log(self === this); // true

// 使用window会报错,eg:window.setTimeout

// console.log(WindowTimers,'WindowTimers'); // 报错了

setTimeout(() => {
    console.log('setTimeout');
}, 2000)

// throw new Error('error');


console.log(name, 'name=======');