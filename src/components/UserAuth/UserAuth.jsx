import React from 'react'; 
import { container } from './UserAuth.styles';
import { UserAuthSignIn } from './UserAuthSignIn';

export const UserAuth = () => {
    return (
        <div className={container}>
            <h1>ArchiDev</h1>
            <UserAuthSignIn />
        </div>
    )
}