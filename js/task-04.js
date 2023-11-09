const btnDecrement = document.querySelector('button[data-action="decrement"]')
console.log(btnDecrement);

const btnIncrement = document.querySelector('button[data-action="increment"]')
console.log(btnIncrement);

const valueEl = document.querySelector("#value");

let counterValue = 0;

btnDecrement.addEventListener("click", handleDeClick)

function handleDeClick() {
    counterValue -= 1;
    valueEl.textContent = counterValue;

    console.log("counterValue");
};

btnIncrement.addEventListener("click", handleInClick)

function handleInClick() {
    counterValue += 1;
    valueEl.textContent = counterValue;
};

