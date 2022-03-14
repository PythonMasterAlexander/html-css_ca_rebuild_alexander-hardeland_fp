/*
import { inputContainer } from "./component/components.js";
import { input } from "./component/components.js";
import { invalidBorderColor } from "./component/components.js";
import { validBorderColor } from "./component/components.js";
import { errorMessage } from "./component/components.js";
*/



//Create a message for the user if input fields dont receive the right information
/*NB
  Why use innerHTML with stringLiterals? 
  Some programers don't like to use innerHTML because what you do is basically just "dump" a string
  inside a html element.
  
  And the reason for not doing this is to be more "programmatically" and write code that creates the
  elements and then use them in your code. 

  On stackOverFlow I found this argument for using createElement and not creating a innerHTML string



  innerHTML just put the plain text. Whereas createElement creates the element object and adds to Parent. 
  since browser convert tags in plain text to HTML element, its converted to tags. 
  It is not recommended. createElement is the recommended method

export const formErrorMessage = function() {

  let htmlMessage = `<img src="/images/form-error-symbol.svg" style="margin-right: 10px">
  <p style="display:inline-block; color: red; margin-top:10px">${fullNameErrorMessage}</p>`; 

  const imgHtmlElement = document.createElement('img');
  const paragraphHtmlElement = document.createElement('p');

  imgHtmlElement.src = "/images/form-error-symbol.svg";
  imgHtmlElement.classList.add('inputFieldErrorImage');

  paragraphHtmlElement.textContent = errorMessage;

};


//Create a function that validate user input on the input field
export const inputFieldError = function(event) {
  let lengthOfInputField = event.target.value.length;


  for(let i = 0; i < input.length; i++) {

    if(lengthOfInputField <= 1) {
      formErrorMessage();
      input[i].style.border = `solid ${invalidBorderColor} 2px`;    

    } else {
      inputContainer.remove();
      input[i].style.border = `solid ${validBorderColor} 2px`;
    }
  };
};
*/

//Create a form validation function 
export const validateForm = function(event) {
  event.preventDefault();
};
