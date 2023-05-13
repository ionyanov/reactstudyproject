import { rtkAPI } from '@/shared/api/rtkAPI';
import { type Notification } from '../model/types';

const notificationApi = rtkAPI.injectEndpoints({
    endpoints: (build) => ({
        getNotifications: build.query<Notification[], string>({
            query: (userId) => ({
                url: '/notifications',
                params: {
                    userId,
                },
            }),
        }),
    }),
});

export const useNotifications = notificationApi.useGetNotificationsQuery;
