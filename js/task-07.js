const inputEl = document.querySelector('#font-size-control');
// console.log(inputEl);

const spanEl = document.querySelector('#text');

inputEl.addEventListener('input', handeleInput)


function handeleInput(event) {

    spanEl.style.fontSize = `${inputEl.value}px`;
    console.log(spanEl.style.fontSize);

}



