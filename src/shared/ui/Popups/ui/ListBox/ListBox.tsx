import {Listbox as HListBox} from '@headlessui/react'
import {Fragment, type JSXElementConstructor, type ReactElement, type ReactNode} from 'react'
import {classNames} from '@/shared/lib/classNames/classNames'
import {type DropdownDirection} from '../../../../types/ui'
import {Button} from '../../../Button/Button'
import {HStack} from '../../../Stack'
import {PopupDirectionStyle} from '../../styles/const'
import popupCls from '../../styles/popups.module.scss'
import cls from './ListBox.module.scss'

export interface ListBoxItem<T> {
    value: T
    content: ReactNode
    unavailable: boolean
}

interface ListBoxProps<T> {
    className?: string
    items: Array<ListBoxItem<T>>
    value?: T
    defaultValue?: T
    onChange: <T extends string>(value: T) => void
    readonly?: boolean
    direction?: DropdownDirection
    label?: string
}

export const ListBox: <T extends string>(props: ListBoxProps<T>) => JSX.Element = <T extends string>(props: ListBoxProps<T>) => {
    return (
        <HStack gap={'4'}>
            {props.label && <span>{props.label}</span>}
            <HListBox as={'div'}
                disabled={props.readonly}
                className={classNames(popupCls.popup, {}, [props.className])}
                value={props.value}
                onChange={props.onChange}>
                <HListBox.Button as={'div'} className={popupCls.trigger}>
                    <Button disabled={props.readonly}>
                        {props.value ?? props.defaultValue}
                    </Button>
                </HListBox.Button>
                <HListBox.Options
                    className={classNames(cls.options, {}, [PopupDirectionStyle[props.direction || 'bottom right']])}>
                    {props.items.map((item) => (
                        <HListBox.Option
                            key={item.value}
                            value={item.value}
                            disabled={item.unavailable}
                            as={Fragment}
                        >
                            {({active, selected}): ReactElement<any, string | JSXElementConstructor<any>> => (
                                <li className={classNames(cls.item,
                                    {[popupCls.active]: active, [popupCls.unavailable]: item.unavailable},
                                    [props.className])}>
                                    {selected && '>'}
                                    {item.content}
                                </li>
                            )}
                        </HListBox.Option>
                    ))}
                </HListBox.Options>
            </HListBox>
        </HStack>
    )
}
