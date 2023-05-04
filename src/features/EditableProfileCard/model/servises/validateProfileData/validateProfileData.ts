import {type Profile, ValidateProfileError} from '@/entities/Profile'

export const validateProfileData: (profile?: Profile) => ValidateProfileError[] = (profile?: Profile) => {
    const errors: ValidateProfileError[] = []
    if (!profile) {
        return [ValidateProfileError.INCORRECT_USER_DATA]
    }

    if (!profile.lastname || !profile.firstname) {
        errors.push(ValidateProfileError.INCORRECT_NAME)
    }
    if ((profile.age || 0) < 18) {
        errors.push(ValidateProfileError.INCORRECT_AGE)
    }
    return errors
}
