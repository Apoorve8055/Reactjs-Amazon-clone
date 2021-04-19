import React, { useState } from 'react'
import styled from 'styled-components';
import { auth,provider } from '../../Firebase/firebase';
function Login({setUser}) {
    
    const signIn = () =>{
        auth.signInWithPopup(provider).then((res)=>{
            let user = res.user;
            let newUser = {
                name:user.displayName,
                email:user.email,
                photo:user.photoURL,
            };
            localStorage.setItem('user',JSON.stringify(newUser));
            setUser(newUser);
        }).catch(err=>{
            alert(err.message);
        })
    }
    return (
        <Container>
            <Content>
                <AmazonLogo src="http://media.corporate-ir.net/media_files/IROL/17/176060/Oct18/Amazon%20logo.PNG"/>
                <h1>Sign in with Google</h1>
                <LoginButton
                onClick={signIn}
                >
                Sign in with Google
                </LoginButton>
            </Content>
        </Container>
    )
}

export default Login
const Container = styled.div`
background-color:#f8f8f8;
width:100%;
height:100vh;

display:grid;
place-items:center;
`;

const Content = styled.div`
padding:100px;
background-color:white;
border-radius:5px;
box-shadow:0 1px 3px gray;
text-align:center;
`;

const AmazonLogo = styled.img`
height:100px;
margin-bottom:10px;

`;

const LoginButton = styled.button`
margin-top:20px;
background-color:#f0c14b;
height:40px;
border: 2px solid #a88734;
padding:4px 8px;
cursor:pointer;
`;