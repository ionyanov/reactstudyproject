import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import {
    type Profile,
    type ProfileSchema,
    ValidateProfileError,
} from '@/entities/Profile';
import { updateProfileData } from '../servises/updateProfileData/updateProfileData';
import { profileActions, profileReducer } from './profileSlice';

const data: Profile = {
    firstname: 'firstname',
    lastname: 'lastname',
    age: 20,
    country: Country.GB,
    city: 'city',
    currency: Currency.EUR,
    username: 'username',
};

describe('profileSlice', () => {
    test('test set readonly', () => {
        const state = { readOnly: false } as DeepPartial<ProfileSchema>;
        expect(
            profileReducer(
                state as ProfileSchema,
                profileActions.setReadonly(true),
            ),
        ).toEqual({ readOnly: true });
    });

    test('test cancel edit', () => {
        const state: DeepPartial<ProfileSchema> = { data, form: {} };

        expect(
            profileReducer(state as ProfileSchema, profileActions.cancelEdit()),
        ).toEqual({
            readOnly: true,
            validateError: undefined,
            data,
            form: data,
        });
    });

    test('test update profile', () => {
        const state: DeepPartial<ProfileSchema> = { form: { username: '123' } };

        expect(
            profileReducer(
                state as ProfileSchema,
                profileActions.setProfile({
                    username: '123456',
                }),
            ),
        ).toEqual({
            form: { username: '123456' },
        });
    });

    test('test update profile service pending', () => {
        const state = {
            isLoading: false,
            validateError: [ValidateProfileError.SERVER_ERROR],
        } as DeepPartial<ProfileSchema>;

        expect(
            profileReducer(state as ProfileSchema, updateProfileData.pending),
        ).toEqual({
            error: '',
            isLoading: true,
            validateError: undefined,
        });
    });

    test('test update profile service fullfiled', () => {
        const state: DeepPartial<ProfileSchema> = {
            isLoading: true,
        };

        expect(
            profileReducer(
                state as ProfileSchema,
                updateProfileData.fulfilled(data, '', '1'),
            ),
        ).toEqual({
            isLoading: false,
            readOnly: true,
            validateError: undefined,
            form: data,
            data,
        });
    });
});
