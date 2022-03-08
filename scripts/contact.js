//By Alexander Hardeland
import { input } from "./component/components.js";
import { invalidBorderColor } from "./component/components.js";
import { validBorderColor } from "./component/components.js";
import { inputContainer } from "./component/components.js";
import { formErrorMessage } from "./component/components.js";

const form = document.querySelector('#submitPageFormValidation');

//Create a onkeyup function that validate user input on the input field
const inputFieldError = function(event) {
  let lengthOfInputField = event.target.value.length;


  for(let i = 0; i < input.length; i++) {

    if(lengthOfInputField <= 1) {
      inputContainer.innerHTML = formErrorMessage();
      input[i].style.border = `solid ${invalidBorderColor} 2px`;    

    } else {
      inputContainer.remove();
      input[i].style.border = `solid ${validBorderColor} 2px`;
    }
  };
};

for(let i = 0; i < input.length; i++) {
  input[i].onkeyup = inputFieldError;
};

const validateForm = function(event) {
  event.preventDefault();
};

form.addEventListener('submit', validateForm);