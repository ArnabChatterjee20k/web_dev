// we use paranthesis for grouping( () )
// it will take the value inside () as a whole. See the value as a group
// (ar){2} means ar exactly apper twice.

let regex;
const str ="arnabarnab";
function show(){
    if(regex.test(str)){
        console.log(`${regex.source} is present`)
    }
    else{
        console.log(`${regex.source} not present`)
    }
}

regex = /(arnab){2}/
show()

//using multiple groups
regex = /(arnab){2}([0-9]r){3}/ 
show()