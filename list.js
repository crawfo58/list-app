const changeText = function(ev) {
    ev.preventDefault()
    const users = document.querySelector('#items')
    const name = form.name.value

    const list = document.createElement('ul')

    const nameItem = document.createElement('li')
    nameItem.textContent = `Name: ${name}`

    list.appendChild(nameItem)
    array.push(name)
    console.log(array)

    users.appendChild(list)

    form.reset()
    form.name.focus()
}
const array = []
const form = document.querySelector('form#listForm')
form.addEventListener('submit', changeText)