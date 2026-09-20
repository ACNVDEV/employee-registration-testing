import type { RegistrationEvent } from '#domain/registration-event.js';
import type { RegistrationState } from '#domain/registration-state.js';
import type { RegistrationTransition } from '#domain/registration-transition.js';

export const transitionRegistrationState = (
  state: RegistrationState,
  event: RegistrationEvent,
): RegistrationTransition => {
  switch (state) {
    case 'START':
      if (event === 'START_REGISTRATION') {
        return {
          from: state,
          to: 'CAPTURING',
        };
      }

      break;

    case 'CAPTURING':
      if (event === 'SUBMIT_DATA') {
        return {
          from: state,
          to: 'VALIDATING',
        };
      }

      if (event === 'CANCEL') {
        return {
          from: state,
          to: 'FINISHED',
        };
      }

      break;

    case 'VALIDATING':
      if (event === 'VALIDATION_FAILED') {
        return {
          from: state,
          to: 'ERROR',
        };
      }

      if (event === 'VALIDATION_SUCCEEDED') {
        return {
          from: state,
          to: 'REGISTERED',
        };
      }

      break;

    case 'ERROR':
      if (event === 'RETRY') {
        return {
          from: state,
          to: 'CAPTURING',
        };
      }

      if (event === 'CANCEL') {
        return {
          from: state,
          to: 'FINISHED',
        };
      }

      break;

    case 'REGISTERED':
      if (event === 'FINISH') {
        return {
          from: state,
          to: 'FINISHED',
        };
      }

      break;

    case 'FINISHED':
      break;
  }

  throw new Error(`Transición inválida: ${state} -> ${event}`);
};
