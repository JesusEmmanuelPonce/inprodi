import { Button } from '@material-ui/core'
import React from 'react'
import { useDispatch } from 'react-redux'
import { preparedLogout } from '../../actions/auth'

export const Header = () => {

    const dispatch = useDispatch()

    const handleLogout = () => {
        dispatch(preparedLogout())
    }

    return (
        <header className="header__main">
            <nav className="header__nav">
                <div className="header__nav-logo">
                    <img className="img-fluid" src="https://www.inprodi.mx/wp-content/uploads/2019/06/Logo-Inprodi-Blanco.png" alt="logo de inprodi, Agencia de Diseño Web"/>
                </div>
                <Button onClick={handleLogout} variant="contained" color="secondary">
                    Salir
                </Button>
            </nav>
        </header>
    )
}
