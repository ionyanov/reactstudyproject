import React, {type FC, useCallback, useState} from 'react'
import {useTranslation} from 'react-i18next'
import {useSelector} from 'react-redux'
import {LoginModal} from 'features/AuthByUserName'
import {LangSelector} from 'features/LangSelector/ui/LangSelector'
import {getUserAuthData, userActions} from 'entities/User'
import {RoutePath} from 'shared/config/routeConfig/routeConfig'
import {classNames} from 'shared/lib/classNames/classNames'
import {useAppDispatch} from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import {AppLink, AppLinkTheme} from 'shared/ui/AppLink/AppLink'
import {Avatar} from 'shared/ui/Avatar/Avatar'
import {Button, ButtonTheme} from 'shared/ui/Button/Button'
import {DropDown} from 'shared/ui/DropDown/DropDown'
import {HStack} from 'shared/ui/Stack'
import {Text, TextTheme} from 'shared/ui/Text/Text'
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

    if (authData) {
        return (
            <HStack justify={'between'} max className={classNames(cls.navbar, {}, [props.className])}>
                <Text title={t('SITE NAME')}
                    theme={TextTheme.INVERTED}
                    className={cls.siteName}
                />
                <AppLink to={RoutePath.article_create}
                    theme={AppLinkTheme.SECONDARY}
                    className={cls.createArticle}
                >
                    {t('Новая статья')}
                </AppLink>
                <HStack gap={'16'}>
                    <LangSelector/>
                    <DropDown
                        direction={'bottom left'}
                        trigger={<Avatar src={authData.avatar} size={30}/>}
                        items={[
                            {content: t('Выйти'), onClick: onLogout},
                            {content: t('Профиль'), href: RoutePath.profile + authData.id}
                        ]}
                    />
                </HStack>
            </HStack>
        )
    }

    return (
        <HStack justify={'between'} max className={classNames(cls.navbar, {}, [props.className])}>
            <Text title={t('SITE NAME')}
                theme={TextTheme.INVERTED}
                className={cls.siteName}
            />
            <HStack gap={'16'}>
                <LangSelector/>
                <Button onClick={onOpenModal} theme={ButtonTheme.CLEAR_INVERTED}>
                    {t('Войти')}
                </Button>
                {isAuthModal && <LoginModal isOpen={isAuthModal} onClose={onCloseModal}/>
                }
            </HStack>
        </HStack>
    )
}
