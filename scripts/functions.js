//Error message
//Create a message for the user if input fields dont receive the right information
import { fullNameErrorMessage } from "./component/components.js";

export const formErrorMessage = function() {

    let htmlMessage = `<img src="/images/form-error-symbol.svg" style="margin-right: 10px">
    <p style="display:inline-block; color: red; margin-top:10px">${fullNameErrorMessage}</p>`;
    return htmlMessage;
  };