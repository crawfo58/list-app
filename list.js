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
    item2.dataset.id = item.id
    item2.textContent = item.name
    return item2
  }, 

  handleSubmit(ev) {
    const f = ev.target
    const item = {
        id: ++this.max, 
        name: f.itemName.value,
    }

    this.items.unshift(item)
    
    const item2 = this.renderListItem(item)
    this.list.insertBefore(item2, this.list.firstElementChild)
    f.reset()
  },
}

app.init({
    formSelector: '#itemForm',
    listSelector: '#itemList'
})

