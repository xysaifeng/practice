
// module.foo()
let output;
async function main() {
  // const dynamic = await import('./test.js');
  const dynamic = await import('./test.mjs');
  // console.log('dynamic: ', dynamic.a);
  output = dynamic.a
}
main();
// console.log('output', output);
// export { output };

// import { foo } from './test.mjs'
import * as module from './test.mjs'

// module.foo = function () { } // error：模块整体加载所在的那个对象，应该是可以静态分析的，所以不允许运行时改变


import bar from './test.mjs'
bar()