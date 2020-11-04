import React, { useState } from 'react'; 
import { authForm, container, appHeader } from './UserAuth.styles';
import { UserAuthSignIn } from './UserAuthSignIn';
import { UserAuthSignUp } from './UserAuthSignUp';

export const UserAuth = () => {
    const [form, setForm] = useState('sign-in');

    return (
        <div className={container}>
            <h1 className={appHeader}>
                Archi
                <span>Dev</span>
            </h1>
            <div className={authForm}>
                {form === 'sign-in'
                    ? <UserAuthSignIn setForm={setForm} />
                    : <UserAuthSignUp setForm={setForm} />
                }
            </div> 
        </div>
    )
}