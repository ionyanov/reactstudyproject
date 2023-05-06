import {createSelector} from '@reduxjs/toolkit'
import {getUserAuthData} from '@/entities/User'
import AboutIcon from '@/shared/assets/icons/about-page.svg'
import ArticleIcon from '@/shared/assets/icons/article-20-20.svg'
import MainIcon from '@/shared/assets/icons/main-page.svg'
import ProfileIcon from '@/shared/assets/icons/profile-20-20.svg'
import {getRouteAbout, getRouteArticles, getRouteMain, getRouteProfile} from '@/shared/const/router'
import {type StateSchema} from '@/shared/lib/providers/StoreProvider'
import {type SidebarItemType} from './Item'

export const getSidebarItems: (state: StateSchema) => SidebarItemType[] = createSelector(getUserAuthData,
    (userData) => {
        const sidebarItemList: SidebarItemType[] = [
            {
                path: getRouteMain(),
                text: 'Main',
                Icon: MainIcon
            },
            {
                path: getRouteAbout(),
                text: 'About',
                Icon: AboutIcon
            }
        ]
        if (userData) {
            sidebarItemList.push(
                {
                    path: getRouteProfile(userData.id),
                    text: 'Profile',
                    Icon: ProfileIcon,
                    authOnly: true
                },
                {
                    path: getRouteArticles(),
                    text: 'Article',
                    Icon: ArticleIcon,
                    authOnly: true
                }
            )
        }
        return sidebarItemList
    })
