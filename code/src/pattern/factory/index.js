class Product {
    constructor(name){
        this.name = name
    }
    init() {
        alert('init')
    }
}

class Creator{
    create(name){
        return new Product(name)
    }
}

const p1 = new Creator().create('p1')