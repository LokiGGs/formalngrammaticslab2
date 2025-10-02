const templateInput = document.getElementById("template-textbox")
const adressInput = document.getElementById("adress-textbox")

const templateOutput = document.getElementById("template")
const adressOutput = document.getElementById("adress")

let templateString
let adressString

function clearTemplate() {
    templateString = '';
    templateOutput.textContent = templateString;
}

function clearAdress(){
    adressString = '';
    adressOutput.textContent = adressString;
}

templateButton.addEventListener('click', function () {
    const inputValue = templateInput.value;
    if (String(inputValue).length == 0) {
        clearTemplate();
    } else {
        templateString = inputValue;
        templateOutput.textContent = templateString;
        templateInput.value = '';
    }
})

adressButton.addEventListener('click', function () {
    const inputValue = adressInput.value;
    if (String(inputValue).length == 0) {
        clearAdress();
    } else {
        adressString = inputValue;
        adressOutput.textContent = adressString;
        adressInput.value = '';
    }
})

