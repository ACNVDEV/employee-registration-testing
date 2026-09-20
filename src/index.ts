import { validateEmployeeCode } from '#validators/validate-employee-code.js';

console.log(validateEmployeeCode('001'));
console.log(validateEmployeeCode('000'));
console.log(validateEmployeeCode('999'));
console.log(validateEmployeeCode('1000'));
