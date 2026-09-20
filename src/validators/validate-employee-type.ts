import type { ValidationResult } from '#domain/validation-result.js';

export const validateEmployeeType = (value: unknown): ValidationResult => {
  if (typeof value !== 'number') {
    return {
      valid: false,
      error: 'El tipo de empleado debe ser un valor numérico.',
    };
  }

  if (value !== 0 && value !== 1) {
    return {
      valid: false,
      error: 'El tipo de empleado debe ser 0 o 1.',
    };
  }

  return {
    valid: true,
  };
};
