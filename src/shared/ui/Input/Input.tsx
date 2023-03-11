import {type CSSProperties, type FC, type InputHTMLAttributes, memo, useEffect, useRef} from 'react'
import {classNames} from 'shared/lib/classNames/classNames'
import cls from './Input.module.scss'

type HTMLInputsProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'readOnly'>

interface InputProps extends HTMLInputsProps {
    className?: string
    value?: string | number
    onChange?: (value: string) => void
    authFocus?: boolean
    placeholdersize?: string | undefined
    readonly?: boolean
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
        readonly = false,
        ...otherProps
    } = props
    const ref = useRef<HTMLInputElement>(null)

    const style: CSSProperties = {
        width: placeholdersize,
        marginLeft: 'auto',
        display: 'flex',
        justifyContent: 'end'
    }

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
                <div
                    className={cls.placeHolder}
                    style={placeholdersize ? style : undefined}
                >
                    {placeholder}
                </div>
            )}
            <input
                ref={ref}
                type={type}
                value={value}
                onChange={onChangeHandler}
                className={classNames(cls.input, {[cls.readonly]: readonly, [cls.inputgrow]: placeholdersize}, [])}
                readOnly={readonly}
                {...otherProps}/>
        </div>
    )
}
)

Input.displayName = 'Input'

export {Input}
