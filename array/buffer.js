// https://cloud.tencent.com/developer/article/2214649

/**
 * Node.js 目前支持的字符编码包括：
 ascii - 仅支持 7 位 ASCII 数据。如果设置去掉高位的话，这种编码是非常快的。
utf8 - 多字节编码的 Unicode 字符。许多网页和其他文档格式都使用 UTF-8 。
utf16le - 2 或 4 个字节，小字节序编码的 Unicode 字符。支持代理对（U+10000 至 U+10FFFF）。
ucs2 - utf16le 的别名。
base64 - Base64 编码。
latin1 - 一种把 Buffer 编码成一字节编码的字符串的方式。
binary - latin1 的别名。
hex - 将每个字节编码为两个十六进制字符。
*/

// const buf = Buffer.from('kxdang', 'ascii')
// console.log(buf.toString('hex'))
// console.log(buf.toString('base64'))
// console.log(buf.toString())
// console.log(buf.toString('utf8'))
// console.log(buf.toString('utf16le'))
// console.log(buf.toString('utf-8'))
// console.log(buf.toString('utf-16le'))
// console.log(buf.toString('latin1'))
// console.log(buf.toString('binary'))
// console.log(buf.toString('ascii'))
// console.log(buf.toString('ucs2'))

// const buf = Buffer.alloc(256)
// const len = buf.write('www.kxdang.com/topic/')
// console.log('写入字节数 : ' + len)
// console.log(buf.toString())

// const buf = Buffer.alloc(26)
// for (var i = 0; i < 26; i++) {
//   buf[i] = i + 97
// }
// console.log(buf.toString('ascii'))
// console.log(buf.toString('ascii', 0, 5)) //使用 'ascii' 编码, 并输出: abcde
// console.log(buf.toString('utf8', 0, 5)) // 使用 'utf8' 编码, 并输出: abcde
// console.log(buf.toString(undefined, 0, 5))

// const buf = Buffer.from([0x1, 0x2, 0x3, 0x4, 0x5])
// const json = JSON.stringify(buf)
// console.log(json)
// console.log(JSON.parse(json))
// console.log(Buffer.from(json))
// console.log(Buffer.from(json).toString())
// console.log(Buffer.from(json).toString('hex'))
// console.log(Buffer.from(json).toString('base64'))
// console.log(Buffer.from(json).toString('utf8'))
// console.log(
//   JSON.parse(json, (key, value) => {
//     console.log(key, '=v=: ', value)
//     return value && value.type === 'Buffer' ? Buffer.from(value.data) : value
//   }),
//   99
// )

// var buffer1 = Buffer.from('菜鸟教程')
// var buffer2 = Buffer.from('www.kxdang.com/topic/')
// var buffer3 = Buffer.concat([buffer1, buffer2], 12)
// console.log('buffer3 内容: ' + buffer3.toString())
// console.log(Buffer)
// console.log(Buffer.isBuffer(buffer3)) // true

// var buffer2 = Buffer.from('ABC')
// var buffer1 = Buffer.from('ABCD')
// var result = buffer1.compare(buffer2)
// // console.log('result: ', result)
// if (result < 0) {
//   console.log(buffer1 + ' 在 ' + buffer2 + '之前')
// } else if (result == 0) {
//   console.log(buffer1 + ' 与 ' + buffer2 + '相同')
// } else {
//   console.log(buffer1 + ' 在 ' + buffer2 + '之后')
// }

// var buf1 = Buffer.from('abcdefghijkl')
// var buf2 = Buffer.from('RUNOOB')
// buf2.copy(buf1, 2)
// console.log(buf1.toString())

// var buffer1 = Buffer.from('kxd的ang', 'utf-8') // 9
// var buffer1 = Buffer.from('kxd的ang', 'ascii') // 7
// var buffer1 = Buffer.from('kxd的ang', 'utf16le') // 14
var buffer1 = Buffer.from("kxd的ang", "latin1"); // 7
// 剪切缓冲区
var buffer2 = buffer1.slice(0, 2);
console.log("buffer2 content: " + buffer2.toString());
console.log(buffer1.length);
