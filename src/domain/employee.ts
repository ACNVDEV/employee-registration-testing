import type { EmployeeType } from '#domain/employee-type.js';

export interface Employe {
  code: string;
  name: string;
  employeeType: EmployeeType;
  monthsInInstitution: number;
}
