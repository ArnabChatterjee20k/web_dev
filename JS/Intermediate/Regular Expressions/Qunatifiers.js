// quantifiers means matching with the quantity. It matches the quantity of the character

let regex;
const str ="arnab is arnab are arnab";
function show(){
    if(regex.test(str)){
        console.log(`${regex.source} is present`)
    }
    else{
        console.log(`${regex.source} not present`)
    }
}

// quantifiers
regex = /a{2}rnab/ // a must be present exactly twice in adjacent position
show() // arnab has only one a. No consecutive 2 a

regex = /a{0,2}rnab/ // a must be present betwen 0 to 2. 
show() 

