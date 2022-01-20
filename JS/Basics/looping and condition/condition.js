// Types of expression:----
// a===5 means vlaue and type both will be chcked
// a!==5 means valu and type not matching
// && means and
// || means or

// some extra condition checking features of js
// ternary operator --> condition ? exprIfTrue : exprIfFalse
// switch 

const vari = 34;
const age = 128;
const doesDrive = false;

// if condition
if (age != 19) {
    console.log('Age is not 19')
}

// if else
if (age !== 65) {
    console.log('Age is not 65')
} else {
    console.log('Age is not 19')
}

// if , else if and else ladder
if (vari) {
    console.log('Vari is defined');
} else if (typeof vari !== 'undefined') {
    console.log('Vari is defined');
} else {
    console.log('Vari is not defined');
}


// using or(||)
if (doesDrive || age > 18) {
    console.log("You can drive");
} else {
    console.log("You cannot drive");
}


//ternary operator 1st if condition is true and the other if the condition is false
console.log(age == 45 ? 'Age is 45' : 'Age is not 45');


// switch
switch (age) {
    case 18:
        console.log("You are 18");
        break;

    case 28:
        console.log("You are 28");
        break;

    case 38:
        console.log("You are 38");
        break;

    default:
        console.log("You are unknown age");
        break;
}

// if we use only if all conditons will be checked so time taken will be more.But if we use use else if then if one  condtion doesnot satisfies then only next comdyions will be checked