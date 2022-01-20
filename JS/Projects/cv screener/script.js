// let data = [];

async function collect_data(arr) {
    const url = "https://randomuser.me/api/"
    const promise = await fetch(url)
    return promise
}

// const data = [
//     { name: "arnab", age: 18, city: "kolkata", language: "Python", image: "https://randomuser.me/api/portraits/med/men/76.jpg" },
//     { name: "bittu", age: 28, city: "delhi", language: "JS", image: "https://randomuser.me/api/portraits/med/men/77.jpg" },
//     { name: "jden", age: 22, city: "mumbai", language: "java", image: "https://randomuser.me/api/portraits/med/men/78.jpg" },
//     { name: "jake", age: 23, city: "noida", language: "Python", image: "https://randomuser.me/api/portraits/med/men/79.jpg" },
// ]

let data = collect_data()
data.then(promise => { console.log(promise) }).catch(promise => { console.log(promise) })
    // cv Iterator
function cv_Iterator(profiles) {
    let next_index = 0;
    return {
        next: function() {
            return next_index < profiles.length ? { value: profiles[next_index++], done: false } : { done: true }
        }
    }
}
let candidate = cv_Iterator(data)
    // button listener for next button
const next = document.getElementById("next")

// cv()

next.addEventListener("click", cv)

function cv() {
    const cur_candidate = candidate.next().value;
    let image = document.getElementById("image");
    let profile = document.getElementById("profile");
    if (!cur_candidate) {
        window.location.reload()
    }
    image.innerHTML = `<img src="${cur_candidate.image}" class="img-fluid rounded-top rounded-bottom  ">`;
    profile.innerHTML = `<ul class="list-group my-3">
        <li class="list-group-item d-flex justify-content-between align-items-center active">
            Name : ${cur_candidate.name}
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-center">
        ${cur_candidate.age} years old
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-center disabled">
        Lives in ${cur_candidate.city}
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-center disabled">
        Favourite : ${cur_candidate.language}
        </li>
    </ul>`;
}