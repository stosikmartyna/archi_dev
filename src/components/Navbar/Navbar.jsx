import React, { useContext } from 'react';
import firebase from 'firebase';
import { ROUTES } from '../../helpers/routes';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import { Icon } from 'react-icons-kit';
import { ic_account_circle } from 'react-icons-kit/md/ic_account_circle'
import { navbar, navbarUser, link } from './Navbar.styles';

export const Navbar = () => {
  const {user} = useContext(AuthContext);

    const signOut = () => {
        firebase.auth().signOut();
    }

    return (
        <div className={navbar}>
            <div className={navbarUser}>
                <Icon icon={ic_account_circle} size={20} />
                <span>{user.email}</span>
            </div>
            <div>
                <Link to={ROUTES.HOME} className={link}>Home</Link>
                <Link to={ROUTES.HOME} className={link} onClick={signOut}>Sign Out</Link>
            </div>
        </div>
    )
}