let btn = document.getElementById("btn")
let place = document.getElementById("place")

function get_data(){
    place.innerText = "Loading...."
    const url = " http://127.0.0.1:5000/"
    fetch(url).then(res => res.text()).then(data => {place.innerText =data })
}
btn.onclick = get_data