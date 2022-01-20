// To view all the changes view of them in the console window
function Employee(name,exp){
    this.name = name,
    this.exp = exp
}
// adding solgan to employee
Employee.prototype.slogan = function(){
    return `My name is ${this.name} `
}

let obj3 = new Employee("arnab",34)
// console.log(obj3.__proto__)
// console.log(obj3.__proto__)
// console.log(obj3.slogan())

// Now we have another object progrmmaer so we need another constructor Programmer but he is also an Employee. 
// So he will inherit some properties of Employee

function Programmer(name,exp,language){
    //inheriting from Employee
    Employee.call(this,name,exp); // call and "this" will help to asign the given the properties of Employee to this Progmmer object. As name and exp has been already present in Employe.
    // Through call we are simply calling the constructor of Employee
    this.language = language
}

let arnab = new Programmer("arnab",67,"python")
console.log(arnab)//we will see name exp which are inherited along with language(it's own property) are present.
console.log(arnab.__proto__) // but slogan is not inherited as Progammer constructor does not inheriting the protoype of Employee.

// Inheriting the prototype
Programmer.prototype = Object.create(Employee.prototype)

let jden = new Programmer("jden",67,"python")
console.log(jden.slogan())
// but still after inheriting the prototype it is not showing the constructor.

//Manually set the constructor
Programmer.prototype.constructor = Programmer;
let arnab2 = new Programmer("jden",67,"python")
console.log(arnab2)

