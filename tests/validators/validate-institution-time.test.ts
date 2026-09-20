import { describe, expect, it } from 'vitest';

import { validateInstitutionTime } from '../../src/validators/validate-institution-time.js';

describe('validateInstitutionTime', () => {
  describe('equivalence partitioning', () => {
    it('accepts a valid institution time', () => {
      expect(validateInstitutionTime(120)).toEqual({
        valid: true,
      });
    });

    it('rejects zero months', () => {
      expect(validateInstitutionTime(0).valid).toBe(false);
    });

    it('rejects a negative value', () => {
      expect(validateInstitutionTime(-1).valid).toBe(false);
    });

    it('rejects values greater than 600', () => {
      expect(validateInstitutionTime(601).valid).toBe(false);
    });

    it('rejects decimal values', () => {
      expect(validateInstitutionTime(12.5).valid).toBe(false);
    });

    it('rejects string values', () => {
      expect(validateInstitutionTime('12').valid).toBe(false);
    });

    it('rejects an empty string', () => {
      expect(validateInstitutionTime('').valid).toBe(false);
    });

    it('rejects null', () => {
      expect(validateInstitutionTime(null).valid).toBe(false);
    });

    it('rejects undefined', () => {
      expect(validateInstitutionTime(undefined).valid).toBe(false);
    });
  });

  describe('boundary value analysis', () => {
    it('rejects 0, immediately below the lower boundary', () => {
      expect(validateInstitutionTime(0).valid).toBe(false);
    });

    it('accepts 1, the lower boundary', () => {
      expect(validateInstitutionTime(1)).toEqual({
        valid: true,
      });
    });

    it('accepts 2, immediately above the lower boundary', () => {
      expect(validateInstitutionTime(2)).toEqual({
        valid: true,
      });
    });

    it('accepts 599, immediately below the upper boundary', () => {
      expect(validateInstitutionTime(599)).toEqual({
        valid: true,
      });
    });

    it('accepts 600, the upper boundary', () => {
      expect(validateInstitutionTime(600)).toEqual({
        valid: true,
      });
    });

    it('rejects 601, immediately above the upper boundary', () => {
      expect(validateInstitutionTime(601).valid).toBe(false);
    });
  });
});
