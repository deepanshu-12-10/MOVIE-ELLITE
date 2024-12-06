import React from 'react';
import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import {HeaderContainer}  from '../Containers/header';
import {FooterContainer}  from '../Containers/footer';
import {Form} from '../Components';
import { FirebaseContext } from '../context/firebase';
import * as ROUTES from '../Constants/routes';

export default function Signin(){

    const {firebase} = useContext(FirebaseContext);
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState("");

    const isInvalid = email==="" || password==="";

    const handleSignIn= (event)=>
    {
        event.preventDefault();

        return firebase
                .auth()
                .signInWithEmailAndPassword(email, password)
                .then(()=>{
                    navigate(ROUTES.BROWSE);
                })
                .catch((error)=>{
                    setEmail("");
                    setPassword("");
                    setError(error.message);
                });

    };

    return(
        <>
            <HeaderContainer>
                <Form>
                    {error && <Form.Error data-testid="error">{error}</Form.Error>}

                    <Form.Base onSubmit={handleSignIn} method='POST'>
                        <Form.Title>Sign In</Form.Title>
                        <Form.Input 
                            type = 'email'
                            placeholder = 'Email Address'
                            value = {email}
                            onChange = {({target}) => setEmail(target.value)}
                        />
                        <Form.Input 
                            type = 'password'
                            placeholder = 'Password'
                            autoComplete = 'off'
                            value = {password}
                            onChange = {({target}) => setPassword(target.value)}
                        />
                        <Form.Submit disabled={isInvalid} type = 'submit' data-testid="sign-in">
                            Submit 
                        </Form.Submit>
                    </Form.Base>
                    <Form.Text>
                        New to Netflix? <Form.Link to="/signup">Sign up now.</Form.Link>
                    </Form.Text>
                    <Form.Textsmall>
                        This page is protected by Google reCAPTCHA to ensure you're not a bot. Learn more.
                    </Form.Textsmall>
                </Form>

            </HeaderContainer>
            <FooterContainer/>
        </>
    );
}