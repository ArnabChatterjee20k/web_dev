let a = "arnab";
if (a!=undefined){
    throw new Error("a is not undefined") //this will throw an error which is our custom made error.
}
else{
    console.log("this is undefined")
}