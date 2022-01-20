const main = document.getElementById("lighthouse-bg");
const images = document.querySelector(".images")
const tiles = document.querySelectorAll(".images img");
tiles.forEach(function (a, i) {
    tiles[i].onclick = function () {
        if (!main.classList.contains("lighthouse")) {
            main.style.visibility = "visible"
            main.appendChild(this)
            main.classList.add("lighthouse")
        }
        else {
            main.removeChild(this)
            main.classList.remove("lighthouse")
            // gallery.appendChild(this)
            // console.log(gallery_child[])
            // console.log(gallery.childNodes[i])
            images.insertBefore(this, images.children[i])
        }
    }
}
)
// things can be made more accurate if we separate a div for storing images
// about for in loop. If we have used then when we print inside the function then it returns us the item word. This is because at one time only it is iterating over the whole list and assigns the onclick function. But in for each we are passing i as a argument so it is getting stored and when we  print it we get the argument