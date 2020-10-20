import React from 'react'; 
import { Switch, Route } from 'react-router-dom';
import { ROUTES } from '../../helpers/routes';
import { authForm, container } from './UserAuth.styles';
import { UserAuthSignIn } from './UserAuthSignIn';
import { UserAuthSignUp } from './UserAuthSignUp';

export const UserAuth = () => {
    return (
        <div className={container}>
            <h1>ArchiDev</h1>
            <div className={authForm}>
                <Switch>
                    <Route path={ROUTES.SIGN_IN}>
                        <UserAuthSignIn />
                    </Route>
                    <Route path={ROUTES.SIGN_UP}>
                        <UserAuthSignUp />
                    </Route>
                </Switch>
            </div> 
        </div>
    )
}