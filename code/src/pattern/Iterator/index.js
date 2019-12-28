class Iterator {
    constructor(container){
        this.list = container.list
        this.index = 0
    }
    next() {
        if (this.hasNext()){
            return this.list[this.index++]
        }
        return null
    }
    hasNext() {
        if (this.index  >= this.list.length) {
            return false
        }
        return true
    }
}

class Container {
    constructor(list) {
        this.list = this
    }
    // 生产遍历器
    getIterator() {
        return new Iterator(this)
    }
}

let arr = [1,2,3,4,5]
let container = new Container(list)
// 生产迭代器
let iterator = container.getIterator()

while(iterator.hasNext()){
    console.log(iterator.next())
}