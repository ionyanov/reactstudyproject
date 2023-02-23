import React, {type FC, useCallback, useState} from 'react'
import cls from './Navbar.module.scss'
import {classNames} from 'shared/lib/classNames/classNames'
import {Button, ButtonTheme} from 'shared/ui/Button/Button'
import {useTranslation} from 'react-i18next'
import {useDispatch, useSelector} from 'react-redux'
import {getUserAuthData, userActions} from 'entities/User'
import {LoginModal} from 'features/AuthByUserName'

interface NavbarProps {
    className?: string
}

export const Navbar: FC<NavbarProps> = (props) => {
    const {t} = useTranslation()
    const authData = useSelector(getUserAuthData)
    const [isAuthModal, setIsAuthModal] = useState(false)
    const dispatch = useDispatch()

    const onOpenModal = useCallback(() => {
        setIsAuthModal(true)
    }, [])

    const onCloseModal = useCallback(() => {
        setIsAuthModal(false)
    }, [])

    const onLogout = useCallback(() => {
        dispatch(userActions.logout())
    }, [dispatch])

    return (
        <div className={classNames(cls.navbar, {}, [props.className])}>
            <div className={cls.links}>
                {
                    authData
                        ? <Button onClick={onLogout} theme={ButtonTheme.CLEAR_INVERTED}>
                            {t('Выйти')}
                        </Button>
                        : <>
                            <Button onClick={onOpenModal} theme={ButtonTheme.CLEAR_INVERTED}>
                                {t('Войти')}
                            </Button>
                            <LoginModal isOpen={isAuthModal} onClose={onCloseModal}/>
                        </>
                }
            </div>
        </div>
    )
}
