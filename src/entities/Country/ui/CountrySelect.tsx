import {type FC, memo, useCallback, useMemo} from 'react'
import {Select} from 'shared/ui/Select/Select'
import {Country} from '../model/country'
import {classNames} from 'shared/lib/classNames/classNames'
import cls from 'shared/ui/Select/Select.module.scss'

interface CurrencyProps {
    className?: string
    title?: string
    selected?: Country
    onchange?: (value: Country) => void
    readonly?: boolean
    placeholdersize?: string | undefined
}

export const CountrySelect: FC<CurrencyProps> = memo((props: CurrencyProps) => {
    const countryOptions = useMemo(() =>
        Object.entries(Country).map((val) => (
            {value: val[0], content: val[1]})
        ), [])

    const onChangeHandler = useCallback((value: string) => {
        props.onchange?.(value as Country)
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
