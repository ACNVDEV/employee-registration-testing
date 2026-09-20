import { describe, expect, it } from 'vitest';

import { validateEmployeeCode } from '../../src/validators/validate-employee-code.js';

describe('validateEmployeeCode - boundary value analysis', () => {
  it('rejects 000, immediately below the valid lower boundary', () => {
    expect(validateEmployeeCode('000').valid).toBe(false);
  });

  it('accepts 001, the valid lower boundary', () => {
    expect(validateEmployeeCode('001')).toEqual({
      valid: true,
    });
  });

  it('accepts 002, immediately above the lower boundary', () => {
    expect(validateEmployeeCode('002')).toEqual({
      valid: true,
    });
  });

  it('accepts 998, immediately below the upper boundary', () => {
    expect(validateEmployeeCode('998')).toEqual({
      valid: true,
    });
  });

  it('accepts 999, the valid upper boundary', () => {
    expect(validateEmployeeCode('999')).toEqual({
      valid: true,
    });
  });

  it('rejects 1000, immediately above the valid upper boundary', () => {
    expect(validateEmployeeCode('1000').valid).toBe(false);
  });
});
