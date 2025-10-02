const templateInput = document.getElementById("template-textbox")
const adressInput = document.getElementById("adress-textbox")
const templateOutput = document.getElementById("template")
const adressOutput = document.getElementById("adress")

const enterTemplate = document.querySelector(".enter-template")
const errorBox = document.querySelector(".error-text")

let templateString = '';
let adressString = '';
let returnTimer = null;
const RETURN_DELAY = 3000;


function clearTemplate() {
    templateString = '';
    templateOutput.textContent = templateString;
}

function clearAdress() {
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
    //Проверка на ошибку(если человек дурачок и не ввёл шаблон)
    if (templateString.length == 0) {
        errorBox.textContent = "Ошибка: Вы не ввели шаблон!";
        enterTemplate.classList.add('error');
        errorBox.classList.add('move');
        if (returnTimer) {
            clearTimeout(returnTimer);
        }

        //Перевод фокуса на ввод шаблона
        templateInput.focus();

        returnTimer = setTimeout(() => {
            errorBox.classList.remove('move');
            enterTemplate.classList.remove('error');
            returnTimer = null;
        }, RETURN_DELAY);
    }

    //Подтверждение корректности ввода адреса
    const inputValue = adressInput.value;
    if (String(inputValue).length == 0) {
        clearAdress();
    } else {
        adressString = inputValue;
        adressOutput.textContent = adressString;
        adressInput.value = '';
    }
})

