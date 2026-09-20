import { registerEmployee } from '#services/register-employee.js';

const validResult = registerEmployee({
  code: '001',
  name: 'Ana Pérez',
  employeeType: 1,
  monthsInInstitution: 120,
});

console.log(validResult);

const invalidResult = registerEmployee({
  code: '000',
  name: 'Ana Pérez',
  employeeType: 1,
  monthsInInstitution: 120,
});

console.log(invalidResult);
