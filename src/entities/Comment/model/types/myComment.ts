import { type User } from '@/entities/User';

export interface MyComment {
    id: string;
    user: User;
    text: string;
}
