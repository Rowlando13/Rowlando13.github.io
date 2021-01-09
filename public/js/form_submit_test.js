// not ready
const scriptURL = 'https://script.google.com/macros/s/AKfycbySedWceqoRt1wwUaEzIpkW3B_IVtIMxevFuPRkVZTagnSTmDU/exec'
// html form
let form = document.forms['submit-to-google-sheet']

form.addEventListener('submit', e => {
  e.preventDefault()
})
