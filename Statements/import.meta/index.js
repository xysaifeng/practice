

console.log(import.meta.url);
const imgUrl = new URL('./img.png', import.meta.url)
console.log('imgUrl: ', imgUrl);