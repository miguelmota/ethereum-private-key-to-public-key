var privateKeyToPublicKey = require('../')

var privateKey = document.querySelector('#privatekey')
var submit = document.querySelector('#submit')
var output = document.querySelector('#output')

submit.addEventListener('click', update)
privateKey.addEventListener('input', update)

update()

function update(event) {
  if (event) event.preventDefault()
  output.innerHTML = ''
  try {
    output.innerHTML = privateKeyToPublicKey(privateKey.value).toString('hex')
  } catch(err) {
    // noop
  }
}
