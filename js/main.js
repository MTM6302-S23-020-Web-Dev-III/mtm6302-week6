console.log("JS file added")

const bodyTag = document.querySelector("body")

bodyTag.innerHTML += `
<section id="groceries">
  <h2>Groceries</h2>
  <ul id="groceryList"></ul>
</section>
`

let groceryItems = ["apples", "bananas", "milk", "eggs", "bread", "dog food"]
const groceryUl = document.getElementById("groceryList")

// for what coming from where
for (item of groceryItems) {
  groceryUl.insertAdjacentHTML("beforeend", `<li>${item}</li>`)
}

function addItem (newItem) {
  if (newItem !== "") {
    groceryUl.insertAdjacentHTML("afterbegin", `<li>${newItem}</li>`)
  }
}
// use the function form console addItem("chocolate")

// Adding HTML using createElement and appendChild

const section = document.createElement('section')
section.id = "todo"
section.innerHTML = "<h2>Todo List</h2>"

bodyTag.appendChild(section)