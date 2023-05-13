import { type FC } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { Page } from '@/widgets/Page';
import { EditableProfileCard } from '@/features/EditableProfileCard';
import { classNames } from '@/shared/lib/classNames/classNames';
import type { TestProps } from '@/shared/types/tests';
import { Text, TextTheme } from '@/shared/ui/Text';
import cls from './ProfilePage.module.scss';

interface ProfilePageProps extends TestProps {
    className?: string;
}

const ProfilePage: FC<ProfilePageProps> = (props) => {
    const { t } = useTranslation('profile');
    const { id } = useParams<{ id: string }>();
    if (!id) {
        return (
            <Page
                className={classNames(cls.ProfilePage, {}, [props.className])}
                data-testid={'ProfilePage'}>
                <Text theme={TextTheme.ERROR} text={t('Профиль не найден!')} />
            </Page>
        );
    }

    return (
        <Page
            className={classNames(cls.ProfilePage, {}, [props.className])}
            data-testid={'ProfilePage'}>
            <EditableProfileCard id={id} />
        </Page>
    );
};

export default ProfilePage;
