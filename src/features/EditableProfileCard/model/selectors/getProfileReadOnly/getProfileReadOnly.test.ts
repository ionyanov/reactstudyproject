import { type StateSchema } from '@/shared/lib/providers/StoreProvider';
import { getProfileReadOnly } from './getProfileReadOnly';

describe('getProfileReadOnly', () => {
    test('Should return value', () => {
        const state: DeepPartial<StateSchema> = {
            profile: { readOnly: true },
        };
        expect(getProfileReadOnly(state as StateSchema)).toEqual(true);
    });

    test('Should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileReadOnly(state as StateSchema)).toEqual(undefined);
    });
});
