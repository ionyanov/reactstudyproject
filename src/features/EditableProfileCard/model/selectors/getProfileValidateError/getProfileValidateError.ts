import { type ValidateProfileError } from '@/entities/Profile';
import { type StateSchema } from '@/shared/lib/providers/StoreProvider';

export function getProfileValidateError(
    state: StateSchema,
): ValidateProfileError[] {
    return state.profile?.validateError || [];
}
