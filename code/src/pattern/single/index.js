class SingleObject {
    login() {

    }
}

SingleObject.getInstance = (function() {
    let instance
    return function() {
        if (!instance) {
            return new SingleObject()
        }

        return instance
    } 
})()

let obj1 = SingleObject.getInstance()