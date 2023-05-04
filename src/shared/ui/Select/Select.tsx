import {type ChangeEventHandler, type CSSProperties, useCallback, useMemo} from 'react'
import {classNames} from '@/shared/lib/classNames/classNames'
import cls from './Select.module.scss'

export interface SelectOptions<T extends string> {
    value: T
    content: string
}

interface SelectProps<T extends string> {
    className?: string
    label?: string
    options?: Array<SelectOptions<T>>
    value?: T
    onChange?: (value: T) => void
    readonly?: boolean
    placeholdersize?: string | undefined
}

export const Select: <T extends string>(props: SelectProps<T>) => JSX.Element = <T extends string>(props: SelectProps<T>) => {
    const onChangeHandler = useCallback<ChangeEventHandler<HTMLSelectElement>>((e) => {
        props.onChange?.(e.target.value as T)
    }, [props])

    const style: CSSProperties = {
        width: props.placeholdersize,
        marginLeft: 'auto',
        display: 'flex',
        justifyContent: 'end'
    }

    const optionList = useMemo(() => {
        return props.options?.map(opt => (
            <option
                className={cls.option}
                value={opt.value}
                key={opt.value}
            >
                {opt.content}
            </option>
        ))
    }, [props.options])

    return (
        <div className={classNames(cls.Select, {}, [props.className])}>
            {props.label &&
                <span className={cls.label}
                    style={props.placeholdersize ? style : undefined}
                >{props.label}</span>
            }
            <select className={classNames(cls.select, {[cls.selectgrow]: props.placeholdersize}, [])}
                onChange={onChangeHandler}
                value={props.value}
                disabled={props.readonly}
            >
                {optionList}
            </select>
        </div>
    )
}
