import { getQueryParams } from './addQueryParams';

describe('getQueryParams', () => {
    test('with one param', () => {
        expect(getQueryParams({ search: 'param' })).toBe('?search=param');
    });

    test('with two param', () => {
        expect(getQueryParams({ search: 'param', sort: 'asc' })).toBe(
            '?search=param&sort=asc',
        );
    });

    test('with undefined', () => {
        expect(getQueryParams({ search: 'param', sort: undefined })).toBe(
            '?search=param',
        );
    });
});
