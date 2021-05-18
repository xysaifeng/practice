// 炜哥的code
let demo = {
    name: 'tom',
    age: {
        y: 19
    },
    "bnfs":[
        null,//0  null
        null,
        {
            "addr":[
                {
                    "ar1":[
                        {
                            "ar11":[
                                {
                                    "ar112":[
                                        {
                                            "ar1121":"10000"
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        null,
    ],
}


const isObject = (val)=> val !==null && typeof val ==='object' && !(val instanceof Date) && !(val instanceof RegExp)
const isArray = Array.isArray

function getPath(obj) {
    let paths = [],key,value
    while (isObject(obj) && ([key,value] = Object.entries(obj).pop())) {
        if(isArray(obj)){
            key = obj.findIndex(Boolean)
        }
        // let [key,value] = Object.entries(obj)[0]
        paths.push(isArray(obj) ? +key:key)
        obj = isArray(obj) ? obj[key]: value
    }
    return paths
}

// console.log(JSON.stringify(getPath(demo)));
var paths = ["bnfs",2,"addr",0,"ar1",0,"ar11",0,"ar112",0,"ar1121"]

function getFieldValue(path,obj) {
    let res
    while (isObject(obj) && (res = obj[path.shift()])) { //1 、res ====>>>  obj["bnfs"]
        obj = res
    }
    return res
}

// console.log(getFieldValue(paths));

let aa = {
    a:1,
    b:{
        c:2
    },
    d:[1,'2',3],
    x:[8,9,7],
    e:{
        f:{
            g:'5'
        }
    },
    arr: [
        2,
        {id: 1},
        3
    ]
}

function getFlat(obj) {
    let res = {}
    let objArr = Object.entries(obj)
    while (objArr.length>0 && ([key,values]=objArr.pop())) {
        let path = getPath(values) // [f,g] ===> f.g
        if(isArray(values)){
            values.forEach((v,i) => {
                res[`${key}.${i}`] = v
                // res[`${key}[${i}]`] = v
            });
        }else{
            res[[key,...path].join('.')] = getFieldValue([key,...path],obj)
        }
    }
    return res
}

console.log(getFlat(aa));

























