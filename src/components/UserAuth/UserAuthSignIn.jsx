import React from 'react';
import { authForm } from './UserAuth.styles';

export const UserAuthSignIn = () => {
    return (
        <form className={authForm}>
            <label for={'email'}>
                Email
                <input id={'email'} type={'text'} />
            </label>
            <label for={'password'}>
                Password
                <input id={'password'} type={'password'} />
            </label>
            <button>Sign In</button>
        </form>
    )
}