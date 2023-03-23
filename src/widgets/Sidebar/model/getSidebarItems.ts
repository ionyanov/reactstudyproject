import {createSelector} from '@reduxjs/toolkit'
import {getUserAuthData} from 'entities/User'
import {RoutePath} from 'shared/config/routeConfig/routeConfig'
import MainIcon from 'shared/assets/icons/main-page.svg'
import AboutIcon from 'shared/assets/icons/about-page.svg'
import ProfileIcon from 'shared/assets/icons/profile-20-20.svg'
import ArticleIcon from 'shared/assets/icons/article-20-20.svg'
import {type SidebarItemType} from 'widgets/Sidebar/model/Item'
import {type StateSchema} from 'app/providers/StoreProvider'

export const getSidebarItems: (state: StateSchema) => SidebarItemType[] = createSelector(getUserAuthData,
    (userData) => {
        const sidebarItemList: SidebarItemType[] = [
            {
                path: RoutePath.main,
                text: 'Main',
                Icon: MainIcon
            },
            {
                path: RoutePath.about,
                text: 'About',
                Icon: AboutIcon
            }
        ]
        if (userData) {
            sidebarItemList.push(
                {
                    path: RoutePath.profile + userData.id,
                    text: 'Profile',
                    Icon: ProfileIcon,
                    authOnly: true
                },
                {
                    path: RoutePath.articles,
                    text: 'Article',
                    Icon: ArticleIcon,
                    authOnly: true
                }
            )
        }
        return sidebarItemList
    })
