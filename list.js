const changeText = function(ev) {
    ev.preventDefault()
    const users = document.querySelector('#items')
    const name = form.name.value

    const list = document.createElement('ul')

    const nameItem = document.createElement('li')
    nameItem.textContent = `Name: ${name}`

    list.appendChild(nameItem)

    users.appendChild(list)

    form.reset()
    form.userName.focus()
}
const form = document.querySelector('form#listForm')
form.addEventListener('submit', changeText)