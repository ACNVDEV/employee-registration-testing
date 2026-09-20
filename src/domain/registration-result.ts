import type { Employee } from '#domain/employee.js';

export type RegistrationResult =
  | {
      success: true;
      employee: Employee;
    }
  | {
      success: false;
      error: string;
    };
