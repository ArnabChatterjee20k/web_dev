let regex;
// regex = / /; // give atleast one space between / and / to make it a 
// regular expression. if gap not given then // which is comments

const str ="arnab is arnab are arnab";

function show(){
    if(regex.test(str)){
        console.log(`${regex.source} is present`)
    }
    else{
        console.log(`${regex.source} not present`)
    }
}

// use [] to represents a character set. 
regex = /ar[a-z]ab/; //[a-z] means any character from a to z can be present  at that postion.
show()

regex = /ar[ru]ab/; // if r or u present
show()


// skip some characters with [^character].  ^  inside [] represents not.
regex = /ar[^ru]ab/; // match if not r or u present
show()


// multiple character set
regex = /[aA]rn[ab]b/
show()


regex = /[aA0-9]rn[ab]b/
show()

regex = /[aA0-9]rn[ab]b[0-100]/
show()