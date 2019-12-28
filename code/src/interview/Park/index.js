class Car {
    constructor(num) {
        this.num = num
    }
}

class Camera {
    shot(car) {
        return {
            num: car.num,
            inTime: new Date().now()
        }
    }
}
class Screen {
    show(car, inTime) {
        console.log(`${car.num}`)
        console.log(Date.now() - inTime)
    }
}
class Park {
    constructor(floors) {
        this.floors = floors || []
        this.camera = new Camera()
        this.screen = new Screen()
        this.carList = {}
    }
    in(car) {
        // 通过摄像头获取信息
        const info = this.camera.shot(car)
        // 停到某个停车位
        const i = parseInt(Math.random() * 100 % 100)
        const place = this.floors[0].places[i]

        place.in()
        info.place = place
        this.carList[car.num] = info
    }
    out(car){
        const info = this.carList[car.num]
        const place = info.place

        place.out()
        this.screen.show(car, info.inTime)
        delete this.carList[car.num]
    }
    emptyNum() {
        this.floors.map(floor => {
            console.log(`${floor.index} ${floor.emptyPlaceNum()}`)
        }).join('\n')
    }
}

class Floor {
    constructor(index, places){
        this.index = index
        this.places = places || []
    }
    emptyPlaceNum(){
        let num = 0

        this.places.forEach(p => {
            if (p.empty) {
                num += 1
            }
        })

        return num
    }
}

class Place {
    constructor(){
        this.empty = true
    }

    in() {
        this.empty = false
    }
    out() {
        this.empty = true
    }
}


// 测试

const floors = []

for (let i = 0; i < 3; i++) {
    const places = [];
    for(let j = 0; j< 100; j++) {
        places[j] = new Place()
    }
    floors[i] = new Floor(i+1, places)
}

const park = new Park(floors)

const car1 = new Car(100)
const car2 = new Car(200)
const car3 = new Car(300)

console.log(park.emptyNum())
park.in(car1)
console.log(park.emptyNum())
park.in(car2)
console.log(park.emptyNum())
park.out(car1)
console.log(park.emptyNum())
park.out(car2)
console.log(park.emptyNum())
park.in(car3)
console.log(park.emptyNum())
park.out(car3)
console.log(park.emptyNum())