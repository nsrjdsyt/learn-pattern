class Car {
    constructor(number, name){
        this.name = name
        this.number = number
    }
}

class Kuaiche extends Car {
    constructor(number, name){
        super(number, name)
        this.price = 1
    }
}

class Zhuanche extends Car {
    constructor(number, name){
        super(number, name)
        this.price = 2
    }
}

class Trip {
    constructor(car) {
        this.car = car
    }
    start(){
        console.log(this.car.number,this.car.name)
    }
    end(){
        console.log(this.car.price*5)
    }
}

let car = new Kuaiche(100, 'benci')
let trip = new Trip(car)
trip.start()
trip.end()