import { types } from '../types/types'

const initialState = {
    check: true
}

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.authLogin:
            return {
                ...state,
                ...action.payload,
                check: false,
                loged: true
            }
        case types.checkEnd: 
            return {
                email: 'test@emmanuel.com',
                id: 123,
                check: false
            }
        case types.authLogout:
            return {
                check: false,
                loged: false
            }
        default:
            return state
    }
}