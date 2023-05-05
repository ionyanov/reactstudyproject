import {type FC, type ReactNode} from 'react'
import {useModal} from '@/shared/lib/hooks/useModal/useModal'
import {Overlay} from '@/shared/ui/Overlay/Overlay'
import {classNames} from '../../lib/classNames/classNames'
import {useTheme} from '../../lib/providers/ThemeProvider'
import {Portal} from '../Portal/Portal'
import cls from './Modal.module.scss'

interface ModalProps {
    className?: string
    children?: ReactNode
    isOpen?: boolean
    onClose?: () => void
    lazy?: boolean
}

export const Modal: FC<ModalProps> = (props) => {
    const {
        isOpen = false,
        onClose,
        lazy
    } = props
    const {theme} = useTheme()
    const {isMounted, isClosing, close} = useModal({isOpen, onClose})

    if (lazy && !isMounted) {
        return null
    }

    const mods = {
        [cls.opened]: isOpen,
        [cls.isclosing]: isClosing
    }
    return (
        <Portal>
            <div className={classNames(cls.Modal, mods, [props.className, theme])}>
                <Overlay className={cls.overlay} onClick={close}/>
                <div className={cls.content}>
                    {props.children}
                </div>
            </div>
        </Portal>
    )
}
