let star = {
    name: 'xx',
    age: 23,
    phone: '12345555'
}
// es6 proxy
let agent = new Proxy(star, {
    get: function(target, key){
        if (key === 'phone') {
            return '2222222'
        }

        return target[key]
    },
    set: function(target, key, val){
        if (key === 'customPrice'){
            if (val < 10000){
                throw new Error('xx')
            } else {
                target[key] = val
                return true
            }
        }
    }
})

console.log(agent.name)
console.log(agent.phone)

agent.customPrice = 13333333
console.log(agent.customPrice)