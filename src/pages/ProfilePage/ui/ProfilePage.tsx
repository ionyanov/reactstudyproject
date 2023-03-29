import {type FC} from 'react'
import {Page} from 'widgets/Page'
import {EditableProfileCard, profileReducer} from 'features/EditableProfileCard'
import {classNames} from 'shared/lib/classNames/classNames'
import {DynamicModuleLoader, type ReducerList} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import cls from './ProfilePage.module.scss'

const reducers: ReducerList = {
    profile: profileReducer
}

interface ProfilePageProps {
    className?: string
}

const ProfilePage: FC<ProfilePageProps> = (props) => {
    return (
        <DynamicModuleLoader reducers={reducers}>
            <Page className={classNames(cls.ProfilePage, {}, [props.className])}>
                <EditableProfileCard/>
            </Page>
        </DynamicModuleLoader>
    )
}

export default ProfilePage
