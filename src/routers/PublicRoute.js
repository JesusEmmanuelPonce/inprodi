import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux'

const PublicRoute = ({
    loged,
    component: Component,
    ...rest
}) => (
    <Route {...rest}
        component={ props => (
            loged
                ?   <Redirect to="/" />
                :   <Component {...props} />
        )}
    />
)

const mapStateToProps = ({auth}) => ({ loged: auth.loged });

export default connect(mapStateToProps)(PublicRoute);