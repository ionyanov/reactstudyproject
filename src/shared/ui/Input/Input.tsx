import {type FC, type InputHTMLAttributes, memo, useEffect, useRef} from 'react'
import {classNames} from 'shared/lib/classNames/classNames'
import cls from './Input.module.scss'

export enum PlaceHolderSize {
    'PHS_40' = 'pls_40',
    'PHS_60' = 'pls_60',
}

type HTMLInputsProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>

interface InputProps extends HTMLInputsProps {
    className?: string
    value?: string
    onChange?: (value: string) => void
    authFocus?: boolean
    placeholdersize?: PlaceHolderSize
}

const Input: FC<InputProps> = memo((props: InputProps) => {
    const {
        value,
        className,
        onChange,
        placeholder,
        placeholdersize,
        type = 'text',
        authFocus,
        ...otherProps
    } = props
    const ref = useRef<HTMLInputElement>(null)

    useEffect(() => {
        if (authFocus) {
            ref.current?.focus()
        }
    }, [authFocus])

    const onChangeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void =
        (e: React.ChangeEvent<HTMLInputElement>) => {
            onChange?.(e.target.value)
        }

    return (
        <div className={classNames(cls.InputWrapper, {}, [className])}>
            {placeholder && (
                <div className={classNames(cls.placeHolder, {}, [cls[placeholdersize]])}>
                    {placeholder}
                </div>
            )}
            <input
                ref={ref}
                type={type}
                value={value}
                onChange={onChangeHandler}
                className={cls.input}
                {...otherProps}/>
        </div>
    )
})

Input.displayName = 'Input'

export {Input}
