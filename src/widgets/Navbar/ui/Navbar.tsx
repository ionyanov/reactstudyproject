import React, {type FC, useCallback, useState} from 'react'
import cls from './Navbar.module.scss'
import {classNames} from 'shared/lib/classNames/classNames'
import {Button, ButtonTheme} from 'shared/ui/Button/Button'
import {useTranslation} from 'react-i18next'
import {LoginModal} from 'features/AuthByUserName'

interface NavbarProps {
    className?: string
}

export const Navbar: FC<NavbarProps> = (props) => {
    const {t} = useTranslation()
    const [isAuthModal, setIsAuthModal] = useState(false)

    const onOpenModal = useCallback(() => {
        setIsAuthModal(true)
    }, [])

    const onCloseModal = useCallback(() => {
        setIsAuthModal(false)
    }, [])

    return (
        <div className={classNames(cls.navbar, {}, [props.className])}>
            <div className={cls.links}>
                <Button onClick={onOpenModal} theme={ButtonTheme.CLEAR_INVERTED}>
                    {t('Войти')}
                </Button>
            </div>
            <LoginModal isOpen={isAuthModal} onClose={onCloseModal}/>
        </div>
    )
}
