import {type FC} from 'react'
import {classNames} from 'shared/lib/classNames/classNames'
import cls from './ProfilePage.module.scss'
import {DynamicModuleLoader, type ReducerList} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import {EditableProfileCard, profileReducer} from 'features/EditableProfileCard'

const redusers: ReducerList = {
    profile: profileReducer
}

interface ProfilePageProps {
    className?: string
}

const ProfilePage: FC<ProfilePageProps> = (props) => {
    return (
        <DynamicModuleLoader reducers={redusers} removeAfterUnmount>
            <div className={classNames(cls.ProfilePage, {}, [props.className])}>
                <EditableProfileCard/>
            </div>
        </DynamicModuleLoader>
    )
}

export default ProfilePage
