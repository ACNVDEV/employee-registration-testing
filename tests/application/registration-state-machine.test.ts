import { describe, expect, test } from 'vitest';

import { transitionRegistrationState } from '../../src/application/registration-state-machine.js';

describe('registration state machine', () => {
  describe('valid transitions', () => {
    test.for([
      {
        from: 'START' as const,
        event: 'START_REGISTRATION' as const,
        to: 'CAPTURING' as const,
      },
      {
        from: 'CAPTURING' as const,
        event: 'SUBMIT_DATA' as const,
        to: 'VALIDATING' as const,
      },
      {
        from: 'CAPTURING' as const,
        event: 'CANCEL' as const,
        to: 'FINISHED' as const,
      },
      {
        from: 'VALIDATING' as const,
        event: 'VALIDATION_FAILED' as const,
        to: 'ERROR' as const,
      },
      {
        from: 'VALIDATING' as const,
        event: 'VALIDATION_SUCCEEDED' as const,
        to: 'REGISTERED' as const,
      },
      {
        from: 'ERROR' as const,
        event: 'RETRY' as const,
        to: 'CAPTURING' as const,
      },
      {
        from: 'ERROR' as const,
        event: 'CANCEL' as const,
        to: 'FINISHED' as const,
      },
      {
        from: 'REGISTERED' as const,
        event: 'FINISH' as const,
        to: 'FINISHED' as const,
      },
    ])('$from + $event -> $to', ({ from, event, to }) => {
      expect(transitionRegistrationState(from, event)).toEqual({
        from,
        to,
      });
    });
  });

  describe('invalid transitions', () => {
    test.for([
      {
        state: 'START' as const,
        event: 'FINISH' as const,
      },
      {
        state: 'CAPTURING' as const,
        event: 'VALIDATION_SUCCEEDED' as const,
      },
      {
        state: 'VALIDATING' as const,
        event: 'RETRY' as const,
      },
      {
        state: 'ERROR' as const,
        event: 'FINISH' as const,
      },
      {
        state: 'FINISHED' as const,
        event: 'START_REGISTRATION' as const,
      },
      {
        state: 'REGISTERED' as const,
        event: 'RETRY' as const,
      },
      {
        state: 'FINISHED' as const,
        event: 'FINISH' as const,
      },
    ])('rejects $state + $event', ({ state, event }) => {
      expect(() => transitionRegistrationState(state, event)).toThrow(
        `Transición inválida: ${state} -> ${event}`,
      );
    });
  });
});
