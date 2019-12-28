class Adaptee {
    specificRq() {
        return '1'
    }
}

class Target {
    constructor(){
        this.adaptee = new Adaptee()
    }
    request () {
        let info = this.adaptee.specificRq()
        return `${info}-2`
    }
}

let target = new Target()

target.request()