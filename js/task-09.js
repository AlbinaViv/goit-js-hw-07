const buttonEl = document.querySelector('.change-color')

const spanEl = document.querySelector('.color')


const body = document.querySelector('body')

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, 0)}`;
}

buttonEl.addEventListener("click", handleDeClick)

function handleDeClick() {

    body.style.backgroundColor = getRandomHexColor();


    spanEl.textContent = body.style.backgroundColor;
}
