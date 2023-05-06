import {useSelector} from 'react-redux'
import type {StateSchema} from '../providers/StoreProvider'

type SelectorType<T> = (state: StateSchema) => T
type Result<T> = [() => T, SelectorType<T>]

export function buildSelector<T> (selector: SelectorType<T>): Result<T> {
    const useSelectorHook: () => T = () => {
        return useSelector(selector)
    }

    return [useSelectorHook, selector]
}
