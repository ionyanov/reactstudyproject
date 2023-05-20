import type { FeatureFlag } from '@/shared/types/featureFlag';
import type { JsonSettings } from './jsonSettings';

export enum UserRole {
    ADMIN = 'ADMIN',
    USER = 'USER',
}

export interface User {
    id: string;
    username: string;
    roles?: UserRole[];
    avatar?: string;
    features?: FeatureFlag;
    jsonSettings?: JsonSettings;
}

export interface UserSchema {
    authData?: User;
    isInit: boolean;
}
