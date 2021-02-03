import React from 'react'
import { useDispatch } from 'react-redux';
import { startLogin } from '../../actions/auth';
import { useForm } from '../../hooks/useForm'

export const Login = () => {

    const dispatch = useDispatch()

    const [ formValues, handleInputChange ] = useForm({
        email: 'test@emmanuel.com',
        password: 'yisus123'
    });

    const { email, password } = formValues

    const handleLogin = e => {
        e.preventDefault()
        console.log(formValues)
        dispatch(startLogin(email, password))
    }


    return (
        <>
            <h2 className="auth__title">
                Iniciar Sesion
            </h2>
            <form
                onSubmit={handleLogin}
            >
                <input 
                    type="text"
                    placeholder="Email"
                    name="email"
                    className="auth__input"
                    autoComplete="off"
                    value={email}
                    onChange={handleInputChange}
                />
                <input 
                    type="password"
                    placeholder="*****"
                    name="password"
                    className="auth__input"
                    value={password}
                    onChange={handleInputChange}
                />
                <button
                    type="submit"
                    className="btn btn-primary btn-block"
                >
                    Ingresar
                </button>
                <hr />
            </form>
        </>
    )
}