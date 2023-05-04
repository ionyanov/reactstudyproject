import {type DropdownDirection} from '@/shared/types/ui'
import cls from './popups.module.scss'

export const PopupDirectionStyle: Record<DropdownDirection, string> = {
    'top left': cls.topLeft,
    'top right': cls.topRight,
    'bottom left': cls.bottomLeft,
    'bottom right': cls.bottomRight
}
