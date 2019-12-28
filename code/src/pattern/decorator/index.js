// 装饰器模式

class Circle {
    draw() {
        console.log('')
    }
}

class Decorator {
    constructor(circle) {
        this.circle = circle
    }
    draw() {
        this.circle.draw()
        this.setRedBorder(this.circle)
    }
    setRedBorder(circle){

    }
}

let circle = new Circle()

let dec = new Decorator(circle)

circle.draw()

dec.draw()


// es7 装饰器模式

@testDec
class Demo {
    // xxx
}

function testDec(target) {
    target.isDec= true
}

alert(Demo.isDec)


///

function testDec2(isDec) {
    return function(target){
        target.isDec = isDec
    }
}

@testDec2(true)
class Demo2{

}

alert(Demo2.isDec)


// mixin
function mixins(...list) {
    return function(target){
        Object.assign(target.prototype, ...list)
    }
}

const Foo = {
    foo() {
        alert('foo')
    }
}

@mixins(Foo)
class MyClass() {

}

let obj = new MyClass()
obj.foo()


/// 装饰方法
function readonly(target, name, descriptor){
    descriptor.writable = false
    return descriptor
}

class Person{
    constructor() {
        this.f = 'a'
        this.l = 'b'
    }

    @readonly
    name(){
        return `${this.f} - ${this.l}`
    }
}

let p = new Person()
p.name()
p.name = 22


// 
function log(target, name, descriptor) {
    let oldValue = descriptor.oldValue

    descriptor.value = function(){
        console.log(name, arguments)
        return oldValue.apply(this.arguments)
    }

    return descriptor
}

class Math{
    @log
    add(a,b){
        return a+b
    }
}

let m = new Math()

Math.add(1,2)

// end es7