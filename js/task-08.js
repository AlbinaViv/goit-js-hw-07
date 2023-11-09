const formEl = document.querySelector('.login-form')

formEl.addEventListener('submit', handleSubmit)


function handleSubmit(event) {
    event.preventDefault()

    const form = event.target
    const email = form.elements.email.value
    const password = form.elements.password.value

    if (email === '' || password === '') {
        return alert('Всі поля повинні бути заповнені!')
    }

    const info = {
        email,
        password,
    }
    console.log(info)

    form.reset()
}




