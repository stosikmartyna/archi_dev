import React, { useContext } from 'react';
import firebase from 'firebase';
import { ROUTES } from '../../constants/routes';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import { Icon } from 'react-icons-kit';
import { ic_account_circle } from 'react-icons-kit/md/ic_account_circle'
import { navbar, navbarLink, navbarUser } from './Navbar.styles';

export const Navbar = () => {
    const {user} = useContext(AuthContext);

    const signOut = () => {
        firebase.auth().signOut();
    }

    return (
        <div className={navbar}>
            <div>
                <Link to={ROUTES.HOME} className={navbarLink}>
                    Home
                </Link>
                <Link to={ROUTES.NEW_OFFICE} className={navbarLink}>
                    New Office
                </Link>
                <Link to={ROUTES.OFFICES} className={navbarLink}>
                    Offices
                </Link>
            </div>
            <div className={navbarUser}>
                <Icon icon={ic_account_circle} size={22} />
                <span>{user.email}</span>
                <Link to={ROUTES.HOME} className={navbarLink} onClick={signOut}>
                    Sign Out
                </Link>
            </div>
        </div>
    )
}