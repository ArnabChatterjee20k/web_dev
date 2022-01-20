function father(name,address){
    this.name = name,
    this.title = "c" ,
    this.address = address
}
father.prototype.call_title = function(){return this.title}

function son(name,address,quality){
    father.call(this,name,address)
    this.quality = quality
}

son.prototype = Object.create(father.prototype)
son.prototype.constructor = son

let a = new son("a","g","c")
console.log(a.title)
console.log(a.call_title())