import { formContainer, fullNameErrorMessage, formInputFields, validBorderColor, invalidBorderColor } 
from "./component/components.js";

import { validateForm } from "./functions.js";

const inputErrorContainer = document.querySelector('.inputErrorContainer');

const imgHtmlElement = document.createElement('img');
const errorTextMessage = document.createElement('p');

imgHtmlElement.classList.add('inputFieldErrorImage');
errorTextMessage.classList.add('inputFieldErrorMessage');

imgHtmlElement.src = "/images/form-error-symbol.svg";
errorTextMessage.textContent = fullNameErrorMessage; 

Array.from(formInputFields).forEach(function(formField) {
  console.log(formField);

  formField.addEventListener('keyup', function(event) {
    let keyValueLength = event.target.value.length;

    if(keyValueLength < 3) {
      inputErrorContainer.append(imgHtmlElement, errorTextMessage);
      formField.style.border = invalidBorderColor;

    } else {
      inputErrorContainer.remove();
      formField.style.border = validBorderColor;
    } 
  })
});
formContainer.addEventListener('submit', validateForm);