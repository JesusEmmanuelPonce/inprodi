  
import React from 'react'
import {
    Switch,
    Route,
    Redirect
  } from "react-router-dom"
import { Login } from '../components/auth/Login'

export const AuthRouter = () => {
    return (
       <div className="auth__main">
           <div className="auth__box-container">
                <Switch>
                    <Route exact path="/auth/login" component={Login} />
                    <Redirect exact to="/auth/login" />
                </Switch>
           </div>
       </div>
    )
}
