import React, {useState, useContext} from 'react';
import {FirebaseContext} from '../context/firebase';
import {useNavigate} from 'react-router-dom';
import {HeaderContainer} from '../Containers/header';
import {FooterContainer} from '../Containers/footer';
import {Form} from '../Components';
import * as ROUTES from '../Constants/routes';



export default function Signup(){

    const navigate = useNavigate();
    const {firebase} = useContext(FirebaseContext);

    const [FirstName, setFirstName] = useState("");
    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");

    const [Error, setError] = useState("");
    

    const handleSignup = (event)=>{
        event.preventDefault();

        firebase
            .auth()
            .createUserWithEmailAndPassword(Email, Password)
            .then((result)=>(
                result.user 
                .updateProfile({
                    displayName: FirstName,
                    photoURL: Math.floor(Math.random()*5)+1,
                })
                .then(()=>{
                    navigate(ROUTES.BROWSE);
                })
            ))
            .catch((error)=>{
                setEmail("");
                setPassword("");
                setFirstName("");
                setError(error.message);
            });
    };

    const isInvalid = FirstName==="" || Email==="" || Password==="";

    return(
        <>
            <HeaderContainer>
                <Form>
                    <Form.Title>Sign Up</Form.Title>
                    {Error && <Form.Error>{Error}</Form.Error>}
                    <Form.Base onSubmit={handleSignup} method="POST">
                        
                        <Form.Input 
                            type="text"
                            placeholder="First Name"
                            value = {FirstName}
                            onChange = {({target})=> setFirstName(target.value)}
                        />
                        <Form.Input 
                            type="Email"
                            placeholder="Email Address"
                            value = {Email}
                            onChange = {({target})=> setEmail(target.value)}
                        />
                        <Form.Input 
                            type="Password"
                            placeholder="Password"
                            autoComplete="off"
                            value = {Password}
                            onChange = {({target})=> setPassword(target.value)}
                        />
                        <Form.Submit disabled={isInvalid} type = "submit">
                            Submit 
                        </Form.Submit>
                    </Form.Base>
                    <Form.Text>
                        Already a user? <Form.Link to={ROUTES.SIGN_IN}>Sign in now.</Form.Link>
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