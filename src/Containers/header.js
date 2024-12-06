import React from 'react';
import {Header} from '../Components';
import logo from '../logo.png';
import * as ROUTES from '../Constants/routes';

export function HeaderContainer({children, ...restProps}) {
    return(
        <Header {...restProps}>
            <Header.Frame>
                <Header.Logo src={logo} to ={ROUTES.HOME} alt="NETFLIX" />
                <Header.ButtonLink to={ROUTES.SIGN_IN}>Sign In</Header.ButtonLink>
            </Header.Frame>
            {children}
        </Header>
    );
}