import {screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import {Country} from '@/entities/Country'
import {Currency} from '@/entities/Currency'
import {type Profile} from '@/entities/Profile'
import {$api} from '@/shared/api/api'
import {ComponentRender, type ComponentRenderProps} from '@/shared/config/tests/componentRender/componentRender'
import {profileReducer} from '../../model/slice/profileSlice'
import {EditableProfileCard} from './EditableProfileCard'

const form: Profile = {
    id: '1',
    firstname: 'firstname',
    lastname: 'lastname',
    age: 20,
    country: Country.GB,
    city: 'city',
    currency: Currency.EUR,
    username: 'username'
}

const option: ComponentRenderProps = {
    initialState: {
        profile: {
            readOnly: true,
            form,
            data: form
        },
        user: {
            authData: {id: '1'}
        }
    },
    asyncReducers: {
        profile: profileReducer
    }
}

describe('features/EditableProfileCard', () => {
    test('Edit Mode', async () => {
        ComponentRender(<EditableProfileCard id={'1'}/>, option)
        await userEvent.click(screen.getByTestId('EditableProfileCard.Edit'))
        expect(screen.getByTestId('EditableProfileCard.Save')).toBeInTheDocument()
    })

    test('Rallback', async () => {
        ComponentRender(<EditableProfileCard id={'1'}/>, option)
        await userEvent.click(screen.getByTestId('EditableProfileCard.Edit'))
        await userEvent.clear(screen.getByTestId('ProfileCard.firstname.Input'))
        await userEvent.type(screen.getByTestId('ProfileCard.firstname.Input'), 'test')
        expect(screen.getByTestId('ProfileCard.firstname.Input')).toHaveValue('test')
        await userEvent.click(screen.getByTestId('EditableProfileCard.Cancel'))
        expect(screen.getByTestId('ProfileCard.firstname.Input')).toHaveValue(form.firstname)
    })

    test('Validation', async () => {
        ComponentRender(<EditableProfileCard id={'1'}/>, option)
        await userEvent.click(screen.getByTestId('EditableProfileCard.Edit'))
        await userEvent.clear(screen.getByTestId('ProfileCard.firstname.Input'))
        await userEvent.click(screen.getByTestId('EditableProfileCard.Save'))
        expect(screen.getByTestId('EditableProfileCard.Error.Paragraph')).toBeInTheDocument()
    })

    test('SendToServer', async () => {
        const mockPut = jest.spyOn($api, 'put')
        ComponentRender(<EditableProfileCard id={'1'}/>, option)
        await userEvent.click(screen.getByTestId('EditableProfileCard.Edit'))
        await userEvent.click(screen.getByTestId('EditableProfileCard.Save'))
        expect(mockPut).toHaveBeenCalled()
    })
})
