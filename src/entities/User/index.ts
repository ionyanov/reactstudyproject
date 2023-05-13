export * from './model/slice/userSlice';
export { type UserSchema, type User, UserRole } from './model/types/user';

export {
    getUserAuthData,
    getUserIsInit,
    getUserRoles,
    getUserAdmin,
} from './model/selectors/userSelectors';
