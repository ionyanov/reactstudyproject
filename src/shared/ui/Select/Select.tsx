import {type ChangeEventHandler, type CSSProperties, type FC, memo, useCallback, useMemo} from 'react'
import {classNames} from 'shared/lib/classNames/classNames'
import cls from './Select.module.scss'

export interface SelectOptions {
    value: string
    content: string
}

interface SelectProps {
    className?: string
    label?: string
    options?: SelectOptions[]
    value?: string
    onChange?: (value: string) => void
    readonly?: boolean
    placeholdersize?: string | undefined
}

export const Select: FC<SelectProps> = memo((props: SelectProps) => {
    const onChangeHandler = useCallback<ChangeEventHandler<HTMLSelectElement>>((e) => {
        props.onChange?.(e.target.value)
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
})
