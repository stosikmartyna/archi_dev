import React, { useCallback } from 'react';
import firebase from 'firebase';
import { useHistory } from 'react-router-dom';
import { Button } from '../../uiComponents/Button';
import { InputText } from '../../uiComponents/InputText';
import { Header } from '../../uiComponents/Header';

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
            <Header size={'medium'} margin={'1.5'}>Sign In</Header>
            <InputText 
                id={'email'}
                label={'Email'}
                type={'text'}
                width={220}
            />
            <InputText 
                id={'password'}
                label={'Password'}
                type={'password'}
                width={220}
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