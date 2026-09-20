import { describe, expect, it } from 'vitest';

import { validateEmployeeName } from '../../src/validators/validate-employee-name.js';

describe('validateEmployeeName', () => {
  describe('equivalence partitioning', () => {
    it('accepts a valid employee name', () => {
      expect(validateEmployeeName('Ana Pérez')).toEqual({
        valid: true,
      });
    });

    it('rejects an empty name', () => {
      expect(validateEmployeeName('').valid).toBe(false);
    });

    it('rejects a name containing only spaces', () => {
      expect(validateEmployeeName('   ').valid).toBe(false);
    });

    it('rejects a name longer than 30 characters', () => {
      expect(validateEmployeeName('a'.repeat(31)).valid).toBe(false);
    });

    it('rejects non-string values', () => {
      expect(validateEmployeeName(123).valid).toBe(false);
    });
  });

  describe('boundary value analysis', () => {
    it('rejects a name with 0 effective characters', () => {
      expect(validateEmployeeName('').valid).toBe(false);
    });

    it('accepts a name with 1 character', () => {
      expect(validateEmployeeName('A')).toEqual({
        valid: true,
      });
    });

    it('accepts a name with 2 characters', () => {
      expect(validateEmployeeName('An')).toEqual({
        valid: true,
      });
    });

    it('accepts a name with 29 characters', () => {
      expect(validateEmployeeName('a'.repeat(29))).toEqual({
        valid: true,
      });
    });

    it('accepts a name with 30 characters', () => {
      expect(validateEmployeeName('a'.repeat(30))).toEqual({
        valid: true,
      });
    });

    it('rejects a name with 31 characters', () => {
      expect(validateEmployeeName('a'.repeat(31)).valid).toBe(false);
    });
  });
});
