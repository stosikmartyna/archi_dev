import React, { useState } from 'react'; 
import { Header } from '../../uiComponents/Header';
import { authForm, container } from './UserAuth.styles';
import { UserAuthSignIn } from './UserAuthSignIn';
import { UserAuthSignUp } from './UserAuthSignUp';

export const UserAuth = () => {
    const [form, setForm] = useState('sign-in');

    return (
        <div className={container}>
            <Header size={'large'} fontWeight={900}>
                ArchiDev
            </Header>
            <div className={authForm}>
                {form === 'sign-in'
                    ? <UserAuthSignIn setForm={setForm} />
                    : <UserAuthSignUp setForm={setForm} />
                }
            </div> 
        </div>
    )
}