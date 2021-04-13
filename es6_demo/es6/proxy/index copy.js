var obj = {
    s: 1,
    a: {
        e: 12
    },
    b: {
        c: {
            d: 9
        }
    },
    // ee: [1,2,3],
    // hh: [7,8,9],
    bnfs: [, , {
        addr: [
            {
                arr1: [
                    { arr2: 12 }
                ]
            }
        ]
    }],
    // ee: [1, 2, 3],
    // hh: [7, 8, 9],
}


var arr = [], oldArr = [];
let isArr = false;
function get(obj, newObj, arr) {
    let p = getKey(obj, arr)
    for (let k in p) {
        let c = p[k]

        if (typeof c === 'object') {
            get(c, newObj, arr)
        } else {
            let ks = arr.join('.')
            newObj[ks] = c
            if (isArr) {
                arr.pop()
            } else {
                arr.length = 0
            }

        }
    }
    function getKey(obj, arr) {
        return new Proxy(obj, {
            get(target, key, receiver) {
                arr.push(key)
                if (Array.isArray(target)) {
                    if (oldArr !== target) {
                        isArr = true
                    } else {
                        isArr = false
                    }
                    oldArr = target
                }
                return Reflect.get(target, key, receiver)
            }
        })
    }
    return newObj
}
let newObj = {}
console.log('get(obj): ', get(obj, newObj, arr));