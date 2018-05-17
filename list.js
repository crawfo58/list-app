const app = {
  init(selectors) {
    this.items = []
    this.max = 0
    this.list = document.querySelector(selectors.listSelector)
    this.template = document.querySelector(selectors.templateSelector)

    document
        .querySelector(selectors.formSelector)
        .addEventListener('submit', ev => {
            ev.preventDefault()
            this.handleSubmit(ev)
        })
  },

  renderListItem(item) {
    const item2 = this.template.cloneNode(true)
    item2.classList.remove('template')
    item2.dataset.id = item.id
    item2
        .querySelector('.itemName')
        .textContent = item.name
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
    listSelector: '#itemList',
    templateSelector: '.item.template', 
})

