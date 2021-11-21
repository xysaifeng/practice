### 面试题

1. [2021 年 11 月大厂高频核心前端面试题总结，爆肝五万多字，面试必考 秒变大佬 ](https://www.jianshu.com/p/6746467c7958)

2.[使用 WebSockets 的 9 个应用场景](https://www.oschina.net/translate/9-killer-uses-for-websockets?comments&p=2)

3.缓存函数

```
const menoize = function(fn, context) {
  const cache = Object.create(null);
  context ??= this;
  return function (...key) {
    if(!cache[key]) {
      cache[key] = fn.apply(context, key)
    }
    return cache[key]
  }
}
```

4.柯里化函数 实现

```
const fn = (x,y,z,a) => x+y+z+a;
const curry = function(fn) {
  return function curriedFn(...args) {
    if(args.length < fn.length) {
      return (...args2) => {
        return curriedFn(...[...args, ...args2])
      }
    }
    return fn(...args)
  }
}
const myFn = cu`rry(fn);
// const r = myFn(1)(2)(3)(4)
const r = myFn(1)(2,3)(4)
console.log('r3 : ', r );
```

### 5.[前端性能优化 24 条建议(2020)](https://zhuanlan.zhihu.com/p/121056616)

### 6.new 一个新对象的过程，发生了什么？

1. 创建一个空对象
2. 设置新对象的**proto**属性，继承自构造函数的原型对象
3. 使用 apply 调用构造函数，并将其中 this 自动指向新对象（属性和方法被添加到 this 引用的对象中）
4. 如果构造函数中没有返回其它对象，那么返回 this，即创建的这个的新对象，否则，返回构造函数中返回的对象

> 手写 new 函数

```
function _new(func, ...args) {
  // 1. 创建空对象
  const o = {};
  // 2.空对象的_proto_指向了构造函数的prototype成员对象
  o.__proto__ = func.prototype;// 一二步合并就相当于 let obj = Object.create(func.prototype)
  // 3. 使用apply调用构造器函数，属性和方法被添加到 this 引用的对象中
  const result = func.apply(o, ...args);
  // 4. 确保 new 出来的是个对象
  return typeof result === 'object' ? result : obj
}
```

### 7.[JavaScript常见的六种继承方式](https://cloud.tencent.com/developer/article/1499708?from=article.detail.1851143)