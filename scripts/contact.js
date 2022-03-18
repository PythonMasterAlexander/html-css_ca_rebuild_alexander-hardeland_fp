import { formContainer, fullNameErrorMessage, formInputFields, validBorderColor, invalidBorderColor } 
from "./component/components.js";

import { validateForm } from "./functions.js";

const inputContainers = document.querySelectorAll('.inputContainer');

Array.from(inputContainers).forEach(item => {

  const errorContainers = document.createElement('div');
  item.append(errorContainers);
});

Array.from(formInputFields).forEach(item => {
  console.log(item);
  item.addEventListener('keyup', function(event) {
    console.log(event.target.value.length);
  });
});
/*
const imgHtmlElement = document.createElement('img');
const errorTextMessage = document.createElement('p');

imgHtmlElement.classList.add('inputFieldErrorImage');
errorTextMessage.classList.add('inputFieldErrorMessage');

imgHtmlElement.src = "/images/form-error-symbol.svg";
errorTextMessage.textContent = fullNameErrorMessage; 
*/


/*
Array.from(formInputFields).forEach(function(input) {
  console.log(input);
  input.addEventListener('keyup', function(event) {
    let keyValueLength = event.target.value.length;
    if(keyValueLength < 3) {
      errorContainers.append(imgHtmlElement, errorTextMessage);
      input.style.border = invalidBorderColor;

    } else {
      errorContainers.remove();
      input.style.border = validBorderColor;
    } 
  });
});
*/


formContainer.addEventListener('submit', validateForm);