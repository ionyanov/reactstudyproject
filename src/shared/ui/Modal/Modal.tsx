import {type FC, type MouseEventHandler, type ReactNode, useCallback, useEffect, useRef, useState} from 'react'
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

const ANIMATION_DURATION = 300

export const Modal: FC<ModalProps> = (props) => {
    const {
        isOpen = false,
        onClose,
        lazy
    } = props
    const {theme} = useTheme()
    const [isClosing, setIsClosing] = useState(false)
    const [isMounted, setIsMounted] = useState(false)
    const timeRef = useRef<ReturnType<typeof setTimeout>>()

    useEffect(() => {
        if (isOpen) {
            setIsMounted(true)
        }
    }, [isOpen])

    const onContentClick: MouseEventHandler<HTMLDivElement> = (e) => {
        e.stopPropagation()
    }

    const closeHandler = useCallback(() => {
        if (onClose) {
            setIsClosing(true)
            timeRef.current = setTimeout(() => {
                onClose()
                setIsClosing(false)
            }, ANIMATION_DURATION)
        }
    }, [onClose])

    const onKeyDown = useCallback((e: KeyboardEvent) => {
        if (e.key === 'Escape') {
            closeHandler()
        }
    }, [closeHandler])

    useEffect(() => {
        if (isOpen) {
            window.addEventListener('keydown', onKeyDown)
        }

        return () => {
            clearTimeout(timeRef.current)
            window.removeEventListener('keydown', onKeyDown)
        }
    }, [isOpen, onKeyDown])

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
                <div className={cls.overlay} onClick={closeHandler}>
                    <div className={cls.content} onClick={onContentClick}>
                        {props.children}
                    </div>
                </div>
            </div>
        </Portal>
    )
}
