const html_box= (n)=>{
    // returning a box
    let box = document.createElement("div")
    box.setAttribute("class","box")
    box.innerHTML = `<h5>${n}</h5>`
    return box
}
const frame_track = document.querySelector(".frame_track")
let frame_track_width = 0
// box styles(in px)
const width = 400;
const margin = 2*16 // 2rem
let total_box_width=0;
let i;
for(i=0;i<=8;i++){
    frame_track.appendChild(html_box(i+1))
    // width of the track
    frame_track_width+=width+margin
}
let box_we_want_to_slide = i-1
total_box_width = (i-1)*margin + width*box_we_want_to_slide

console.log(total_box_width)
let next = document.getElementById("next")
let prev = document.getElementById("prev")

function slide(){
    let pos = 0;
    let track_change = 400;
        next.onclick = ()=>{
            if(pos>=-total_box_width){
                pos-=track_change
                frame_track.style.transform = `translateX(${pos}px)`
            }
        }
        prev.onclick = ()=>{
            if(pos<0){
                pos+=track_change
                frame_track.style.transform = `translateX(${pos}px)`
            }
        }
        return [pos,track_change]
}

slide()