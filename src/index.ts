import { validateInstitutionTime } from '#validators/validate-institution-time.js';

console.log(validateInstitutionTime(1));
console.log(validateInstitutionTime(600));
console.log(validateInstitutionTime(0));
console.log(validateInstitutionTime(601));
console.log(validateInstitutionTime(12.5));
console.log(validateInstitutionTime('12'));
