import { describe, expect, it } from 'vitest';

import { processRegistration } from '../../src/application/registration-flow.js';

describe('processRegistration - registration state flow', () => {
  it('returns REGISTERED when all employee data is valid', () => {
    const result = processRegistration({
      code: '500',
      name: 'Ana Pérez',
      employeeType: 1,
      monthsInInstitution: 120,
    });

    expect(result.state).toBe('REGISTERED');

    expect(result.result).toEqual({
      success: true,
      employee: {
        code: '500',
        name: 'Ana Pérez',
        employeeType: 1,
        monthsInInstitution: 120,
      },
    });
  });

  it('returns ERROR when the employee code is invalid', () => {
    const result = processRegistration({
      code: '000',
      name: 'Ana Pérez',
      employeeType: 1,
      monthsInInstitution: 120,
    });

    expect(result.state).toBe('ERROR');
    expect(result.result.success).toBe(false);
  });

  it('returns ERROR when the employee name is invalid', () => {
    const result = processRegistration({
      code: '500',
      name: '',
      employeeType: 1,
      monthsInInstitution: 120,
    });

    expect(result.state).toBe('ERROR');
    expect(result.result.success).toBe(false);
  });

  it('returns ERROR when the employee type is invalid', () => {
    const result = processRegistration({
      code: '500',
      name: 'Ana Pérez',
      employeeType: 2,
      monthsInInstitution: 120,
    });

    expect(result.state).toBe('ERROR');
    expect(result.result.success).toBe(false);
  });

  it('returns ERROR when institution time is invalid', () => {
    const result = processRegistration({
      code: '500',
      name: 'Ana Pérez',
      employeeType: 1,
      monthsInInstitution: 601,
    });

    expect(result.state).toBe('ERROR');
    expect(result.result.success).toBe(false);
  });
});
