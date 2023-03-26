import React, {type FC, useCallback, useState} from 'react'
import {useTranslation} from 'react-i18next'
import {useSelector} from 'react-redux'
import {LoginModal} from 'features/AuthByUserName'
import {LangSelector} from 'features/LangSelector/ui/LangSelector'
import {getUserAuthData, userActions} from 'entities/User'
import {classNames} from 'shared/lib/classNames/classNames'
import {useAppDispatch} from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import {Button, ButtonTheme} from 'shared/ui/Button/Button'
import cls from './Navbar.module.scss'

interface NavbarProps {
    className?: string
}

export const Navbar: FC<NavbarProps> = props => {
    const {t} = useTranslation()
    const authData = useSelector(getUserAuthData)
    const [isAuthModal, setIsAuthModal] = useState(false)
    const dispatch = useAppDispatch()

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
        <header className={classNames(cls.navbar, {}, [props.className])}>
            <div className={cls.links}>
                <LangSelector/>
                {
                    authData
                        ? <Button onClick={onLogout} theme={ButtonTheme.CLEAR_INVERTED}>
                            {t('Выйти')}
                        </Button>
                        : <>
                            <Button onClick={onOpenModal} theme={ButtonTheme.CLEAR_INVERTED}>
                                {t('Войти')}
                            </Button>
                            {isAuthModal &&
                                <LoginModal isOpen={isAuthModal} onClose={onCloseModal}/>
                            }
                        </>
                }
            </div>
        </header>
    )
}
