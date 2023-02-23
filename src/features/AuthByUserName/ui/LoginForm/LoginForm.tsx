import {type FC, memo, useCallback} from 'react'
import {classNames} from 'shared/lib/classNames/classNames'
import cls from './LoginForm.module.scss'
import {useTranslation} from 'react-i18next'
import {Button, ButtonTheme} from 'shared/ui/Button/Button'
import {Input, PlaceHolderSize} from 'shared/ui/Input/Input'
import {useDispatch, useSelector} from 'react-redux'
import {loginActions} from '../../model/slice/loginSlice'
import {getLoginState} from '../../model/selectors/getLoginState/getLoginState'
import {loginByUsername} from '../../model/services/loginByUsername/loginByUsername'
import {Text, TextTheme} from 'shared/ui/Text/Text'

interface LoginFormProps {
    className?: string
}

const LoginForm: FC<LoginFormProps> = memo((props: LoginFormProps) => {
    const {t} = useTranslation()
    const dispatch = useDispatch()
    const {username, password, error, isLoading} = useSelector(getLoginState)

    const onChangeUserName = useCallback((value: string) => {
        dispatch(loginActions.setUserName(value))
    }, [dispatch])

    const onChangePassword = useCallback((value: string) => {
        dispatch(loginActions.setPassword(value))
    }, [dispatch])

    const onLogin = useCallback(() => {
        // @ts-expect-error ERR
        dispatch(loginByUsername({username, password}))
    }, [dispatch, username, password])

    return (
        <div className={classNames(cls.LoginForm, {}, [props.className])}>
            <Text title={t('Авторизация')}/>
            {error &&
                <Text theme={TextTheme.ERROR}
                    text={error}/>
            }
            <Input className={cls.input}
                placeholder={t('Введите логин')}
                authFocus
                placeholdersize={PlaceHolderSize.PHS_40}
                onChange={onChangeUserName}
                value={username}
            />
            <Input type={'password'}
                className={cls.input}
                placeholder={t('Введите пароль')}
                placeholdersize={PlaceHolderSize.PHS_40}
                onChange={onChangePassword}
                value={password}
            />
            <Button className={cls.loginBtn}
                theme={ButtonTheme.OUTLINE}
                onClick={onLogin}
                disabled={isLoading}
            >
                {t('Войти')}
            </Button>
        </div>
    )
})

LoginForm.displayName = 'LoginForm'

export {LoginForm}
