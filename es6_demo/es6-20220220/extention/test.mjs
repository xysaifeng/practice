export const a = 1

export function foo() {
  console.log('foo');
}

const bar = () => { console.log('---bar'); }
export { bar as default }