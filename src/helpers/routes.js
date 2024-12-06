import React from 'react';
import{Route, Routes, Navigate} from 'react-router';
import * as ROUTES from '../Constants/routes'

export function IsUserRedirect({ user, loggedInPath, children, path, ...rest}){
    if(!user)
        return children;
                
    if(user){
        return <Navigate to = {loggedInPath} />
        }
    return null;
}

export function ProtectedRoute({user, Path, children, location, ...rest}){
    if(user){
        return children;
    }
    if(!user){
        return <Navigate to={ROUTES.SIGN_IN} from={location}/>
    }
}

