import { useKeycloak } from '@react-keycloak/web';
import React from 'react';
import { Redirect, Route, RouteComponentProps } from 'react-router-dom';
import { RouteProps } from 'react-router-dom'


function PrivateRoute({roles, ...rest }) {
    const {keycloak, initialized} = useKeycloak();

    const isAuthorized = () => {
        if (keycloak && roles) {
            return roles.some(r => {
                console.log(r)
                console.log(keycloak)
                const realm =  keycloak.hasRealmRole(r);
                const resource = keycloak.hasResourceRole(r);
                return realm || resource;
            });
        }
        return false;
    }

    return ( 
        isAuthorized(roles) ?
        <Route
            {...rest}
            
        />
        :
        <div><p>...</p></div>

        
    )
}
export default PrivateRoute