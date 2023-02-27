type Mods = Record<string, string | boolean | undefined>

export function classNames (cls: string, mods: Mods = {}, addithional: Array<string | undefined> = []): string {
    return [
        cls,
        ...addithional.filter(Boolean),
        ...Object.entries(mods)
            .filter(([className, value]) => Boolean(value))
            .map(([className]) => className)
    ]
        .join(' ').trim()
}
