import {Popover as HPopover} from '@headlessui/react'
import {type FC, type ReactNode} from 'react'
import {classNames} from 'shared/lib/classNames/classNames'
import {PopupDirectionStyle} from 'shared/ui/Popups/styles/const'
import {type DropdownDirection} from '../../../../types/ui'
import popupCls from '../../styles/popups.module.scss'
import cls from './Popover.module.scss'

interface PopoverProps {
    className?: string
    trigger: ReactNode
    direction?: DropdownDirection
    children: ReactNode
}

export const Popover: FC<PopoverProps> = (props) => {
    return (
        <HPopover className={classNames(popupCls.popup, {}, [props.className])}>
            <HPopover.Button className={popupCls.trigger}>
                {props.trigger}
            </HPopover.Button>
            <HPopover.Panel
                className={classNames(cls.panel, {}, [PopupDirectionStyle[props.direction || 'bottom right']])}>
                {props.children}
            </HPopover.Panel>
        </HPopover>
    )
}
