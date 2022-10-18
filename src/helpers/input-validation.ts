export const emailValidation = (value:string) => {
    if(!value.toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        )) return 'несуществующий email'
    return ''
}

export const passwordValidation = (value:string) => {
    if (value.length < 6) return 'пароль должен содержать не меньше 6 символов'
    if (value.length > 40) return 'пароль должен содержать не боее 40 символов'
    return ''
}