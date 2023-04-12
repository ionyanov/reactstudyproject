import {Listbox as HListBox} from '@headlessui/react'
import {type FC, Fragment, type ReactNode} from 'react'
import {classNames} from 'shared/lib/classNames/classNames'
import {Button} from 'shared/ui/Button/Button'
import {HStack} from 'shared/ui/Stack'
import {type DropdownDirection} from '../../types/ui'
import cls from './ListBox.module.scss'

export interface ListBoxItem {
    value: string
    content: ReactNode
    unavailable: boolean
}

interface ListBoxProps {
    className?: string
    items: ListBoxItem[]
    value?: string
    defaultValue?: string
    onChange: <T extends string>(value: T) => void
    readonly?: boolean
    direction?: DropdownDirection
    label?: string
}

const DropdownDirectionStyle: Record<DropdownDirection, string> = {
    'top left': cls.topLeft,
    'top right': cls.topRight,
    'bottom left': cls.bottomLeft,
    'bottom right': cls.bottomRight
}

export const ListBox: FC<ListBoxProps> = (props) => {
    return (
        <HStack gap={'4'}>
            {props.label && <span>{props.label}</span>}
            <HListBox as={'div'}
                disabled={props.readonly}
                className={classNames(cls.ListBox, {}, [props.className])}
                value={props.value}
                onChange={props.onChange}>
                <HListBox.Button as={'div'} className={cls.openBnt}>
                    <Button disabled={props.readonly}>
                        {props.value ?? props.defaultValue}
                    </Button>
                </HListBox.Button>
                <HListBox.Options
                    className={classNames(cls.options, {}, [DropdownDirectionStyle[props.direction || 'bottom right']])}>
                    {props.items.map((item) => (
                        <HListBox.Option
                            key={item.value}
                            value={item.value}
                            disabled={item.unavailable}
                            as={Fragment}
                        >
                            {({active, selected}) => (
                                <li className={classNames(cls.item,
                                    {[cls.active]: active, [cls.unavailable]: item.unavailable},
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
