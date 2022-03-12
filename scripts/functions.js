import { inputContainer } from "./component/components.js";
import { input } from "./component/components.js";
import { invalidBorderColor } from "./component/components.js";
import { validBorderColor } from "./component/components.js";
import { fullNameErrorMessage } from "./component/components.js";



//Create a message for the user if input fields dont receive the right information
export const formErrorMessage = function() {

  let htmlMessage = `<img src="/images/form-error-symbol.svg" style="margin-right: 10px">
  <p style="display:inline-block; color: red; margin-top:10px">${fullNameErrorMessage}</p>`;

  return htmlMessage;
};


//Create a function that validate user input on the input field
export const inputFieldError = function(event) {
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

//Create a form validation function 
export const validateForm = function(event) {
  event.preventDefault();
};
