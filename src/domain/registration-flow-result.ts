import type { RegistrationResult } from '#domain/registration-result.js';
import type { RegistrationState } from '#domain/registration-state.js';

export interface RegistrationFlowResult {
  state: RegistrationState;
  result: RegistrationResult;
}
