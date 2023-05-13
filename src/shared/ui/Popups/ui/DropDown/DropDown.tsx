import { Menu } from '@headlessui/react';
import {
    type FC,
    Fragment,
    type JSXElementConstructor,
    type ReactElement,
    type ReactNode,
} from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { type DropdownDirection } from '../../../../types/ui';
import { AppLink } from '../../../AppLink/AppLink';
import { PopupDirectionStyle } from '../../styles/const';
import popupCls from '../../styles/popups.module.scss';
import cls from './DropDown.module.scss';

export interface DropDownItem {
    unavailable?: boolean;
    content: ReactNode;
    onClick?: () => void;
    href?: string;
}

interface DropDownProps {
    className?: string;
    items: DropDownItem[];
    trigger: ReactNode;
    direction?: DropdownDirection;
}

export const DropDown: FC<DropDownProps> = (props) => {
    return (
        <Menu
            as={'div'}
            className={classNames(cls.DropDown, {}, [
                props.className,
                popupCls.popup,
            ])}>
            <Menu.Button as={'div'} className={popupCls.trigger}>
                {props.trigger}
            </Menu.Button>
            <Menu.Items
                className={classNames(cls.menu, {}, [
                    PopupDirectionStyle[props.direction || 'bottom right'],
                ])}>
                {props.items.map((item, index) => {
                    const content = ({
                        active,
                    }: {
                        active: boolean;
                    }): ReactElement<
                        any,
                        string | JSXElementConstructor<any>
                    > => (
                        <button
                            type={'button'}
                            onClick={item.onClick}
                            disabled={item.unavailable}
                            className={classNames(
                                cls.item,
                                { [popupCls.active]: active },
                                [],
                            )}>
                            {item.content}
                        </button>
                    );
                    if (item.href) {
                        return (
                            <Menu.Item
                                as={AppLink}
                                to={item.href}
                                key={index}
                                disabled={item.unavailable}>
                                {content}
                            </Menu.Item>
                        );
                    }
                    return (
                        <Menu.Item
                            as={Fragment}
                            key={index}
                            disabled={item.unavailable}>
                            {content}
                        </Menu.Item>
                    );
                })}
            </Menu.Items>
        </Menu>
    );
};
