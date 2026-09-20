import type { RegistrationState } from '#domain/registration-state.js';

export interface RegistrationTransition {
  from: RegistrationState;
  to: RegistrationState;
}
