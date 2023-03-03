import type React from 'react'
import {RoutePath} from 'shared/config/routeConfig/routeConfig'
import MainIcon from 'shared/assets/icons/main-page.svg'
import AboutIcon from 'shared/assets/icons/about-page.svg'

export interface SidebarItemType {
    path: string
    text: string
    Icon?: React.FunctionComponent<React.SVGAttributes<SVGElement>>
}

export const SidebarItemList: SidebarItemType[] = [
    {
        path: RoutePath.main,
        text: 'Main',
        Icon: MainIcon
    },
    {
        path: RoutePath.about,
        text: 'About',
        Icon: AboutIcon
    },
    {
        path: RoutePath.profile,
        text: 'Profile',
        Icon: MainIcon
    }
]
