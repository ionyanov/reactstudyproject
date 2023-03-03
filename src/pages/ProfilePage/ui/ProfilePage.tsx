import {type FC} from 'react'
import {classNames} from 'shared/lib/classNames/classNames'
import cls from './ProfilePage.module.scss'
import {useTranslation} from 'react-i18next'
import {DynamicModuleLoader, type ReducerList} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import {profileReducer} from 'entities/Profile'

const redusers: ReducerList = {
    profile: profileReducer
}

interface ProfilePageProps {
    className?: string
}

const ProfilePage: FC<ProfilePageProps> = (props) => {
    const {t} = useTranslation()

    return (
        <DynamicModuleLoader reducers={redusers} removeAfterUnmount={true}>
            <div className={classNames(cls.ProfilePage, {}, [props.className])}>
                {t('ProfilePage')}
            </div>
        </DynamicModuleLoader>
    )
}

export default ProfilePage
