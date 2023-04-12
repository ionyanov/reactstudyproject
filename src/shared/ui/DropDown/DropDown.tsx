import {Menu} from '@headlessui/react'
import {type FC, Fragment, type ReactNode} from 'react'
import {useTranslation} from 'react-i18next'
import {classNames} from 'shared/lib/classNames/classNames'
import {AppLink} from 'shared/ui/AppLink/AppLink'
import {type DropdownDirection} from '../../types/ui'
import {Button} from '../Button/Button'
import cls from './DropDown.module.scss'

export interface DropDownItem {
    unavailable?: boolean
    content: ReactNode
    onClick?: () => void
    href?: string
}

interface DropDownProps {
    className?: string
    items: DropDownItem[]
    trigger: ReactNode
    direction?: DropdownDirection
}

const DropdownDirectionStyle: Record<DropdownDirection, string> = {
    'top left': cls.topLeft,
    'top right': cls.topRight,
    'bottom left': cls.bottomLeft,
    'bottom right': cls.bottomRight
}

export const DropDown: FC<DropDownProps> = (props) => {
    const {t} = useTranslation()

    return (
        <Menu as={'div'} className={classNames(cls.DropDown, {}, [props.className])}>
            <Menu.Button className={cls.btn}>
                {props.trigger}
            </Menu.Button>
            <Menu.Items
                className={classNames(cls.menu, {}, [DropdownDirectionStyle[props.direction || 'bottom right']])}>
                {props.items.map((item, index) => {
                    const content = ({active}: {active: boolean}) => (
                        <Button
                            onClick={item.onClick}
                            disabled={item.unavailable}
                            className={classNames(cls.item, {[cls.active]: active}, [])}
                        >
                            {item.content}
                        </Button>
                    )
                    if (item.href) {
                        return (
                            <Menu.Item as={AppLink} to={item.href} key={index} disabled={item.unavailable}>
                                {content}
                            </Menu.Item>
                        )
                    }
                    return (
                        <Menu.Item as={Fragment} key={index} disabled={item.unavailable}>
                            {content}
                        </Menu.Item>
                    )
                })}
            </Menu.Items>
        </Menu>
    )
}
