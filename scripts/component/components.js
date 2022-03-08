 //By Alexander Hardeland
export const input = document.querySelectorAll('input, textarea');
export const emailInput = document.querySelector('[name=email]');
export const textInput = document.querySelector('[name=message]');
export const inputContainer = document.querySelector('.inputContainer');

export const fullNameErrorMessage = 'Enter your full name';
export const emailErrorMessage = 'Enter a valid email address';
export const userMessageError = 'Enter at a minimum two words';

export const validBorderColor = '#386641';
export const invalidBorderColor = '#ff0000';

//Error message
//Create a message for the user if input fields dont receive the right information
export const formErrorMessage = function() {

    let htmlMessage = `<img src="/images/form-error-symbol.svg" style="margin-right: 10px">
    <p style="display:inline-block; color: red; margin-top:10px">${fullNameErrorMessage}</p>`;
    return htmlMessage;
  };