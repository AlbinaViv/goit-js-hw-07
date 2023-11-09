const inputEl = document.querySelector('#validation-input')

inputEl.addEventListener('blur', handeleInput)

function handeleInput(event) {
    const nameEl = event.currentTarget.value;

    const lengthMax = inputEl.getAttribute('data-length');

    // console.log(event.currentTarget.value);

    if (nameEl.length === Number(lengthMax)) {
        inputEl.classList.remove("invalid");
        inputEl.classList.add("valid");
    } else {
        inputEl.classList.remove("valid");
        inputEl.classList.add("invalid");
    }
}


