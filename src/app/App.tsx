import './styles/index.scss';
import React, { type FC, useEffect, Suspense } from 'react';
import { useSelector } from 'react-redux';
import { Navbar } from '@/widgets/Navbar';
import PageLoader from '@/widgets/PageLoader';
import { Sidebar } from '@/widgets/Sidebar';
import { getUserIsInit, initAuthData } from '@/entities/User';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useTheme } from '@/shared/lib/providers/ThemeProvider/lib/useTheme';
import { AppRouter } from './providers/AppRouter';

const App: FC = () => {
    const { theme } = useTheme();
    const dispatch = useAppDispatch();
    const isInit = useSelector(getUserIsInit);

    useEffect(() => {
        dispatch(initAuthData());
    }, [dispatch]);

    if (!isInit) {
        return <PageLoader />;
    }

    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback="">
                <Navbar />
                <div className="content-page">
                    <Sidebar />
                    {isInit && <AppRouter />}
                </div>
            </Suspense>
        </div>
    );
};

export default App;
