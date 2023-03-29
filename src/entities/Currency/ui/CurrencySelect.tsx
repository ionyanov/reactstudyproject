import {type FC, memo, useMemo} from 'react'
import {classNames} from 'shared/lib/classNames/classNames'
import {Select} from 'shared/ui/Select/Select'
import cls from 'shared/ui/Select/Select.module.scss'
import {Currency} from '../model/currency'

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
            {value: val[0] as Currency, content: val[1]})
        ), [])

    return (
        <Select<Currency>
            className={classNames(cls.Select, {}, [props.className])}
            value={props.selected}
            label={props.title}
            readonly={props.readonly}
            onChange={props.onchange}
            options={countryOptions}
            placeholdersize={props.placeholdersize}
        />
    )
})
