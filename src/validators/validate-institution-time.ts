import type { ValidationResult } from '#domain/validation-result.js';

export const validateInstitutionTime = (value: unknown): ValidationResult => {
  if (typeof value !== 'number') {
    return {
      valid: false,
      error: 'El tiempo en la institución debe ser un valor numérico.',
    };
  }

  if (!Number.isInteger(value)) {
    return {
      valid: false,
      error: 'El tiempo en la institución debe expresarse en meses enteros.',
    };
  }

  if (value < 1 || value > 600) {
    return {
      valid: false,
      error: 'El tiempo en la institución debe estar entre 1 y 600 meses.',
    };
  }

  return {
    valid: true,
  };
};
