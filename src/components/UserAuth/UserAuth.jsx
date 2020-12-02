import React, { useState } from 'react'; 
import { AppLogo } from '../AppLogo/AppLogo';
import { authForm, container } from './UserAuth.styles';
import { UserAuthSignIn } from './UserAuthSignIn';
import { UserAuthSignUp } from './UserAuthSignUp';

export const UserAuth = () => {
    const [form, setForm] = useState('sign-in');

    return (
        <div className={container}>
            <AppLogo absolute size={5} marginTop={6} />
            <div className={authForm}>
                {form === 'sign-in'
                    ? <UserAuthSignIn setForm={setForm} />
                    : <UserAuthSignUp setForm={setForm} />
                }
            </div> 
        </div>
    )
}