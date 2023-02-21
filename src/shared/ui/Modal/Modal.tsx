import {FC, MouseEventHandler, ReactNode, useCallback, useEffect, useRef, useState} from "react";
import {classNames} from "shared/lib/classNames/classNames";
import cls from './Modal.module.scss';
import {Portal} from "shared/ui/Portal/Portal";
import {useTheme} from "app/providers/ThemeProvider";

interface ModalProps {
    className?: string;
    children?: ReactNode;
    isOpen?: boolean;
    onClose?: () => void;
}

const ANIMATION_DURATION: number = 300;

export const Modal: FC<ModalProps> = (props) => {
    const {
        isOpen = false,
        onClose
    } = props
    const {theme} = useTheme();
    const [isClosing, setIsClosing] = useState(false);
    const timeRef = useRef<ReturnType<typeof setTimeout>>();

    const onContentClick: MouseEventHandler<HTMLDivElement> = (e) => {
        e.stopPropagation()
    }

    const closeHandler = useCallback(() => {
        if (onClose) {
            setIsClosing(true)
            timeRef.current = setTimeout(() => {
                onClose();
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
            clearTimeout(timeRef.current);
            window.removeEventListener('keydown', onKeyDown)
        }
    }, [isOpen, onKeyDown])

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
    );
};