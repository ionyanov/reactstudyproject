import {type FC, memo, useCallback} from 'react'
import {classNames} from 'shared/lib/classNames/classNames'
import cls from './LoginForm.module.scss'
import {useTranslation} from 'react-i18next'
import {Button, ButtonTheme} from 'shared/ui/Button/Button'
import {Input, PlaceHolderSize} from 'shared/ui/Input/Input'
import {Text, TextTheme} from 'shared/ui/Text/Text'
import {useSelector} from 'react-redux'
import {DynamicModuleLoader, type ReducerList} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import {loginActions, loginReducer} from '../../model/slice/loginSlice'
import {loginByUsername} from '../../model/services/loginByUsername/loginByUsername'
import {getUserName} from '../../model/selectors/getUserName/getUserName'
import {getIsLoading} from '../../model/selectors/getIsLoading/getIsLoading'
import {getError} from '../../model/selectors/getError/getError'
import {getPassword} from '../../model/selectors/getPassword/getPassword'
import {useAppDispatch} from 'shared/lib/hooks/useAppDispatch/useAppDispatch'

export interface LoginFormProps {
    className?: string
    onSuccess?: () => void
}

const reducers: ReducerList = {
    loginForm: loginReducer
}

const LoginForm: FC<LoginFormProps> = memo((props: LoginFormProps) => {
    const {t} = useTranslation()
    const dispatch = useAppDispatch()
    const username = useSelector(getUserName)
    const password = useSelector(getPassword)
    const error = useSelector(getError)
    const isLoading = useSelector(getIsLoading)

    const onChangeUserName = useCallback((value: string) => {
        dispatch(loginActions.setUserName(value))
    }, [dispatch])

    const onChangePassword = useCallback((value: string) => {
        dispatch(loginActions.setPassword(value))
    }, [dispatch])

    const onLogin = useCallback(async () => {
        const [result] = await Promise.all([dispatch(loginByUsername({username, password}))])
        if (result.meta.requestStatus === 'fulfilled') {
            props.onSuccess?.()
        }
    }, [dispatch, username, password, props])

    return (
        <DynamicModuleLoader reducers={reducers}>
            <div className={classNames(cls.LoginForm, {}, [props.className])}>
                <Text title={t('Авторизация') || ''}/>
                {error &&
                    <Text theme={TextTheme.ERROR}
                        text={t('Неверное имя пользователя или пароль') || ''}/>
                }
                <Input className={cls.input}
                    placeholder={t('Введите логин') || ''}
                    authFocus
                    placeholdersize={PlaceHolderSize.PHS_40}
                    onChange={onChangeUserName}
                    value={username}
                />
                <Input type={'password'}
                    className={cls.input}
                    placeholder={t('Введите пароль') || ''}
                    placeholdersize={PlaceHolderSize.PHS_40}
                    onChange={onChangePassword}
                    value={password}
                />
                <Button className={cls.loginBtn}
                    theme={ButtonTheme.OUTLINE}
                    onClick={onLogin}
                    disabled={isLoading}
                >
                    {t('Войти') || ''}
                </Button>
            </div>
        </DynamicModuleLoader>
    )
})

LoginForm.displayName = 'LoginForm'

export default LoginForm
