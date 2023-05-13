import { type StateSchema } from '@/shared/lib/providers/StoreProvider';
import { getError } from './getError';

describe('getError', () => {
    test('Should return error', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: { error: 'error' },
        };
        expect(getError(state as StateSchema)).toEqual('error');
    });

    test('Should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getError(state as StateSchema)).toEqual('');
    });
});
