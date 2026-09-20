import { describe, expect, it } from 'vitest';

import { validateEmployeeCode } from '../../src/validators/validate-employee-code.js';

describe('validateEmployeeCode - equivalence partitioning', () => {
  it('accepts a valid three-digit employee code', () => {
    const result = validateEmployeeCode('500');

    expect(result).toEqual({
      valid: true,
    });
  });

  it('rejects code 000', () => {
    const result = validateEmployeeCode('000');

    expect(result.valid).toBe(false);
  });

  it('rejects codes with fewer than three digits', () => {
    const result = validateEmployeeCode('99');

    expect(result.valid).toBe(false);
  });

  it('rejects codes with more than three digits', () => {
    const result = validateEmployeeCode('1000');

    expect(result.valid).toBe(false);
  });

  it('rejects alphabetic characters', () => {
    const result = validateEmployeeCode('A01');

    expect(result.valid).toBe(false);
  });

  it('rejects special characters', () => {
    const result = validateEmployeeCode('1@2');

    expect(result.valid).toBe(false);
  });

  it('rejects an empty code', () => {
    const result = validateEmployeeCode('');

    expect(result.valid).toBe(false);
  });

  it('rejects a numeric value', () => {
    expect(validateEmployeeCode(123)).toEqual({
      valid: false,
      error: 'El código del empleado debe ser un texto de 3 dígitos.',
    });
  });

  it('rejects null', () => {
    expect(validateEmployeeCode(null)).toEqual({
      valid: false,
      error: 'El código del empleado debe ser un texto de 3 dígitos.',
    });
  });
});
