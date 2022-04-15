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
let i;
for(i=0;i<=8;i++){
    frame_track.appendChild(html_box(i+1))
    // width of the track
    frame_track_width+=width+margin // actual width of the track and it is of no use.
}

let box_we_want_to_slide = i-2// if i is the number of box and we want to stop the slider when i-2 box completely invisible and (i-1) box partially became invisible
let total_box_width = 2*(i-1)*margin + width*box_we_want_to_slide// excluding the left side margin of the first box and right margin of the last box

console.log(total_box_width)
let next = document.getElementById("next")// previous means track will move to the left(-X axis)
let prev = document.getElementById("prev")// next means track will move to the right(+X axis)

function slide(){
    let pos = 0;// postion_tracker of the track
    let track_change = 400;
        next.onclick = ()=>{
            /** We will stop the slider when the i-2 box has completely become invisible and (i-1) box partially became invisible */
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