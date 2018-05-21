class App {
    constructor (selectors) {
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
    }
  
    renderListItem(item) {
      const item2 = this.template.cloneNode(true)
      item2.classList.remove('template')
      item2.dataset.id = item.id
      item2
          .querySelector('.itemName')
          .textContent = item.name
      item2
          .querySelector('.remove.button')
          .addEventListener('click', this.removeItem.bind(this, item))
      item2
          .querySelector('.fav.button')
          .addEventListener('click', this.favoriteItem.bind(this, item))
      return item2
    }

    removeItem(item, ev) {
        const button = ev.target
        const item2 = button.closest('.item')
        item2.remove()

        const i = this.items.indexOf(item)
        this.items.splice(i, 1)
    }

    favoriteItem(item, ev) {
        const button = ev.target
        const item2 = button.closest('.item')
        item.fav = item2.classList.toggle('fav')
    }
  
    handleSubmit(ev) {
      const f = ev.target
      const item = {
          id: ++this.max, 
          name: f.itemName.value,
          fav: false
      }
  
      this.items.unshift(item)
      
      const item2 = this.renderListItem(item)
      this.list.insertBefore(item2, this.list.firstElementChild)
      f.reset()
    }
  }
  
  const app = new App({
    formSelector: '#itemForm',
    listSelector: '#itemList',
    templateSelector: '.item.template', 
  })
