import { validateEmployeeName } from '#validators/validate-employee-name.js';

console.log(validateEmployeeName('Andrés Naranjo'));
console.log(validateEmployeeName(''));
console.log(validateEmployeeName('     '));
console.log(validateEmployeeName('a'.repeat(30)));
console.log(validateEmployeeName('a'.repeat(31)));
