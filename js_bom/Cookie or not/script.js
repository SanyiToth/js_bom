let username = document.getElementById("username")
let form = document.getElementById("form1")
let feedback = document.getElementById("feedback")
let time = new Date()
time.setSeconds(time.getSeconds() + 30)
console.log(time.toUTCString())


form.addEventListener("submit", function () {
    document.cookie = "username=" + username.value + ";" + "expires=" + time.toUTCString() + ";"
})

let name = document.cookie.split("=")
feedback.innerText = name[1]

