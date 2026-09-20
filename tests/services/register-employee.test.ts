import { describe, expect, it } from 'vitest';

import { registerEmployee } from '../../src/services/register-employee.js';

describe('registerEmployee', () => {
  it('registers an employee when all data is valid', () => {
    const result = registerEmployee({
      code: '500',
      name: 'Ana Pérez',
      employeeType: 1,
      monthsInInstitution: 120,
    });

    expect(result).toEqual({
      success: true,
      employee: {
        code: '500',
        name: 'Ana Pérez',
        employeeType: 1,
        monthsInInstitution: 120,
      },
    });
  });

  it('rejects an invalid employee code', () => {
    const result = registerEmployee({
      code: '000',
      name: 'Ana Pérez',
      employeeType: 1,
      monthsInInstitution: 120,
    });

    expect(result.success).toBe(false);
  });

  it('rejects an invalid employee name', () => {
    const result = registerEmployee({
      code: '500',
      name: '',
      employeeType: 1,
      monthsInInstitution: 120,
    });

    expect(result.success).toBe(false);
  });

  it('rejects an invalid employee type', () => {
    const result = registerEmployee({
      code: '500',
      name: 'Ana Pérez',
      employeeType: 2,
      monthsInInstitution: 120,
    });

    expect(result.success).toBe(false);
  });

  it('rejects invalid institution time', () => {
    const result = registerEmployee({
      code: '500',
      name: 'Ana Pérez',
      employeeType: 1,
      monthsInInstitution: 601,
    });

    expect(result.success).toBe(false);
  });

  it('prioritizes employee code validation when multiple fields are invalid', () => {
    const result = registerEmployee({
      code: '000',
      name: '',
      employeeType: 2,
      monthsInInstitution: 601,
    });

    expect(result).toEqual({
      success: false,
      error: 'El código del empleado debe estar comprendido entre 001 y 999.',
    });
  });

  it('prioritizes employee name validation after a valid code', () => {
    const result = registerEmployee({
      code: '500',
      name: '',
      employeeType: 2,
      monthsInInstitution: 601,
    });

    expect(result).toEqual({
      success: false,
      error: 'El nombre del empleado no puede estar vacío.',
    });
  });
});
