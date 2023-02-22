import {type FC} from 'react'
import {classNames} from 'shared/lib/classNames/classNames'
import cls from './LoginForm.module.scss'
import {useTranslation} from 'react-i18next'
import {Button, ButtonTheme} from 'shared/ui/Button/Button'
import {Input, PlaceHolderSize} from 'shared/ui/Input/Input'

interface LoginFormProps {
    className?: string
}

export const LoginForm: FC<LoginFormProps> = (props) => {
    const {t} = useTranslation()

    return (
        <div className={classNames(cls.LoginForm, {}, [props.className])}>
            <Input className={cls.input}
                placeholder={t('Введите логин')}
                authFocus
                placeholdersize={PlaceHolderSize.PHS_40}
            />
            <Input className={cls.input}
                placeholder={t('Введите пароль')}
                placeholdersize={PlaceHolderSize.PHS_40}
            />
            <Button className={cls.loginBtn}
                theme={ButtonTheme.BACKGROUND_INVERTED}
            >
                {t('Войти')}
            </Button>
        </div>
    )
}
