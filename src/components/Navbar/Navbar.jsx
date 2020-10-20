import React from 'react';
import firebase from 'firebase';
import { ROUTES } from '../../helpers/routes';
import { Link } from 'react-router-dom';

export const Navbar = () => {
    const signOut = () => {
        firebase.auth().signOut();
    }

    return (
        <div>
            <Link to={ROUTES.HOME}>Home</Link>
            <Link to={ROUTES.HOME} onClick={signOut}>Sign Out</Link>
        </div>
    )
}