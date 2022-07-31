
let counter = 1
function bar(m) {
  counter++
  console.log('counter', counter);
  return counter
}

module.exports = {
  bar,
  counter,
  get counter2() {
    return counter
  }
} 