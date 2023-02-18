import React, {type FC} from 'react'
import cls from './Navbar.module.scss'
import {classNames} from 'shared/lib/classNames/classNames'
import {useTranslation} from 'react-i18next'

interface NavbarProps {
    className?: string
}

export const Navbar: FC<NavbarProps> = (props) => {
    const {t} = useTranslation()

    return (
        <div className={classNames(cls.navbar, {}, [props.className])}>
            <div className={cls.links}>
                /
            </div>
        </div>
    )
}
