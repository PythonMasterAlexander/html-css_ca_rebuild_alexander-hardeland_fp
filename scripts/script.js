//By Alexander Hardeland
const locatePage = document.location.pathname;
const navigationLinks = document.querySelectorAll('nav a');

navigationLinks.forEach(links => {
  if(links.href.includes(`${locatePage}`)) {
    links.classList.add('activeLink');
  }
});

//Error message
 //Create a message for the user if input fields dont receive the right information
const formErrorMessage = function() {

  let htmlMessage = `<img src="/images/form-error-symbol.svg" style="margin-right: 10px">
  <p style="display:inline-block; color: red; margin-top:10px">${fullNameErrorMessage}</p>`;
  return htmlMessage;
};

//Create a onkeyup function that validate user input on the input field
const inputFieldError = function(event) {
  let lengthOfInputField = event.target.value.length;

  if(lengthOfInputField <= 1) {
    inputContainer.innerHTML = formErrorMessage();
    input.style.border = `solid ${invalidBorderColor} 2px`;    

  } else {
    inputContainer.remove();
    input.style.border = `solid ${validBorderColor} 2px`;
  }
};