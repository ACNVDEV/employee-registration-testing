import { describe, expect, it } from 'vitest';

import { parseNumericInput } from '../../src/application/parse-numeric-input.js';

describe('parseNumericInput', () => {
  it('preserves an empty value', () => {
    expect(parseNumericInput('')).toBe('');
  });

  it('preserves a value containing only spaces as empty', () => {
    expect(parseNumericInput('   ')).toBe('');
  });

  it('converts zero to number', () => {
    expect(parseNumericInput('0')).toBe(0);
  });

  it('converts a positive integer to number', () => {
    expect(parseNumericInput('120')).toBe(120);
  });

  it('converts a decimal value to number', () => {
    expect(parseNumericInput('12.5')).toBe(12.5);
  });

  it('preserves a non-numeric value', () => {
    expect(parseNumericInput('doce')).toBe('doce');
  });

  it('trims numeric input before conversion', () => {
    expect(parseNumericInput(' 120 ')).toBe(120);
  });
});
