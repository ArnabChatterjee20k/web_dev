// to see which flag has been assigned-
// console.log(reg.flags)

// i = case insensisative flag

let reg = /arnab/i;
let str = "Arnab is arnab are ARnaB"
let result = reg.exec(str)
console.log(result)

result = reg.exec(str)
console.log(result)

result = reg.exec(str)
if(result){
    console.log(result)
    
    console.log(result.index) // if result null then .index and .input will give error
    console.log(result.input)
}
console.log(str.match(reg))

// to see what is present in the result
// for(i in result){
//     console.log(i)
// }

// we can use the null return value which is returned when no possible matches present. We can use while loop and using use that null to exit from the loop
