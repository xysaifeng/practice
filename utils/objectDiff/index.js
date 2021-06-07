const objDiff = function(a, b, {deep = true, tip = true} = {}) {
    if (!isObject(a) || !isObject(b)) {
        console.error('[objDiff Error]: 参数类型应为Object/Array')
    }
    if (a === b) {
        console.log(111);
        return true
    }
    const k1 = Reflect.ownKeys(a)
    const k2 = Reflect.ownKeys(b)
    console.log(k1);
    console.log(k2);
    if (k1.length !== k2.length) {
        console.error('[objDiff Error]: length different', k1.length, k2.length)
        return false
    }
    if (k1.length === 0 && k2.length === 0) return true
    let diffKey = ''
    const justInK1 = k1.some(k => {
        if (!k2.includes(k)) {
            diffKey = k
            return true
        }
    })
    if (justInK1) {
        console.error('[objDiff Error]: key different in a: ', diffKey)
        return false
    }
    for(let k of k1) {
        if (a[k] !== b[k]) {
            if (Number.isNaN(a[k]) && Number.isNaN(b[k])) continue
            if (isObject(a[k])) {
                let r = objDiff(a[k],b[k])
                console.log('r: ', r);
                if (r) {
                    continue
                } else {
                    return false
                }
            }
            console.error('[objDiff Error]: value different in a: ', a[k], 'and in b: ', b[k])
            return false
        }
    }
    return true
}
let k = Symbol('k1')
let k2 = Symbol('k1')

let s = Symbol.for('same')
let s2 = Symbol.for('same')
// console.log(s === s2, '======same'); // true
// console.log('k.description: ', k.description); // k1

let a = {name: 'tom', age: 123,j: NaN,  like: null, love: undefined, height: {h: NaN, w: '53kg'}, /*[k]: 77*/ [s]: 99}
// let b = {name: 'tom', age: 12,sex: 1, j: NaN,  like: null, love: undefined, height: {h: 180, w: '53kg'}, [k2]: 77}
let b = {name: 'tom', age: 123, j: NaN,  like: null, love: undefined, height: {h: 180, w: '53kg'}, /*[k2]: 77*/ [s2]: 99}
console.log(Number.isNaN(a['height']), '-----098');
// console.log(a[k]); // 77
// console.log(b[k2]); // 77
// console.log(a[s]); // 999
// console.log(b[s]); // 99

let a1 = {}
let b1 = NaN
let a2 = {}
let b2 = {}
let res = objDiff(a, b)
console.log('res: ', res);

// var r = new RegExp('\d')
// console.log(typeof r);
// console.log(r instanceof RegExp);
// var d = new Date()
// console.log(d instanceof Date);
// console.log(typeof d);

function isObject(o) {
    return (typeof o === 'object' )&& !(o instanceof Date) && !(o instanceof RegExp)
}