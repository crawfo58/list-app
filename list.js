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
      item2
          .querySelector('button.alert.button')
          .addEventListener('click', (ev)=> {
              ev.preventDefault()
              this.removeListItem(ev)
          })
      item2
          .querySelector('button.warning.button')
          .addEventListener('click', (ev)=> {
              ev.preventDefault()
              this.favoriteListItem(ev)
          })
      return item2
    }, 

    removeListItem(ev) {
        ev.preventDefault()
        const button = ev.target
        const item2 = button.parentNode.parentNode
        item2.remove()
        for(i = 0; i < this.items.length; i++) {
            const index = this.items[i].id.toString()
            if(item2.dataset.id === index) {
                this.items.splice(i,1)
                break
            }
        }
    },

    favoriteListItem(ev) {
        const button = ev.target
        const item2 = button.parentNode.parentNode
        item2.style.backgroundColor = 'Yellow'
        for(i = 0; i < this.items.length; i++) {
            if(this.items[i].id === item2.dataset.id) {
                this.items[i].fav = true
            }
        }
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
  
