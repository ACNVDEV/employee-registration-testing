import { parseNumericInput } from '#application/parse-numeric-input.js';

console.log(parseNumericInput(''));
console.log(parseNumericInput(' '));
console.log(parseNumericInput('0'));
console.log(parseNumericInput('1'));
console.log(parseNumericInput('12.5'));
console.log(parseNumericInput('doce'));
