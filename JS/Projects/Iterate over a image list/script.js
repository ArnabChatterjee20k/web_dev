let img = new Array()
for (let i = 0; i <= 10; i++) {
    img.push(`img-${i}`) // making an array of 10 images
}
console.log(img)

function iterator(arr) {
    let length = arr.length
    let cur_index = 0
    return {
        next: function() {
            if (cur_index != length) {
                return {
                    value: arr[cur_index++],
                    done: false
                }
            } else { return { done: true } }
        }
    }
}


let iterate = iterator(img);

while (true) {
    let cur_img = iterate.next()
    if (cur_img.done) {
        break;
    }
    console.log(cur_img.value)
}