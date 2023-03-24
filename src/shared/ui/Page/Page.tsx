import {type FC, type MutableRefObject, type ReactNode, useRef} from 'react'
import {classNames} from 'shared/lib/classNames/classNames'
import cls from './Page.module.scss'
import {useInfiniteScroll} from 'shared/lib/hooks/useInfiniteScroll/useInfiniteScroll'

interface PageProps {
    className?: string
    children: ReactNode
    onScrollEnd?: () => void
}

export const Page: FC<PageProps> = (props) => {
    const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>
    const triggerRef = useRef() as MutableRefObject<HTMLDivElement>

    useInfiniteScroll({
        wrapperRef,
        triggerRef,
        callback: props.onScrollEnd
    })

    return (
        <section
            ref={wrapperRef}
            className={classNames(cls.Page, {}, [props.className])}>
            {props.children}
            <div ref={triggerRef}/>
        </section>
    )
}
