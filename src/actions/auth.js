import axios from "axios"
import { types } from '../types/types'

export const startLogin = (email, password) => {
    return async(dispatch) => {
        console.log(`Email: ${email}, Password: ${password}`)

        const loginRequest = await axios.post('https://inprodi.herokuapp.com/api/login', {
            email,
            password
        })

        const body = loginRequest.data 

        if(body.ok){
            // Agregar token en el dispatch
            const token = body.token
            dispatch(login({
                email: body.email,
                token
            }))
        }
    }
}

export const startCheck = () => {
    return async(dispatch) => {
        
        const token = localStorage.getItem('token') || ''
    
        const revalidateToken = await axios.get('https://inprodi.herokuapp.com/api/login/revalidate', {
            headers: {
                'x-token': token
            }
        })

        const body = revalidateToken
        
        if(body.ok){
            localStorage.setItem('token', token)
            dispatch(login())
        }else{
            dispatch(checkEnd())
        }
    }
}

const checkEnd = () => ({ type: types.checkEnd })

const login = (user) => ({
    type: types.authLogin,
    payload: user
})

export const preparedLogout = () => {
    return(dispatch) => {
        localStorage.clear()
        dispatch(logout())
    }
}

const logout = () => ({type: types.authLogout})