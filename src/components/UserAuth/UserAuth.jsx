import React from 'react'; 
import { authForm, container } from './UserAuth.styles';
import { UserAuthSignIn } from './UserAuthSignIn';
import { UserAuthSignUp } from './UserAuthSignUp';

export const UserAuth = () => {
    return (
        <div className={container}>
            <h1>ArchiDev</h1>
            <div className={authForm}>
                <UserAuthSignUp />
                <UserAuthSignIn />
            </div> 
        </div>
    )
}