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