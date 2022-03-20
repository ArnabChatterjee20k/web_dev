let container = document.querySelector(".container")

const dir = "images/"

// creating cards

// const data = fetch("details.json");
const img_src = dir+"img-";
for(i=0;i<=4;i++){
    fetch("/details.json").then((res)=>res.json()).then((res)=>{
    
        res.portfolio.map(({name,role},index)=>{
            let card = document.createElement("div")
        
            card.setAttribute("class",`card card-${index+1}`)
            card.setAttribute("id","neu")
            card.addEventListener("click",(e)=>{
                click(e)
            })
        
            let img = document.createElement("img")
            img.setAttribute("id","img")
            i=index+1
            img.src = img_src+i+".jpg"
            
            let p1 = `<p id="name">Name - ${name}</p>`
            let p2 = `<p id="role">Role - ${role}</p>`
            card.append(img)
            card.innerHTML+=p1
            card.innerHTML+=p2
            
    
            container.appendChild(card)
        })
    })

}

function click(e){
    const dialog = document.querySelector("dialog")

    const close = document.createElement("button")
    close.innerText="close"
    close.setAttribute("id","close")
    close.addEventListener("click",()=>{
        dialog.innerHTML=""
        dialog.removeAttribute("id","dialog")
        dialog.close()
    })
    dialog.setAttribute("id","dialog")
    
    const parent = e.target.innerHTML
    dialog.innerHTML = parent
    dialog.append(close)
    dialog.showModal()
}

