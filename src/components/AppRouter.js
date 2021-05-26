import React, { useContext } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Context } from '../index';
import { customerRoute, employeeRoute, publicRoute } from '../routes';
import { STORE } from '../utils/consts';

export const AppRouter = () => {
    
    const { user } = useContext(Context);
    
    return(
        <Switch>
            {user.isEmployee && employeeRoute.map(({path, component}) => {
                return <Route key={path} path={path} component={component} exact />                    
            })}
            {user.isCustomer && customerRoute.map(({path, component}) => {
                return <Route key={path} path={path} component={component} exact />
            })}
            {publicRoute.map(({path, component}) => {
                return <Route key={path} path={path} component={component} exact/>                
            })}
            <Redirect to={STORE}/>
        </Switch>
    );

};
