import React, { useCallback } from 'react';
import firebase from 'firebase';
import { useHistory } from 'react-router-dom';

export const UserAuthSignUp = () => {
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
            <label htmlFor={'email'}>
                Email
                <input id={'email'} type={'text'} />
            </label>
            <label htmlFor={'password'}>
                Password
                <input id={'password'} type={'password'} />
            </label>
            <button type={'submit'}>Sign Up</button>
        </form>
    )
}