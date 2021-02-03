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

        console.log(body)

        if(body.ok){
            console.log('test de email', body)
            localStorage.setItem('token', body.token)
            dispatch(login({
                email: 'test@emmanuel.com'
            }))
        }
    }
}

const login = (user) => ({
    type: types.authLogin,
    payload: user
})