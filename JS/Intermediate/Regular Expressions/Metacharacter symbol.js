let regex;

let str = "arnab is arnab are arnab but he is arnab thus he is arnab. so he is best"

function show(){
    if(regex.test(str)){
        console.log(`${regex.source} is present`)
    }
    else{
        console.log(`${regex.source} not present`)
    }
}

// starstwith(^)--------> using carat(^). THis means the expression will match if string starts with the given the given expression
regex = /^a/ // means starts with a. 
show()


// -------------------------------------------------

// endswith($) ------------>THis means the expression will match if string ends with the given the given expression
regex = /est/ // means ends with est. 
show()



// --------------------------------------

// inbetween(.)----------> THis means the expression will match if string if their may be any character in place of dot(.) and rest part of the expression remains same. Exactly one character will match
regex = /b.t/; // in the str but present. b and t present. and single charcter u also present. If we do /ar.b/ but it will not match as we have arnab. so after ar and before b na present which of 2 characters
show()



// ---------------------------------------------------------

// star(*) ----> matching 0 and more than one characters we have to use *. Means in ar.b if no character is present in beetween ar and b it will be matched. Also more than 1 character then also match. solving the problem of dot(.). It will not bother about the character getting placed in between them or not. It will just see the characters before and after * present or not.
regex = /ar*b/;
show()


// ---------------------------------------------------

// optional(? after onecharacter)----> For example ar?. Here r is optional means r may be present or not present.
regex = /arnabb?/ // here last b is optional. arnab should be present but another b is optional
show()

//----------------------------------------------------
// escape(backslash(\)) -----> useful when we want to actually match * or other metacharacters in the string. 
regex = /ar\*nab/; //it will match if actually ar*nab present. * is not metacharacter. It is literally star
show()

