import type { Employee } from '#domain/employee.js';
import type { EmployeeInput } from '#domain/employee-input.js';
import type { EmployeeType } from '#domain/employee-type.js';
import type { RegistrationResult } from '#domain/registration-result.js';

import { validateEmployeeCode } from '#validators/validate-employee-code.js';
import { validateEmployeeName } from '#validators/validate-employee-name.js';
import { validateEmployeeType } from '#validators/validate-employee-type.js';
import { validateInstitutionTime } from '#validators/validate-institution-time.js';

export const registerEmployee = (input: EmployeeInput): RegistrationResult => {
  const codeValidation = validateEmployeeCode(input.code);

  if (!codeValidation.valid) {
    return {
      success: false,
      error: codeValidation.error,
    };
  }

  const nameValidation = validateEmployeeName(input.name);

  if (!nameValidation.valid) {
    return {
      success: false,
      error: nameValidation.error,
    };
  }

  const employeeTypeValidation = validateEmployeeType(input.employeeType);

  if (!employeeTypeValidation.valid) {
    return {
      success: false,
      error: employeeTypeValidation.error,
    };
  }

  const institutionTimeValidation = validateInstitutionTime(input.monthsInInstitution);

  if (!institutionTimeValidation.valid) {
    return {
      success: false,
      error: institutionTimeValidation.error,
    };
  }

  const employee: Employee = {
    code: input.code as string,
    name: (input.name as string).trim(),
    employeeType: input.employeeType as EmployeeType,
    monthsInInstitution: input.monthsInInstitution as number,
  };

  return {
    success: true,
    employee,
  };
};
