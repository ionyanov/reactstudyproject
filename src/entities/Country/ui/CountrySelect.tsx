import {type FC, memo, useMemo} from 'react'
import {classNames} from '@/shared/lib/classNames/classNames'
import {Select} from '@/shared/ui/Select'
import cls from './CountrySelect.module.scss'

import {Country} from '../model/country'

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
            {value: val[0] as Country, content: val[1]})
        ), [])

    return (
        <Select<Country>
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
