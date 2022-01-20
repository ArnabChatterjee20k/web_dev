console.log('this is tut 10');

if (1) {
    let i = 234;//due to this an error will occur after the first log statement as  let is creating a local scope variable.Same for const
    // var i= 62; but if we use var it will make error as var create global scope
    console.log(i)
}

console.log(i);//output will vary depend on variable insitialising method.If let or const used which creates local scope varibale inside function then it will give erro. But var which creates global scope variables even if used function.
// So better to use let or const to write clean code.

function ui(name) {
    let i = 9;
    console.log(i);
    return `This is a ${name} ui`;
}

console.log(ui("harry"), i)
// const mygreet = function(name, thank='Thank You'){
//     let msg = `Happy Birthday ${name} How I wish I could fly to you right now and be with you on this special day of yours. But remember, my good wishes are always there with you. ${thank}!`;
//     return msg;

// }


// let name = 'SkillF';
// let name2 ='Rohan';

// let val = mygreet(name, 'Thanks a lot'); // we can use this  variable as a function
// console.log(val);


// const myobj = {
//     name: "SkillF",
//     game: function(){ // making aninymous function without giving name of  the function
//         return "GTA";
//     }
// }
// console.log(myobj.game())

// arr = ['fruit', 'vegetable', 'furniture'];

// arr.forEach(function(element, index, array) {
//     console.log(element, index)
// });         
