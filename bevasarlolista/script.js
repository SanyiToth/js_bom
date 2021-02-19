let textInput = document.getElementById("username")
let add = document.getElementById("btn")
let clrList = document.getElementById("clearbtn")
let list = document.getElementById("list1")
let feedback = document.getElementById("feedback")
let listArray = getStoredList()

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

function delItem(event) {
    const li = event.target.parentElement
    const id = li.dataset.id
    const filteredList = getStoredList().filter((item, i) => {
        return i.toString() !== id
    })
    setStoredList(filteredList)
    listArray = getStoredList()
    showStoredList()
}

function showStoredList() {
    list.innerHTML = ""
    getStoredList().forEach((item, index) => {

        let todo = `<li data-id=${index}>${item}<span class="delbtn" onclick="delItem(event)">X</span></li>`
        list.innerHTML += todo
    })
}


showStoredList()









