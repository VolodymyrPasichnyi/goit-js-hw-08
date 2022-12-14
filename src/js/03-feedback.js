import throttle from 'lodash.throttle'

const form = document.querySelector('form')
const email = document.querySelector('input')
const message = document.querySelector('textarea')
const key = 'feedback-form-state'

form.addEventListener('input',throttle(e => {
    const save = { 
        email: email.value, 
        message: message.value 
    }
    localStorage.setItem(key, JSON.stringify(save))
  }, 500)
)

form.addEventListener('submit', e => {
  e.preventDefault()
  console.log ({ 
    email: email.value,
    message: message.value 
})
  form.reset()
  localStorage.removeItem(key)
})

const loading = (k) => {
  try {
    const keys = localStorage.getItem(k)
    return keys === null ? undefined : JSON.parse(keys)
  } catch (error) {
    console.error('Error', error.message)
  }
};

const storageData = loading(key)
if (storageData) {
  email.value = storageData.email
  message.value = storageData.message
}
