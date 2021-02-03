import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom"
import { Products } from '../components/products/Products'
import { AuthRouter } from './AuthRouter'

export const AppRouter = () => {
    return (
        <Router>
            <Switch>
                <Route path="/auth" component={AuthRouter} />
                <Route exact path="/" component={Products} />
            </Switch>
        </Router>
    )
}