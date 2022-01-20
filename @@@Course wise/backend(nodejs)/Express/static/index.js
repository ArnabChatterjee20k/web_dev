console.log("hi");

let btn=document.querySelector("button#submit")
console.log(btn);
btn.addEventListener("click",function(e){
    let name=document.getElementById("name").value.trim();
    let address=document.getElementById("address").value.trim();
    let message=document.getElementById("message").value.trim();
    // console.log(name.trim(),address,message.trim())
    
    if (name.length==0|| address.length==0 || message.length==0){
        e.preventDefault()
        // console.log(name.trim(),address,message.trim())
        alert("plz  fill the form completely")
        
    }

    
})