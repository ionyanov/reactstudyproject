import {type FC, useEffect} from 'react'
import {classNames} from 'shared/lib/classNames/classNames'
import cls from './ProfilePage.module.scss'
import {DynamicModuleLoader, type ReducerList} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import {fetchProfileData, ProfileCard, profileReducer} from 'entities/Profile'
import {useAppDispatch} from 'shared/lib/hooks/useAppDispatch/useAppDispatch'

const redusers: ReducerList = {
    profile: profileReducer
}

interface ProfilePageProps {
    className?: string
}

const ProfilePage: FC<ProfilePageProps> = (props) => {
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(fetchProfileData({}))
    }, [dispatch])

    return (
        <DynamicModuleLoader reducers={redusers} removeAfterUnmount>
            <div className={classNames(cls.ProfilePage, {}, [props.className])}>
                <ProfileCard/>
            </div>
        </DynamicModuleLoader>
    )
}

export default ProfilePage
