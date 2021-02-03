import { types } from '../types/types'

const initialState = {
    check: true,
    // email: null
}

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.authLogin:
            return {
                ...state,
                check: false,
                ...action.payload
            }
        default:
            return state
    }
}