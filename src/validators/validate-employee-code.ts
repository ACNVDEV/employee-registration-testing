import type { ValidationResult } from '#domain/validation-result.js';

export const validateEmployeeCode = (value: unknown): ValidationResult => {
  if (typeof value !== 'string') {
    return {
      valid: false,
      error: 'El código del empleado debe ser un texto de 3 dígitos.',
    };
  }

  if (!/^(?!000)\d{3}$/.test(value)) {
    return {
      valid: false,
      error: 'El código del empleado debe estar comprendido entre 001 y 999.',
    };
  }

  return {
    valid: true,
  };
};
