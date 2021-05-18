function max(values, valueOf) {
    let max
    if (!valueOf) {
        for(const value of values) {
            if (value != null && (max < value || (max === undefined && value >= value))) {
                max = value
            }
        }
    } else {
        let index = -1
        for(let value of values) {
            if ((value = valueOf(value, ++index, values)) != null && (max < value || (max === undefined && value >= value))) {
                max = value
                console.log('value: ', value);
            }
        }
    }
    return max
}
// let arr = [2,undefined,null,NaN,0, 0.1, -3.2, , '88'] // 88
// let arr = ['999','44' , '88', '103', 998] // 999
let arr = ['44' , '88', '103', 998] // 998
// let arr = ['20' , '3'] // 3
// console.log(max(arr)); 

let arr2 = [
    {id: '9', n: 1},
    {id: '99', n: 1},
    {id: '8', n: 1},
    {id: 98, n: 1},
    {id: 123, n: 1},
]
console.log(max(arr2, (e, i, a) => {
    // console.log(e, i, a);
    return e.id
})); 
