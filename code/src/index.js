// class Per {
//     constructor(name){
//         this.name = name
//     }
// }

// const p = new Per('tom')

// alert(p.name)


function loadImg(src) {
    let promise = new Promise(function (resolve,reject) {
        let img = document.createElement('img')

        img.onload = function () {
            resolve(img)
        }
        img.onerror = function () {
            reject(img)
        }

        img.src = src
    })

    return promise
}

let src = ''
let result = loadImg(src)
result.then(function (img) {
    return img
}).then(function(img) {

}).catch(function(ex) {
    
})
