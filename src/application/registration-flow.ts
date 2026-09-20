import type { EmployeeInput } from '#domain/employee-input.js';
import type { RegistrationFlowResult } from '#domain/registration-flow-result.js';

import { registerEmployee } from '#services/register-employee.js';

export const processRegistration = (input: EmployeeInput): RegistrationFlowResult => {
  const result = registerEmployee(input);

  if (!result.success) {
    return {
      state: 'ERROR',
      result,
    };
  }

  return {
    state: 'REGISTERED',
    result,
  };
};
