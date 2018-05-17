const app = {
  init(selectors) {
    this.items = []
    this.max = 0
    this.list = document.querySelector(selectors.listSelector)

    document
        .querySelector(selectors.formSelector)
        .addEventListener('submit', ev => {
            ev.preventDefault()
            this.handleSubmit(ev)
        })
  },

  renderListItem(item) {
    const item2 = document.createElement('li')
    item2.textContent = item.name
    return item2
  }, 

  handleSubmit(ev) {
    const f = ev.target
    const item = {
        id: ++this.max, 
        name: f.itemName.value,
    }

    this.items.push(item)
    
    const item2 = this.renderListItem(item)
    this.list.appendChild(item2)
    f.reset()
  },
}

app.init({
    formSelector: '#itemForm',
    listSelector: '#itemList'
})

