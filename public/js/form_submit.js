// functions

// submit the form when passed the object and url
form_submit = function (form, submit_url) {
  // make formdata object
  let formdata1 = new FormData(form)
  // setting timestamp
  formdata1.set('Timestamp', new Date())
  //getAll returns all values for specificied keys
  //form2 = form1.getAll('Timestamp')
  fetch(submit_url, { method: 'POST', body: formdata1})
    .then(response => console.log('Success!'))
    .catch(error => console.error('Error!'))
}

// Add in thank you for timestamp and question
form_thankyou = function (form_name) {
  //getElementsByName returns a collection
  // first element is Timestamp, next element is question
  document.getElementsByName(form_name)[0][0].value = 'Thank your for your submission!!'
  document.getElementsByName(form_name)[0][1].value = 'Thank your for your submission!!'
  document.getElementsByName(form_name)[0][2].value = 'Thank your for your submission!!'
  document.getElementsByName(form_name)[0][3].value = 'Thank your for your submission!!'
}

form_listen = function (form_name, submit_url) {
  //getting form dom object
  form = document.forms[form_name]
  //https://stackoverflow.com/questions/224820/how-can-i-pass-arguments-to-anonymous-functions-in-javascript
  form.addEventListener('submit', function () {
    //stop normal page redirect
    event.preventDefault()
    //submit the form
    form_submit(form, submit_url)
    //enter thank you into the form
    form_thankyou(form_name)
  })
}

//url for google ap
const scriptURL = 'https://script.google.com/macros/s/AKfycbySedWceqoRt1wwUaEzIpkW3B_IVtIMxevFuPRkVZTagnSTmDU/exec'
//all the forms on the page
const form_names = ['0001a']

form_listen('0001a', scriptURL)


//for (let i =0 ; i < form_names.length; i++ ) {
//  form_listen(form_names[i], scriptURL);
//}
