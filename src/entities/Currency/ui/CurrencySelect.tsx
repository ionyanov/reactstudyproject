import {type FC, memo, useCallback, useMemo} from 'react'
import {Select} from 'shared/ui/Select/Select'
import {Currency} from '../model/currency'
import {classNames} from 'shared/lib/classNames/classNames'
import cls from 'shared/ui/Select/Select.module.scss'

interface CurrencyProps {
    className?: string
    title?: string
    selected?: Currency
    onchange?: (value: Currency) => void
    readonly?: boolean
    placeholdersize?: string | undefined
}

export const CurrencySelect: FC<CurrencyProps> = memo((props: CurrencyProps) => {
    const countryOptions = useMemo(() =>
        Object.entries(Currency).map((val) => (
            {value: val[0], content: val[1]})
        ), [])

    const onChangeHandler = useCallback((value: string) => {
        props.onchange?.(value as Currency)
    }, [props])

    return (
        <Select
            className={classNames(cls.Select, {}, [props.className])}
            value={props.selected}
            label={props.title}
            readonly={props.readonly}
            onChange={onChangeHandler}
            options={countryOptions}
            placeholdersize={props.placeholdersize}
        />
    )
})
