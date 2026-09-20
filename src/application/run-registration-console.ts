import { stdin as input, stdout as output } from 'node:process';
import { createInterface } from 'node:readline/promises';

import type { EmployeeInput } from '#domain/employee-input.js';

import { processRegistration } from '#application/registration-flow.js';

export const runRegistrationConsole = async (): Promise<void> => {
  const readline = createInterface({
    input,
    output,
  });

  console.log('\n=== REGISTRO DE EMPLEADOS ===\n');

  try {
    let finished = false;

    while (!finished) {
      const code = await readline.question('Código del empleado: ');
      const name = await readline.question('Nombre del empleado: ');

      const employeeTypeInput = await readline.question(
        'Tipo de empleado (0 = término fijo, 1 = planta): ',
      );

      const institutionTimeInput = await readline.question('Tiempo en la institución (meses): ');

      const employeeInput: EmployeeInput = {
        code,
        name,
        employeeType: Number(employeeTypeInput),
        monthsInInstitution: Number(institutionTimeInput),
      };

      const registration = processRegistration(employeeInput);

      if (registration.result.success) {
        console.log('\nEmpleado registrado correctamente.');
        console.log(registration.result.employee);

        finished = true;
        continue;
      }

      console.error(`\n${registration.result.error}`);

      const option = await readline.question('\n¿Desea corregir los datos? (s/n): ');

      if (option.trim().toLowerCase() !== 's') {
        console.log('\nRegistro cancelado.');
        finished = true;
      } else {
        console.log('\nIngrese nuevamente los datos.\n');
      }
    }
  } finally {
    readline.close();
  }
};
