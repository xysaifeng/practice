// 1.逻辑运算符合赋值表达式，新特性结合了逻辑运算符（&&,??,||）和赋值表达式，形成新的复合赋值运算符。
// 已有的复合赋值运算符有：
// 操作运算符：+= -+ *= /= **=
// 位操作运算符：&= ^= |=
// 按位运算符： <<= >>= >>>=

// 现有的运算符，其工作方式可以如此理解：
// 表达式： a op= b
// 等同于： a = a op b

// 逻辑运算符和其他复合赋值运算符工作方式不同
// 表达式： a op= b
// 等同于： a = a op (a = b)

// a ||= b;
// a = a || (a = b)

// a &&= b
// a = a && (a = b)

// a ??= b
// a = a ?? (a = b)

// 为什么不再是跟以前的运算公式a = a op b一样呢？而是采用a = a op (a = b).因为后者 当且仅当 a的值为false的时候才计算赋值，只有在必要的时候才执行分配，而前者表达式 总是 执行赋值操作。

// var a = 1, b = 12;
// a &&= b;
// console.log(a); // 12

// var a = NaN || '' || false || undefined || null , b = 3;
// a ||= b;
// console.log(a); // 3

var a = null || undefined, b = 12;
a ??= b;
console.log(a); // 12

// ??= 可用来补充/初始化缺失的属性
const pages = [
    {
        title: '秘书',
        path: '/'
    },
    {
        path: '/other'
    }
];
for(let page of pages) {
    // old1
    // page.title =  page.title ?? 'ds'
    // old2
    // page.title = page.title ? page.title : 'dss'
    // new 
    page.title ??= '默认标题'
}

console.log(pages);

// 总结：
// &&=：当LHS值存在时，将RHS变量赋值给LHS
// ||=：当LHS值不存在时，将RHS变量赋值给LHS
// ??=：当LHS值为null或undefined时，将RHS变量赋值给LHS

var a = [[0,1,2,3,4,5,6,7,8,9],[0,1,2,3,4,5,6,7,8,9],[0,1,2,3,4,5,6,7,8,9],[0,1,2,3,4,5,6,7,8,9],[0,1,2,3,4,5,6,7,8,9],[0,1,2,3,4,5,6,7,8,9],[0,1,2,3,4,5,6,7,8,9],[0,1,2,3,4,5,6,7,8,9],[0,1,2,3,4,5,6,7,8,9],[0,1,2,3,4,5,6,7,8,9]]
for (var i = 0, j = 9; i <= 9; i++, j--)
  document.write("a[" + i + "][" + j + "] = " + a[i][j] +'<br />');