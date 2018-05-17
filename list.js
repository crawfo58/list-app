const app = {
  init:function(selectors) {
    this.max = 0
    this.list = document.querySelector(selectors.listSelector)

    document
        .querySelector(selectors.formSelector)
        .addEventListener('submit', ev => {
            ev.preventDefault()
            this.handleSubmit(ev)
        })
  },

  renderListItem: function(item) {
    const item2 = document.createElement('li')
    item2.textContent = item.name
    return item2
  }, 

  handleSubmit: function(ev) {
    const f = ev.target
    const item = {
        id: ++this.max, 
        name: f.itemName.value,
    }
    
    const item2 = this.renderListItem(item)
    this.list.appendChild(item2)
    f.reset()
  },
}

app.init({
    formSelector: '#itemForm',
    listSelector: '#itemList'
})

