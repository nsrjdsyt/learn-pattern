function each(data) {
    let iterator = data[Symbol.iterator]

    let item = {done: false}

    while(!item.done){
        item = iterator.next()
        if (!item.done){
            console.log(item.value)
        }
    }
}

let arr = [1,2,3]
each(arr)

let m = new Map()
m.set('1', 100)
m.set('2', 100)
each(m)


// 也可以使用 for of 遍历