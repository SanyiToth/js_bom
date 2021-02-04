let textInput = document.getElementById("username")
let add = document.getElementById("btn")
let clrList = document.getElementById("clearbtn")
let list = document.getElementById("list1")
let feedback = document.getElementById("feedback")
let listArray = getStoredList()
let clearListItem=document.querySelectorAll(".del")


add.addEventListener("click", function (event) {
        event.preventDefault()
        if (textInput.value) {
            listArray.push(textInput.value)
            setStoredList(listArray)
            showStoredList()
        }
        textInput.value = ""
    }
)

clrList.addEventListener("click", function (event) {
    localStorage.clear()
})

clearListItem.addEventListener("click", function (event) {
    localStorage.clear()
})


function getStoredList() {
    if (localStorage.getItem('myitems') !== null) {
        return JSON.parse(localStorage.getItem('myitems'))
    } else {
        return []
    }
}

function setStoredList(list) {
    localStorage.setItem('myitems', JSON.stringify(list))
}


function showStoredList() {
    list.innerHTML = ""
    getStoredList().forEach(item => {
        list.innerHTML += `<li>${item}<button class="del ${getStoredList().indexOf(item)}">X</button></li>`
    })
}

showStoredList()









