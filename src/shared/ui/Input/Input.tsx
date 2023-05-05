import {type CSSProperties, type FC, type InputHTMLAttributes, memo, useEffect, useRef} from 'react'
import {classNames} from '@/shared/lib/classNames/classNames'
import {HStack} from '../Stack'
import cls from './Input.module.scss'

type HTMLInputsProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'readOnly'>

interface InputProps extends HTMLInputsProps {
    className?: string
    value?: string | number
    onChange?: (value: string) => void
    authFocus?: boolean
    placeholdersize?: string | undefined
    readonly?: boolean
    dataTestId?: string
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
        dataTestId = 'Input',
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
        <HStack gap={'8'} max className={classNames(cls.InputWrapper, {}, [className])}>
            {placeholder && (
                <div
                    className={cls.placeHolder}
                    style={placeholdersize ? style : undefined}
                    data-testid={`${dataTestId}.PlaceHolder`}
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
                data-testid={`${dataTestId}.Input`}
                {...otherProps}/>
        </HStack>
    )
}
)

Input.displayName = 'Input'

export {Input}
