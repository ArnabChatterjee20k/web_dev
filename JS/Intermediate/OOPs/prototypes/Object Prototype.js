function MyDetails(name , job , dob){
    this.name = name;
    this.job =job ;
    this.dob=dob ;
}
console.log(MyDetails.prototype)//run in the browser cosole to see the prototype values
console.log(MyDetails.hasOwnProperty("name"))

let a = new MyDetails("a","b")
console.log(a.__proto__)

