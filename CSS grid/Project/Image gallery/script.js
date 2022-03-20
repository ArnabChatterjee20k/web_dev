// for(let i=1;i<=5;i++){

// let card = document.createElement("div")

// card.setAttribute("class",`card card-${i}`)
// card.setAttribute("id","neu")

// let img = document.createElement("img")
// img.src = img_src+i+".jpg"

// card.append(img)

// container.appendChild(card)
// }


function first_way() {
    let container = document.querySelector(".container")


    const dir = "images/"

    // creating cards

    // const data = fetch("details.json");
    const img_src = dir + "img-";
    fetch("/details.json").then((res) => res.json()).then((res) => {

        res.portfolio.map(({ name, role }, index) => {
            let card = document.createElement("div")

            card.setAttribute("class", `card card-${index + 1}`)
            card.setAttribute("id", "neu")

            let img = document.createElement("img")

            i = index + 1
            img.src = img_src + i + ".jpg"

            let p1 = `<p>Name - ${name}</p>`
            let p2 = `<p>Role - ${role}</p>`
            card.append(img)
            card.innerHTML += p1
            card.innerHTML += p2


            container.appendChild(card)
        })
    })

}

function second_way() {
    let container = document.querySelector(".container")


    const dir = "images/"

    // creating cards

    // const data = fetch("details.json");
    const img_src = dir + "img-";

    const req_data = fetch("/details.json").then((res) => res.json())

    Promise.resolve(req_data).then((res) => {
        res.portfolio.map(({ name, role }, index) => {
            let card = document.createElement("div")

            card.setAttribute("class", `card card-${index + 1}`)
            card.setAttribute("id", "neu")

            let img = document.createElement("img")

            i = index + 1
            img.src = img_src + i + ".jpg"

            let p1 = `<p>Name - ${name}</p>`
            let p2 = `<p>Role - ${role}</p>`
            card.append(img)
            card.innerHTML += p1
            card.innerHTML += p2


            container.appendChild(card)
        })
    })
}

first_way()
second_way()


