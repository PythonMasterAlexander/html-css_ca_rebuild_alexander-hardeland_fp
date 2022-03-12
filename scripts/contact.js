//By Alexander Hardeland
import { input } from "./component/components.js";
import { formContainer } from "./component/components.js";
import { inputFieldError } from "./functions.js";
import { validateForm } from "./functions.js";


for(let i = 0; i < input.length; i++) {
  input[i].onkeyup = inputFieldError;
};

formContainer.addEventListener('submit', validateForm);