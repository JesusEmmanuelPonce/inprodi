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

        // console.log(loginRequest)
        // console.log(body)

        if(body.ok){
            localStorage.setItem('token', body.token)
            dispatch(login({
                email: body.email
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
            localStorage.setItem('token', body.token)
            dispatch(login({
                email: body.email
            }))
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