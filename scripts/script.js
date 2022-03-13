import { locatePage } from "./component/components.js";
import { navigationLinks } from "./component/components.js";

navigationLinks.forEach(links => {
  if(links.href.includes(`${locatePage}`)) {
    links.classList.add('activeLink');
  }
});
