import {Menu} from '@headlessui/react'
import {type FC, Fragment, type JSXElementConstructor, type ReactElement, type ReactNode} from 'react'
import {classNames} from 'shared/lib/classNames/classNames'
import {AppLink} from 'shared/ui/AppLink/AppLink'
import {type DropdownDirection} from '../../../../types/ui'
import {Button} from '../../../Button/Button'
import {PopupDirectionStyle} from '../../styles/const'
import popupCls from '../../styles/popups.module.scss'
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

export const DropDown: FC<DropDownProps> = (props) => {
    return (
        <Menu as={'div'} className={classNames(cls.DropDown, {}, [props.className, popupCls.popup])}>
            <Menu.Button className={popupCls.trigger}>
                {props.trigger}
            </Menu.Button>
            <Menu.Items
                className={classNames(cls.menu, {}, [PopupDirectionStyle[props.direction || 'bottom right']])}>
                {props.items.map((item, index) => {
                    const content = ({active}: {active: boolean}): ReactElement<any, string | JSXElementConstructor<any>> => (
                        <Button
                            onClick={item.onClick}
                            disabled={item.unavailable}
                            className={classNames(cls.item, {[popupCls.active]: active}, [])}
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
