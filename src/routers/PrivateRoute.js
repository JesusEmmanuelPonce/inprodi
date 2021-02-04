import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({
    loged,
    component: Component,
    ...rest
}) => (
    <Route {...rest}
        component={ props => (
            loged
                ?   <Component {...props} />
                :   <Redirect to="/auth/login" />
        )}
    />
);

const mapStateToProps = ({auth}) => ({ loged: auth.loged });

export default connect(mapStateToProps)(PrivateRoute);
