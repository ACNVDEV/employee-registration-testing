import { describe, expect, test } from 'vitest';

import { registerEmployee } from '../../src/services/register-employee.js';

describe('registerEmployee - decision table', () => {
  test.for([
    {
      rule: 'R1',
      input: {
        code: '500',
        name: 'Ana Pérez',
        employeeType: 1,
        monthsInInstitution: 120,
      },
      expectedSuccess: true,
      expectedError: undefined,
    },
    {
      rule: 'R2',
      input: {
        code: '000',
        name: 'Ana Pérez',
        employeeType: 1,
        monthsInInstitution: 120,
      },
      expectedSuccess: false,
      expectedError: 'El código del empleado debe estar comprendido entre 001 y 999.',
    },
    {
      rule: 'R3',
      input: {
        code: '500',
        name: '',
        employeeType: 1,
        monthsInInstitution: 120,
      },
      expectedSuccess: false,
      expectedError: 'El nombre del empleado no puede estar vacío.',
    },
    {
      rule: 'R4',
      input: {
        code: '500',
        name: 'Ana Pérez',
        employeeType: 2,
        monthsInInstitution: 120,
      },
      expectedSuccess: false,
      expectedError: 'El tipo de empleado debe ser 0 o 1.',
    },
    {
      rule: 'R5',
      input: {
        code: '500',
        name: 'Ana Pérez',
        employeeType: 1,
        monthsInInstitution: 601,
      },
      expectedSuccess: false,
      expectedError: 'El tiempo en la institución debe estar entre 1 y 600 meses.',
    },
  ])('$rule', ({ input, expectedSuccess, expectedError }) => {
    const result = registerEmployee(input);

    expect(result.success).toBe(expectedSuccess);

    if (result.success) {
      expect(expectedError).toBeUndefined();
    } else {
      expect(result.error).toBe(expectedError);
    }
  });
});
