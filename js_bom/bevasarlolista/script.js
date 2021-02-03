let newItem = document.getElementById("username")
let addBtn = document.getElementById("btn")
let clrBtn = document.getElementById("clearbtn")
let list = document.getElementById("list1")
let feedback = document.getElementById("feedback")

addBtn.addEventListener("click", function (event) {
        event.preventDefault()
        let newText = newItem.value
        let newLi = document.createElement("li")
        newLi.textContent = newText
        if (newText !== "") {
            list.prepend(newLi)
            store()
        }
        if (list.innerText === "") {
            console.log(localStorage.getItem('myitems'))
        }
        newItem.value = ''
        feedback.textContent = "A lista hossza: " + lengthOfTodoList()
    }
)

function store() {
    window.localStorage.myitems = list.innerHTML;
}

localStorage.getItem()

function lengthOfTodoList() {
    return window.localStorage.myitems.split("><").length
}

clrBtn.addEventListener("click", function (event) {
    window.localStorage.clear()
})





