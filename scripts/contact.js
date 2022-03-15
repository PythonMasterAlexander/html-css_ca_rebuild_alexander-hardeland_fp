import { formContainer } from "./component/components.js";
import { validateForm } from "./functions.js";
import { fullNameErrorMessage } from "./component/components.js";
import { input } from "./component/components.js";

const inputErrorContainer = document.querySelector('.inputErrorContainer');

const imgHtmlElement = document.createElement('img');
imgHtmlElement.classList.add('inputFieldErrorImage');
imgHtmlElement.src = "/images/form-error-symbol.svg";

const errorTextMessage = document.createElement('p');
errorTextMessage.classList.add('inputFieldErrorMessage');
errorTextMessage.textContent = fullNameErrorMessage; 

//A lesson, when using addEventListener we cant use 'on' before the event
for(let i = 0; i < input.length; i++) {

  input[i].addEventListener('keyup', function(event) {
    let keyValueLength = event.target.value.length;
  });
}


formContainer.addEventListener('submit', validateForm);