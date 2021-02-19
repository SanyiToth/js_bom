let plus = document.getElementById("plus")
let minus = document.getElementById("minus")
let reset = document.getElementById("reset")
let delayReset = document.getElementById("delay")
let elDisplay = document.getElementById("counter")


plus.addEventListener("click", function () {
    elDisplay.value++;
})

minus.addEventListener("click", function () {
    elDisplay.value--;
})


reset.addEventListener("click", function () {
    elDisplay.value = 0
})

delayReset.addEventListener("click", function () {
    setTimeout(function () {
        elDisplay.value = 0
    }, 3000)
})