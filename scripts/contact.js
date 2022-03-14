import { formContainer } from "./component/components.js";
import { validateForm } from "./functions.js";
import { fullNameErrorMessage } from "./component/components.js";

const inputErrorContainer = document.querySelector('.inputErrorContainer');

const imgHtmlElement = document.createElement('img');
imgHtmlElement.classList.add('inputFieldErrorImage');
imgHtmlElement.src = "/images/form-error-symbol.svg";

const errorTextMessage = document.createElement('p');
errorTextMessage.classList.add('inputFieldErrorMessage');
errorTextMessage.textContent = fullNameErrorMessage; 

inputErrorContainer.append(imgHtmlElement, errorTextMessage);


formContainer.addEventListener('submit', validateForm);