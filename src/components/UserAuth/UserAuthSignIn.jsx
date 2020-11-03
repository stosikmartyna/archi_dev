import React, { useCallback } from 'react';
import firebase from 'firebase';
import { useHistory } from 'react-router-dom';
import { Button } from '../../uiComponents/Button';
import { InputText } from '../../uiComponents/InputText';

export const UserAuthSignIn = ({ setForm }) => {
    const history = useHistory();

    const handleSignIn = useCallback(
        async (event) => {
            event.preventDefault();
            const { email, password } = event.target.elements;
            try {
                await firebase
                    .auth()
                    .signInWithEmailAndPassword(email.value, password.value);
                history.push('/');
            } 
            catch (error) {
                alert(error.message)
            }
        }, [history]
    )

    return (
        <form onSubmit={handleSignIn}>
            <h1>Sign In</h1>
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
                Sign In
            </Button>
            <span onClick={() => setForm('sign-up')}>
                Create account
            </span>
        </form>
    )
}