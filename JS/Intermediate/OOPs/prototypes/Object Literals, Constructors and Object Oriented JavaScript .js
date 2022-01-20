//  object literal for creating objects
let car ={
    name : "maruti",
    topspeed : 89,
    run : function(){
        return "car is running"
    }
};
// console.log(car.run())
// this was object literal

// using constructors


// creating a constructor for cars
function GeneralCar(givenname,speed){
    this.name = givenname;
    this.topspeed = speed;
    this.run = function(){
        console.log(`${this.name} is running at ${this.topspeed}`)
    }
    this.analyze = function(){
        console.log(`${this.name} is slower than BMW`)
    }
}
car1 = new GeneralCar("Nissan",20)
console.log(car1)
car1.analyze()

car2 = new GeneralCar("alto",20)
console.log(car2)