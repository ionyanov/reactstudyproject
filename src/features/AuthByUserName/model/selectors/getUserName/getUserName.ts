import { type StateSchema } from '@/shared/lib/providers/StoreProvider';

export function getUserName(state: StateSchema): string {
    return state?.loginForm?.username || '';
}
