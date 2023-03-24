import {type FC} from 'react'
import {classNames} from 'shared/lib/classNames/classNames'
import cls from './ProfilePage.module.scss'
import {DynamicModuleLoader, type ReducerList} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import {EditableProfileCard, profileReducer} from 'features/EditableProfileCard'
import {Page} from 'shared/ui/Page/Page'

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
