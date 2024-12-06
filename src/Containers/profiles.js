import React from 'react';
import Header from '../Components/Header';
import logo from '../logo.png';
import * as ROUTES from '../Constants/routes';
import Profiles from '../Components/profiles';


export default function SelectProfileContainer({user, setProfile}){
    return(<>
        <Header bg={false}>
            <Header.Frame>
                <Header.Logo to={ROUTES.HOME} src={logo} alt="Netflix"></Header.Logo>
            </Header.Frame>
        </Header>

        <Profiles>
            <Profiles.Title>Who's watching ?</Profiles.Title>
            <Profiles.List>
                <Profiles.User onClick={
                    ()=>{
                            setProfile(
                                {displayName: user.displayName, photoURL: user.photoURL}
                                )}
                    }>
                    <Profiles.Picture src={user.photoURL} alt="User" />
                    <Profiles.Name>{user.displayName}</Profiles.Name>
                </Profiles.User>
            </Profiles.List>
        </Profiles>
        </>
    );
}