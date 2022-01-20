let regex;

let str = "----&&&&&&sdf9   995689986rnabararn. 233nab"

function show(){
    if(regex.test(str)){
        console.log(`${regex.source} is present`)
        console.log(regex.exec(str))
    }
    else{
        console.log(`${regex.source} not present`)
    }
}

// character classes 


//  \w(small w)  ----> word character(underscore(_) or alphanumeric). If nothing mentioned it will match an alphanumeric char or _. It will search the word characters along with the expression provided. 
//  if \w given then it will search for a word character.
// if \wa then it will search for a word where a is present at last. In this string na. It searched for n and atlast a present
// continuous chacters will get matched
regex = /\warn/ // means arn will be present from 2nd character.
show() // rarn--> it's matching this. arn is present from 2nd character. Basically it matches a word 



// --------------------------------------------



// \w+ ---> matching multiple word characters
regex = /\w+23/ 
show() // rnabararn23. minus present at beginning getting neglected as its not word character



// --------------------------------------------


// \W(capitalW) ----> matching non word characters. continuous chacters will get matched
regex = /\W/
show() // here minus getting identified




// ----------------------------------------------
// \W+ ----> mutliple non word characters
regex=/\W+/



// ---------------------------------------------
// \d ----> digits

regex = /\d 99/ //here space and 99 will get matched
show()

// ----------------------------------------------
// \d+ ---> more than one digit.
regex =/\d+9/ // 9 is present at last
show()


//----------------------------------------------
// \D -----> non digit
regex=/\D99/ // a non digit with 99
show() // first it will match space along with 99


//-----------------------------------------------
// \D+ ---------> more than one non digit
regex=/\D+9/
show() //----&&&&&&sdf9



//---------------------------------------------
// \s -----> space or gap between characteres
regex = /\s9/
show()



//---------------------------------------------
// \s+ -----> more than one space or gap between characteres
regex = /\s+9/
show() //   9


//---------------------------------------------
// \S -----> non white space
regex = /\S/ 
show() // -



//---------------------------------------------
// \S+ -----> more than non white space
regex = /\S+/ 
show() // -----&&&&&&sdf9.



// ----------------------------------------------
// \b ----> word boundary. Ending word(having space or full stop.)
regex = /arn\b/ // arn is present at last before . It's ending
show()