import { processRegistration } from '#application/registration-flow.js';

const validResult = processRegistration({
  code: '001',
  name: 'Ana Pérez',
  employeeType: 1,
  monthsInInstitution: 120,
});

console.log(validResult);

const invalidResult = processRegistration({
  code: '000',
  name: 'Ana Pérez',
  employeeType: 1,
  monthsInInstitution: 120,
});

console.log(invalidResult);
