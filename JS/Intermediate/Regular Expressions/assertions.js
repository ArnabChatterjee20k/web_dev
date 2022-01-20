let regex;

let str = "AARArNaAn"

function show(){
    if(regex.test(str)){
        console.log(`${regex.source} is present`)
        console.log(regex.exec(str))
    }
    else{
        console.log(`${regex.source} not present`)
    }
}

regex = /A(?=R)/ // matches A if R is only present after A
show()
regex = /A(?!R)/ // matches A if R is not present after A
show()