const changeText = function(ev) {
    ev.preventDefault()
    const items = document.querySelector('#items')
    const name = form.name.value

    const nameItem = document.createElement('li')
    nameItem.textContent = `Name: ${name}`

    list.appendChild(nameItem)
    array.push(name)

    items.appendChild(list)

    form.reset()
    form.name.focus()
}

const deleteItem = function() {
    const items = document.querySelector('#items')
    
    const nameItem = document.createElement('li')
    nameItem.textContent = `Name: ${array[array.length-1]}`
    list.removeChild(nameItem)
    array.pop()
    command.log(array)
}

const list = document.createElement('ul')
const array = []
const form = document.querySelector('form#listForm')
form.addEventListener('submit', changeText)
form.addEventListener('click', deleteItem)

