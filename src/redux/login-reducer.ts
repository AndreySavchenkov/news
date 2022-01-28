const LOGIN_USER = 'LOGIN_USER';
const LOGIN_ADMIN = 'LOGIN_ADMIN';
const LOGOUT_USER = 'LOGOUT_USER';
const LOGOUT_ADMIN = 'LOGOUT_ADMIN';
const LOGIN_SUCCESS = 'LOGIN_SUCCESS';


export type stateType = {
    isLoginSuccess: boolean,
    isUser: boolean,
    isAdmin: boolean,
}

let initialState: stateType = {
    isLoginSuccess: false,
    isUser: false,
    isAdmin: false,
}

export type ActionsType = ReturnType<typeof loginUser>
    | ReturnType<typeof loginAdmin>
    | ReturnType<typeof logoutAdmin>
    | ReturnType<typeof logoutUser>
    | ReturnType<typeof loginSuccess>

export const LoginReducer = (state: stateType = initialState, action: ActionsType) => {
    switch (action.type) {
        case LOGIN_SUCCESS:
            return {...state, isLoginSuccess: action.value}
        case LOGIN_USER:
            return {...state, isUser: true}
        case LOGOUT_USER:
            return {...state, isUser: false}
        case LOGIN_ADMIN:
            return {...state, isAdmin: true}
        case LOGOUT_ADMIN:
            return {...state, isAdmin: false}
        default:
            return state
    }
}

export const loginUser = () => {
    return {type: LOGIN_USER} as const
}
export const logoutUser = () => {
    return {type: LOGOUT_USER} as const
}
export const loginAdmin = () => {
    return {type: LOGIN_ADMIN} as const
}
export const logoutAdmin = () => {
    return {type: LOGOUT_ADMIN} as const
}
export const loginSuccess = (value: boolean) => {
    return {type: LOGIN_SUCCESS, value}
}

