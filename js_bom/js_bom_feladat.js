//1

let openWindow = document.getElementById("open")
let closeWindow = document.getElementById("close")
let resizeWin = document.getElementById("resize")
let winIsopen = document.getElementById("windowisopen")
let down = document.getElementById("up")
let up = document.getElementById("down")
let scrollDown = document.getElementById("scrolldown")
let scrollUp = document.getElementById("scrollup")
let myWindow = null
openWindow.addEventListener("click", function () {
    myWindow = window.open("http://www.google.com", "", "resizable, width=400,height=400");
    // myWindow = window.open("https://docs.google.com/presentation/d/1jPvlb4I6xK5m457fwwK4VZHGjle57GU4mUtdwNelkBk/edit#slide=id.gb99126eea1_0_740", "", "width=400,height=400", "resizable")
})

closeWindow.addEventListener("click", function () {
    myWindow.close()
})

resizeWin.addEventListener("click", function () {
    myWindow.innerWidth(500)
    myWindow.focus();
})

winIsopen.addEventListener("click", function () {

    if ((myWindow == null) || (myWindow.closed)) {
        document.write('window closed')
    } else {
        document.write('Window opened')
    }

})


//2
up.addEventListener("click", function () {
    window.scrollTo(0, 0)
})

down.addEventListener("click", function () {
    window.scrollTo(0, 1000)
})

//3


scrollUp.addEventListener("click", function () {
    window.scrollBy(0, -20)
})

scrollDown.addEventListener("click", function () {
    window.scrollBy(0, 20)
})
