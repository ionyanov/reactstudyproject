import { screen } from '@testing-library/react';
import { UserRole } from '@/entities/User';
import { ComponentRender } from '@/shared/config/tests/componentRender/componentRender';
import {
    getRouteAbout,
    getRouteAdmin,
    getRouteProfile,
} from '@/shared/const/router';
import AppRouter from './AppRouter';

describe('shared/lib/providers/AppRouter', function () {
    test('Страница открывается', async () => {
        ComponentRender(<AppRouter />, {
            route: getRouteAbout(),
        });

        const page = await screen.findByTestId('AboutPage');
        expect(page).toBeInTheDocument();
    });

    test('Страница не найдена', async () => {
        ComponentRender(<AppRouter />, {
            route: '/test',
        });

        const page = await screen.findByTestId('NotFoundPage');
        expect(page).toBeInTheDocument();
    });

    test('Редирект неавторизованного пользователя', async () => {
        ComponentRender(<AppRouter />, {
            route: getRouteProfile('1'),
        });

        const page = await screen.findByTestId('MainPage');
        expect(page).toBeInTheDocument();
    });

    test('Доступ к закрытой странице для пользователя без роли', async () => {
        ComponentRender(<AppRouter />, {
            route: getRouteAdmin(),
            initialState: {
                user: { isInit: true, authData: { roles: [UserRole.USER] } },
            },
        });

        const page = await screen.findByTestId('ForbiddenPage');
        expect(page).toBeInTheDocument();
    });

    test('Доступ к закрытой странице', async () => {
        ComponentRender(<AppRouter />, {
            route: getRouteAdmin(),
            initialState: {
                user: { isInit: true, authData: { roles: [UserRole.ADMIN] } },
            },
        });

        const page = await screen.findByTestId('AdminPanelPage');
        expect(page).toBeInTheDocument();
    });
});
