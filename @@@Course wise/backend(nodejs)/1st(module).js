const fs=require("fs");

// reading file
let text=fs.readFileSync('data.txt',"utf-8");
console.log("The content of the file is");
console.log(text);

// replacing content of the file
text=text.replace("content","replaced");//here it will replace the content present at first.If content present at index 0 and 4 then it replace at 0
fs.writeFileSync("data.txt",text);
