const app = {
  init:function(formSelector) {
    this.max = 0

    document
        .querySelector(formSelector)
        .addEventListener('submit', ev => {
            ev.preventDefault()
            this.handleSubmit(ev)
        })
  },

  handleSubmit: function(ev) {
    const f = ev.target
    const item = {
        id: ++this.max, 
        name: f.itemName.value,
    }
    console.log(item)
    f.reset()
  },
}

app.init('#listForm')

