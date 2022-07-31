const m = require('./c.js')

console.log(m.counter);
console.log(m.counter2);
// console.log('m: ', m.bar(233));// fn: 233
m.bar()
console.log(m.counter);
console.log(m.counter2);