(() => {
    let btn = document.getElementById('btn');
    let handler = function(...rest) {
        console.log(rest, '-----rest');
        console.log('btn clicked');
    }

    // 节流函数允许一个函数在规定的时间内只执行一次。
    // 它和防抖动最大的区别就是，节流函数不管事件触发有多频繁，都会保证在规定时间内一定会执行一次真正的事件处理函数。
    // 比如在页面的无限加载场景下，我们需要用户在滚动页面时，每隔一段时间发一次 Ajax 请求，而不是在用户停下滚动页面操作时才去请求数据。这样的场景，就适合用节流阀技术来实现。
    // 主要有两种实现方法：
    // 1.时间戳
    // 2.定时器

    // 1.时间戳实现
    let throttle = function(fn, wait = 1000) {
        let start = + new Date();
        return function(...args) {
            let current = + new Date();
            console.log(start, current);
            if(current - start >= wait) {
                fn.apply(this, args);
                start = + new Date();
            }
        }
    }
    // 当高频事件触发时，第一次应该会立即执行（给事件绑定函数与真正触发事件的间隔如果大于delay的话），而后再怎么频繁触发事件，也都是会每delay秒才执行一次。而当最后一次事件触发完毕后，事件也不会再被执行了。

    // 2.定时器戳实现
    // 当触发事件的时候，我们设置一个定时器，再触发事件的时候，如果定时器存在，就不执行；直到delay秒后，定时器执行执行函数，清空定时器，这样就可以设置下个定时器
    let throttle2 = function(fn, wait = 1000) {
        let timer = null;
        return function(...args) {
            console.log(timer, '---timer');
            if(!timer) {
                timer = setTimeout(() => {
                    fn.apply(this, args);
                    timer = null;
                }, wait);
            }
        }
    }
    // 当第一次触发事件时，肯定不会立即执行函数，而是在delay秒后才执行。 
    // 之后连续不断触发事件，也会每delay秒执行一次。 
    // 当最后一次停止触发后，由于定时器的delay延迟，可能还会执行一次函数。

    // 3.可以综合使用时间戳与定时器，完成一个事件触发时立即执行，触发完毕还能执行一次的节流函数
    let throttle3 = function(fn, wait = 1000) {
        let start = + new Date(), timer = null;
        return function(...args) {
            let current = + new Date();
            let flag = current - start >= wait;// >=0
            timer && clearTimeout(timer);
            if(flag) {
                fn.apply(this, args);
                start = + new Date();
            } else {
                timer = setTimeout(() => {
                    fn.apply(this, args);
                }, wait)
            }
        }
    }

    // copy from underscore and modified
    function throttle (func, wait, options = {}) {
    let timeout = null
    let previous = 0
    const { leading, trailing } = options
    return function () {
      // let now = Date.now()
      let now = getCurrentTimestamp()
      if (!previous && leading === false) {
        previous = now
      }
      let remaining = wait - (now - previous)
      let context = this
      let args = arguments
      if (remaining <= 0 || remaining > wait) {
        if (timeout) {
          window.clearTimeout(timeout)
          timeout = null
        }
        previous = now
        func.apply(context, args)
      } else if (!timeout && trailing !== false) {
        timeout = window.setTimeout(() => {
          previous = leading === false ? 0 : getCurrentTimestamp() /* Date.now() */
          timeout = null
          func.apply(context, args)
        }, remaining)
      }
    }
  }
    // btn.onclick = throttle3(handler, 1000).bind({name:'tom'},88,77)
})();
