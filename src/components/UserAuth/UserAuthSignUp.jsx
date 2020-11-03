import React, { useCallback } from 'react';
import firebase from 'firebase';
import { useHistory } from 'react-router-dom';
import { Button } from '../../uiComponents/Button';
import { InputText } from '../../uiComponents/InputText';

export const UserAuthSignUp = ({ setForm }) => {
    const history = useHistory();

    const handleSignUp = useCallback(
        async (event) => {
            event.preventDefault();
            const { email, password } = event.target.elements;
            try {
                await firebase
                    .auth()
                    .createUserWithEmailAndPassword(email.value, password.value)
                history.push('/')
            } 
            catch (error) {
                alert(error.message)
            }
        }, [history]
    );

    return (
        <form onSubmit={handleSignUp}>
            <h1>Sign Up</h1>
            <InputText 
                id={'email'}
                label={'Email'}
                type={'text'}
            />
            <InputText 
                id={'password'}
                label={'Password'}
                type={'password'}
            />
            <Button type={'submit'}>
                Sign Up
            </Button>
            <span onClick={() => setForm('sign-in')}>
                I already have an account  
            </span>
        </form>
    )
}