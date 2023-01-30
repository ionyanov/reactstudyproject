type Mods = Record<string, string | boolean>

export function classNames(cls: string, mods: Mods, addithional: string[]): string {
    return [
        cls,
        ...addithional,
        ...Object.entries(mods)
            .filter((className, val) => Boolean(val))
            .map((className) => className)]
        .join(' ');
}