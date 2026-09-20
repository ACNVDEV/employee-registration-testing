import type { ValidationResult } from '#domain/validation-result.js';

export const validateEmployeeName = (value: unknown): ValidationResult => {
  if (typeof value !== 'string') {
    return {
      valid: false,
      error: 'El nombre del empleado debe ser un texto.',
    };
  }

  const trimedValue = value.trim();

  if (trimedValue.length === 0) {
    return {
      valid: false,
      error: 'El nombre del empleado no puede estar vacío.',
    };
  }

  if (trimedValue.length > 30) {
    return {
      valid: false,
      error: 'El nombre del empleado no puede superar los 30 caracteres.',
    };
  }

  return {
    valid: true,
  };
};
