import React from 'react'
import { Route, Redirect } from 'react-router'

//Simular autenticacion
let auth;
auth =  true;
auth = null;

const PrivateRoute = ({component, ...rest}) => {
    return <Route {...rest}>{auth?<component/>:<Redirect to="/login"/>}</Route>
}


export default PrivateRoute

