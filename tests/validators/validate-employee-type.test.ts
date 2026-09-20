import { describe, expect, it } from 'vitest';

import { validateEmployeeType } from '../../src/validators/validate-employee-type.js';

describe('validateEmployeeType', () => {
  it('accepts 0 for fixed-term employee', () => {
    expect(validateEmployeeType(0)).toEqual({
      valid: true,
    });
  });

  it('accepts 1 for permanent employee', () => {
    expect(validateEmployeeType(1)).toEqual({
      valid: true,
    });
  });

  it('rejects a negative value', () => {
    expect(validateEmployeeType(-1).valid).toBe(false);
  });

  it('rejects a value greater than 1', () => {
    expect(validateEmployeeType(2).valid).toBe(false);
  });

  it('rejects a string value', () => {
    expect(validateEmployeeType('1').valid).toBe(false);
  });

  it('rejects an empty string', () => {
    expect(validateEmployeeType('').valid).toBe(false);
  });

  it('rejects null', () => {
    expect(validateEmployeeType(null).valid).toBe(false);
  });

  it('rejects undefined', () => {
    expect(validateEmployeeType(undefined).valid).toBe(false);
  });
});
