import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
    BrowserRouter as Router,
    Switch,
    Redirect
  } from "react-router-dom"
import { startCheck } from '../actions/auth'
import { Products } from '../components/products/Products'
import { AuthRouter } from './AuthRouter'
import { PrivateRoute } from './PrivateRoute'
import { PublicRoute } from './PublicRoute'

export const AppRouter = () => {

    const dispatch = useDispatch()
    const { check, email, id } = useSelector(state => state.auth)

    useEffect(() => {
        dispatch(startCheck())
    },[dispatch])
    
    console.log(dispatch)

    console.log(`Check: ${check} - Email: ${email} - Id: ${id}`)

    return (
        <Router>
            <Switch>
                <PublicRoute
                    path="/auth" 
                    component={AuthRouter} 
                    isAuthenticated={!!id}
                />
                <PrivateRoute 
                    path="/" 
                    component={Products} 
                    isAuthenticated={!!id}
                />
                <Redirect to="/" />
            </Switch>
        </Router>
    )
}