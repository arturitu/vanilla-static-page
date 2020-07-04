
import App from '../../js/App.js'
require('./main.css')

document.addEventListener('DOMContentLoaded', () => {
  let app = new App()
  app.getUsers()
})
