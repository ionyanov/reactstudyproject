import React, {type FC, useCallback, useState} from 'react'
import cls from './Navbar.module.scss'
import {classNames} from 'shared/lib/classNames/classNames'
import {Modal} from "shared/ui/Modal/Modal";
import {Button, ButtonTheme} from "shared/ui/Button/Button";
import {useTranslation} from "react-i18next";

interface NavbarProps {
    className?: string
}

export const Navbar: FC<NavbarProps> = (props) => {
    const {t} = useTranslation();
    const [isAuthModal, setIsAuthModal] = useState(false);

    const onToggleModal = useCallback(() => {
        setIsAuthModal((prev) => !prev)
    }, [])

    return (
        <div className={classNames(cls.navbar, {}, [props.className])}>
            <div className={cls.links}>
                <Button onClick={onToggleModal} theme={ButtonTheme.CLEAR_INVERTED}>
                    {t('Войти')}
                </Button>
            </div>
            <Modal isOpen={isAuthModal} onClose={onToggleModal}>
                dfgfkjglkdf
            </Modal>
        </div>
    )
}
