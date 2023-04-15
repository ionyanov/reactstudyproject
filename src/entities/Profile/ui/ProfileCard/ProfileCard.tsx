import {type FC} from 'react'
import {useTranslation} from 'react-i18next'
import {type Country, CountrySelect} from 'entities/Country'
import {type Currency, CurrencySelect} from 'entities/Currency'
import {classNames} from 'shared/lib/classNames/classNames'
import {Avatar} from 'shared/ui/Avatar/Avatar'
import {Input} from 'shared/ui/Input/Input'
import {Loader} from 'shared/ui/Loader/Loader'
import {HStack, VStack} from 'shared/ui/Stack'
import {Text, TextAlign, TextTheme} from 'shared/ui/Text/Text'
import {type Profile} from '../../model/types/profile'
import cls from './ProfileCard.module.scss'

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

    if (props.isLoading || !props.data) {
        return (
            <VStack gap={'8'} max className={classNames(cls.ProfileCard, {}, [props.className, cls.loader])}>
                <Loader/>
            </VStack>
        )
    }

    if (props.error) {
        return (
            <VStack gap={'8'} max className={classNames(cls.ProfileCard, {}, [props.className, cls.error])}>
                <Text
                    theme={TextTheme.ERROR}
                    title={t('Произошла ошибка при загрузке') || ''}
                    text={t('Попробуйте обновить страницу') || ''}
                    align={TextAlign.CENTER}
                />
            </VStack>
        )
    }

    const phsize = '150px'

    return (
        <VStack gap={'8'} max
            className={classNames(cls.ProfileCard, {[cls.editing]: !props.readOnly}, [props.className])}>
            {props.data.avatar && (
                <HStack max justify={'center'}>
                    <Avatar src={props.data.avatar}
                        text={t('Аватар') || ''}
                        size={150}
                    />
                </HStack>
            )}
            <Input className={cls.input}
                value={props.data.firstname}
                placeholder={t('Выше имя') || ''}
                readonly={props.readOnly}
                onChange={props.onChangeFirstName}
                placeholdersize={phsize}
                dataTestId={'ProfileCard.firstname'}
            />
            <Input className={cls.input}
                value={props.data.lastname}
                placeholder={t('Выша фамилия') || ''}
                readonly={props.readOnly}
                onChange={props.onChangeLastName}
                placeholdersize={phsize}
                dataTestId={'ProfileCard.lastname'}
            />
            <Input className={cls.input}
                value={props.data.age}
                type='number'
                placeholder={t('Выш возраст') || ''}
                readonly={props.readOnly}
                onChange={props.onChangeAge}
                placeholdersize={phsize}
                dataTestId={'ProfileCard.age'}
            />
            <CountrySelect
                className={cls.input}
                title={t('Выша страна') || ''}
                selected={props.data.country}
                readonly={props.readOnly}
                onchange={props.onChangeCountry}
                placeholdersize={phsize}
            />
            <Input className={cls.input}
                value={props.data.city}
                placeholder={t('Выш город') || ''}
                readonly={props.readOnly}
                onChange={props.onChangeCity}
                placeholdersize={phsize}
                dataTestId={'ProfileCard.city'}
            />
            <CurrencySelect
                className={cls.input}
                title={t('Выша валюта') || ''}
                readonly={props.readOnly}
                selected={props.data.currency}
                onchange={props.onChangeCurrency}
                placeholdersize={phsize}
            />
            <Input className={cls.input}
                value={props.data.username}
                placeholder={t('Выш логин') || ''}
                readonly={props.readOnly}
                onChange={props.onChangeUserName}
                placeholdersize={phsize}
                dataTestId={'ProfileCard.username'}
            />
            <Input className={cls.input}
                value={props.data.avatar}
                placeholder={t('Выша аватар') || ''}
                readonly={props.readOnly}
                onChange={props.onChangeAvatar}
                placeholdersize={phsize}
                dataTestId={'ProfileCard.avatar'}
            />
        </VStack>
    )
}
