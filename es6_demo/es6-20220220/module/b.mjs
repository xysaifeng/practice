
const a = 1
if (a) {
  // import('./a.js').then(d => {
  //   d.fn(23)
  // }).catch(e => console.log('e: ', e))


}

// const s = await import('./a.mjs')
const s = await import('../extention/x.mjs')
// s.fn(13)