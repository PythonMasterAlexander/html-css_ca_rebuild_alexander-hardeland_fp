 //By Alexander Hardeland



const input = document.querySelectorAll('input, textarea');
const emailInput = document.querySelector('[name=email]');
const textInput = document.querySelector('[name=message]');
const inputContainer = document.querySelector('.inputContainer');

const fullNameErrorMessage = 'Enter your full name';
const emailErrorMessage = 'Enter a valid email address';
const userMessageError = 'Enter at a minimum two words';

const validBorderColor = '#386641';
const invalidBorderColor = '#ff0000';