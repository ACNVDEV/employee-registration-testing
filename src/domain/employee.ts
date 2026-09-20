import type { EmployeeType } from '#domain/employee-type.js';

export interface Employee {
  code: string;
  name: string;
  employeeType: EmployeeType;
  monthsInInstitution: number;
}
