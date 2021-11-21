

// 0.1+0.2 !== 0.3
const a = 0.1, b = 0.2
// 1.将其先转换成整数，再相加之后转回小数 具体做法为先乘10相加后除以10.
// const x = (a*10+b*10)/10
// console.log('x: ', x); // 0.3

// 2.将其先转换成整数，再相加之后转回小数 具体做法为先乘10相加后除以10.
// const x = parseFloat((a+b).toFixed(1))
// console.log('x: ', x); // 0.3

// 3.使用es6新增的Number.EPSILON方法,用来设置“能够接受的误差范围”，这个方法表示js的最小精度，使用这个方法通常只是对0.1+0.2是否=0.3做判断，并不像前两种改变0.1+0.2的值。比如，误差范围设为 2 的-50 次方（即Number.EPSILON * Math.pow(2, 2)），即如果两个浮点数的差小于这个值，我们就认为这两个浮点数相等。(https://es6.ruanyifeng.com/#docs/number)
function equal(a, b) {
  return Math.abs(a - b) < (Number.EPSILON ? Number.EPSILON * (2**2) : Math.pow(2, -52))* (2**2) ;
  //此处使用了三目运算符对IE进行兼容，也可以使用if(Number.EPSILON)进行兼容判断。
}
/*不考虑兼容
function equal(a,b){
  return Math.abs(a-b)<Number.EPSILON;
  //相当于把比较的boolean值返回
}
*/
console.log(equal(0.1 + 0.2, 0.3)) // true
console.log(equal(1.1 + 1.3, 2.4)) // true


