import { transitionRegistrationState } from '#application/registration-state-machine.js';

console.log(transitionRegistrationState('START', 'START_REGISTRATION'));

console.log(transitionRegistrationState('CAPTURING', 'SUBMIT_DATA'));

console.log(transitionRegistrationState('VALIDATING', 'VALIDATION_SUCCEEDED'));
