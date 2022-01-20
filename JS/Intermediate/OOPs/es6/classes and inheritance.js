// creating class
// this acts as self in python. It acts as an pointer
class Employee {
    constructor(name , exp , division){
        this.name = name,
        this.experience = exp , 
        this.division = division
    }
    slogan(){
        return `I am ${this.name} from ${this.division}`
    }
    show_experience(){
        return `My experience is ${this.experience} years`
    }

    // static mehtod(we cant use "this" in static methods)
    static add(a,b){
        return a+b
        }
}

// creating objects
let obj = new Employee()
console.log(obj)//undefined as no parameters passed

let obj1 = new Employee("a" , 2 , "3")
console.log(obj1)
console.log(obj1.slogan())
console.log(obj1.show_experience())
console.log(Employee.add(obj1.experience , obj1.experience))


//inheritance
class Programmer extends Employee{
    constructor(name , exp , division , language){
        super(name , exp , division)//calling constructor of super class / parent class
        this.language = language
    }
    favouritelang(){
        return this.language
    }
}

let arnab = new Programmer("arnab",3,"2","js")
console.log(arnab)
console.log(arnab.favouritelang())
console.log(arnab.show_experience()) // methods inherited from Employee.
console.log(arnab.slogan()) // methods inherited from Employee.

// All these methods like slogan show experience is present in prototype we can see in the browser window.