/*-------------------------------- Constants --------------------------------*/
const buttons = document.querySelectorAll('.button');
const displayEl = document.querySelector('.display');
const operators = ['*', '/', '+', '-']
console.log(buttons);

/*-------------------------------- Variables --------------------------------*/

/*------------------------ Cached Element References ------------------------*/

/*----------------------------- Event Listeners -----------------------------*/
buttons.forEach((button) => {
    button.addEventListener('click', (event) => {
        if (event.target.innerText == 'C') {
            clear();
        } else if (event.target.innerText == '=') {
            calculateOutput();
        } else {
            addToInput(event);
        }
    });
});
/*-------------------------------- Functions --------------------------------*/
const clear = () => {
    displayEl.textContent = '';
}

const calculateOutput = () => {
    if (operators.find((el) => el == displayEl.textContent[displayEl.textContent.length - 1])) {
        displayEl.textContent = displayEl.textContent.slice(0, -1);
    }
    let calculatedOutput = eval(displayEl.textContent);
    displayEl.textContent = calculatedOutput;
}

const addToInput = (event) => {
    if (displayEl.textContent.length < 1 && event.target.classList.contains('number'))
        displayEl.textContent += event.target.innerText;
    else if (displayEl.textContent.length >= 1) {
        if (operators.find((el) => el == displayEl.textContent[displayEl.textContent.length - 1]) && operators.find((el) => el == event.target.innerText)) {
            displayEl.textContent = displayEl.textContent.slice(0, -1) + event.target.innerText;
            return;
        }
        else {
            displayEl.textContent += event.target.innerText;
        }
    }
}