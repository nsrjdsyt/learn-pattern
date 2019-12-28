class State {
    constructor(color){
        this.color = color
    }
    handle(context) {
        console.log(`truen to ${this.color}`)
        // 设置状态
        context.setState(this)
    }
}

// 主体
class Context{
    constructor(){
        this.state = null
    }
    //获取状态
    getState(){
        return this.state
    }
    setSate(state){
        this.state=state
    }
}

let context = new Context()
let green = new State('green')
let yellow = new State('yellow')
let red = new State('red')

green.handle(context)
console.log(context.getState())

yellow.handle(context)
console.log(context.getState())