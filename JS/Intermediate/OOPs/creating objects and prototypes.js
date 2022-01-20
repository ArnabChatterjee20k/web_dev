const proto = {
    slogan:function(){return "Progrmmaer"},
    role:function(){return "dev"},
    change_name:function(new_name){this.name = new_name}
}

// We can create object in this way
const obj = Object.create(proto)
obj.name = "arnab";
obj.role ="db"
obj.change_name("ddd")
// console.log(obj)

// console.log(obj.__proto__)

// we can also create object this way
const obj1 = Object.create(proto, {
    name:{value:"arnab",writable:true},//writable will allow us to change the value in future otherwise we cant use changename defined previously

    role:{value:"des"}
})
//run this in broswer to see the result
// console.log(obj1)
obj1.change_name("annn")
// console.log(obj1)
