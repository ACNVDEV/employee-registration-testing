export type RegistrationEvent =
  | 'START_REGISTRATION'
  | 'SUBMIT_DATA'
  | 'VALIDATION_FAILED'
  | 'VALIDATION_SUCCEEDED'
  | 'RETRY'
  | 'CANCEL'
  | 'FINISH';
