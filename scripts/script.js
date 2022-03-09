//By Alexander Hardeland
const locatePage = document.location.pathname;
const navigationLinks = document.querySelectorAll('nav a');

navigationLinks.forEach(links => {
  if(links.href.includes(`${locatePage}`)) {
    links.classList.add('activeLink');
  }
});