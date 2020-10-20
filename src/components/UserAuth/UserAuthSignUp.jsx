import React, { useCallback } from 'react';
import firebase from 'firebase';
import { useHistory, Link } from 'react-router-dom';
import { ROUTES } from '../../helpers/routes';

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
        <>
            <form onSubmit={handleSignUp}>
                <h1>Sign Up</h1>
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
            <Link to={ROUTES.SIGN_IN}>
                I already have an account  
            </Link>
        </>
    )
}