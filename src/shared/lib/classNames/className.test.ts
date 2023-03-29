import {classNames} from './classNames'

describe('className', () => {
    test('with one param', () => {
        expect(classNames('class1')).toBe('class1')
    })

    test('additional class', () => {
        expect(classNames('class1', {}, ['class2'])).toBe('class1 class2')
    })

    test('additional class only', () => {
        expect(classNames('', {}, ['class2'])).toBe('class2')
    })

    test('with mods true', () => {
        expect(classNames('class1',
            {class3: true, class4: true}, ['class2']))
            .toBe('class1 class2 class3 class4')
    })

    test('with mods false', () => {
        expect(classNames('class1',
            {class3: false, class4: true}, ['class2']))
            .toBe('class1 class2 class4')
    })

    test('with mods undefine', () => {
        expect(classNames('class1',
            {class3: true, class4: undefined}, ['class2']))
            .toBe('class1 class2 class3')
    })
})
