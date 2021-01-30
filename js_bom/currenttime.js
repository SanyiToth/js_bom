function clock() {
    let date = new Date()
    let hour = date.getHours()
    let min = date.getMinutes()
    let sec = date.getSeconds()
    document.getElementById("time").innerText = hour + ":" + min + ":" + sec
}

setInterval(clock, 1000)

clock()


let setTime = document.getElementById("settime")
let display = document.getElementById("display")
let btn = document.getElementById("start")
let count

btn.addEventListener("click", function (event) {
    event.preventDefault()
    count = setTime.value;
})

let myVar = setInterval(function () {
    if (count >= 0) {
        display.value = count
        count--
    }
    else if (count < 0) {
        clearInterval(myVar)
        alert('Time is out')
    }
}, 1000)









