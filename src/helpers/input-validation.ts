import {emailValidationPattern} from './vars/patterns'

export const emailValidation = (value:string) => {
    if (value.length < 1) return 'обязательно поле'
    if(!value.toLowerCase()
        .match(
            emailValidationPattern
        )) return 'несуществующий email'
    return ''
}

export const passwordValidation = (value:string) => {
    if (value.length < 1) return 'обязательно поле'
    if (value.length < 6) return 'пароль должен содержать не меньше 6 символов'
    if (value.length > 40) return 'пароль должен содержать не боее 40 символов'
    return ''
}