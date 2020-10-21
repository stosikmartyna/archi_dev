import React, { useCallback } from 'react';
import firebase from 'firebase';
import { useHistory } from 'react-router-dom';

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
            <label htmlFor={'email'}>
                Email
                <input id={'email'} type={'text'} />
            </label>
            <label htmlFor={'password'}>
                Password
                <input id={'password'} type={'password'} />
            </label>
            <button type={'submit'}>Sign In</button>

            <span onClick={() => setForm('sign-up')}>
                Create account
            </span>
        </form>
    )
}