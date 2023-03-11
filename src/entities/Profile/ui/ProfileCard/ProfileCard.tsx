import {type FC} from 'react'
import {classNames} from 'shared/lib/classNames/classNames'
import cls from './ProfileCard.module.scss'
import {Text, TextAlign, TextTheme} from 'shared/ui/Text/Text'
import {useTranslation} from 'react-i18next'
import {Input} from 'shared/ui/Input/Input'
import {type Profile} from 'entities/Profile'
import {Loader} from 'shared/ui/Loader/Loader'
import {Avatar} from 'shared/ui/Avatar/Avatar'
import {type Currency, CurrencySelect} from 'entities/Currency'
import {type Country, CountrySelect} from 'entities/Country'

interface ProfileCardProps {
    className?: string
    data?: Profile
    error?: string
    isLoading?: boolean
    readOnly?: boolean
    onChangeFirstName?: (value: string) => void
    onChangeLastName?: (value: string) => void
    onChangeAge?: (value: string) => void
    onChangeCurrency?: (value: Currency) => void
    onChangeCountry?: (value: Country) => void
    onChangeCity?: (value: string) => void
    onChangeUserName?: (value: string) => void
    onChangeAvatar?: (value: string) => void
}

export const ProfileCard: FC<ProfileCardProps> = (props) => {
    const {t} = useTranslation('profile')

    if (props.isLoading) {
        return (
            <div className={classNames(cls.ProfileCard, {}, [props.className, cls.loader])}>
                <Loader/>
            </div>
        )
    }

    if (props.error) {
        return (
            <div className={classNames(cls.ProfileCard, {}, [props.className, cls.error])}>
                <Text
                    theme={TextTheme.ERROR}
                    title={t('Произошла ошибка при загрузке') || ''}
                    text={t('Попробуйте обновить страницу') || ''}
                    align={TextAlign.CENTER}
                />
            </div>
        )
    }

    const phsize = '150px'

    return (
        <div className={classNames(cls.ProfileCard, {[cls.editing]: !props.readOnly}, [props.className])}>
            <div className={cls.data}>
                {props.data?.avatar && (
                    <div className={cls.avatarWrapper}>
                        <Avatar src={props.data?.avatar}
                            text={t('Аватар') || ''}
                            size={150}
                        />
                    </div>
                )}
                <Input className={cls.input}
                    value={props.data?.firstname}
                    placeholder={t('Выше имя') || ''}
                    readonly={props.readOnly}
                    onChange={props.onChangeFirstName}
                    placeholdersize={phsize}
                />
                <Input className={cls.input}
                    value={props.data?.lastname}
                    placeholder={t('Выша фамилия') || ''}
                    readonly={props.readOnly}
                    onChange={props.onChangeLastName}
                    placeholdersize={phsize}
                />
                <Input className={cls.input}
                    value={props.data?.age}
                    type='number'
                    placeholder={t('Выш возраст') || ''}
                    readonly={props.readOnly}
                    onChange={props.onChangeAge}
                    placeholdersize={phsize}
                />
                <CountrySelect
                    className={cls.input}
                    title={t('Выша страна') || ''}
                    selected={props.data?.country}
                    readonly={props.readOnly}
                    onchange={props.onChangeCountry}
                    placeholdersize={phsize}
                />
                <Input className={cls.input}
                    value={props.data?.city}
                    placeholder={t('Выш город') || ''}
                    readonly={props.readOnly}
                    onChange={props.onChangeCity}
                    placeholdersize={phsize}
                />
                <CurrencySelect
                    className={cls.input}
                    title={t('Выша валюта') || ''}
                    readonly={props.readOnly}
                    selected={props.data?.currency}
                    onchange={props.onChangeCurrency}
                    placeholdersize={phsize}
                />
                <Input className={cls.input}
                    value={props.data?.username}
                    placeholder={t('Выш логин') || ''}
                    readonly={props.readOnly}
                    onChange={props.onChangeUserName}
                    placeholdersize={phsize}
                />
                <Input className={cls.input}
                    value={props.data?.avatar}
                    placeholder={t('Выша аватар') || ''}
                    readonly={props.readOnly}
                    onChange={props.onChangeAvatar}
                    placeholdersize={phsize}
                />
            </div>
        </div>
    )
}
