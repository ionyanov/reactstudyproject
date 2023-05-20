import type { FC } from 'react';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { saveJsonSettings, useJsonSettingsByKey } from '@/entities/User';
import { detectMobileDevice } from '@/shared/lib/detectDevice/detectMobileDevice';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Drawer } from '@/shared/ui/Drawer';
import { Modal } from '@/shared/ui/Modal';
import { Text } from '@/shared/ui/Text';

interface ArticlePageGreetingProps {
    className?: string;
}

export const ArticlePageGreeting: FC<ArticlePageGreetingProps> = (props) => {
    const { t } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);
    const articlesPageHasBeenOpen = useJsonSettingsByKey(
        'articlesPageHasBeenOpen',
    );
    const dispatch = useAppDispatch();
    const isMobile = detectMobileDevice();

    useEffect(() => {
        if (!articlesPageHasBeenOpen) {
            setIsOpen(true);
            dispatch(saveJsonSettings({ articlesPageHasBeenOpen: true }));
        }
    }, [articlesPageHasBeenOpen, dispatch]);

    const onClose: () => void = () => {
        setIsOpen(false);
    };

    const message = <Text title={t('Добро пожаловать на странице статей!')} />;

    if (isMobile) {
        return (
            <Drawer isOpen={isOpen} onClose={onClose}>
                {message}
            </Drawer>
        );
    }

    return (
        <Modal
            className={props.className}
            lazy
            isOpen={isOpen}
            onClose={onClose}>
            {message}
        </Modal>
    );
};
