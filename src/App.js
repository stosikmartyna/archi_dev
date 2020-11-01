import React, { useContext } from 'react';
import { AuthContext } from './context/AuthProvider';
import { Switch, Route, Redirect } from 'react-router-dom';
import { ROUTES } from './constants/routes';
import { Navbar } from './components/Navbar/Navbar';
import { NewApartmentForm } from './components/NewApartmentForm/NewApartmentForm';
import { ApartmentsTable } from './components/ApartmentsTable/ApartmentsTable';
import { UserAuth } from './components/UserAuth/UserAuth';
import './App.css';

export const App = () => {
  const {user} = useContext(AuthContext);

  return (
    <>
      {user && <Navbar user={user} />}
      <Switch>
        <Route exact path={ROUTES.HOME}>
          {user ? <h1>Hello</h1> : <Redirect to={ROUTES.SIGN_IN} />}
        </Route>
        <Route path={ROUTES.NEW_APT}>
          {user ? <NewApartmentForm /> : <Redirect to={ROUTES.SIGN_IN} />}
        </Route>
        <Route path={ROUTES.APARTMENTS}>
          {user ? <ApartmentsTable /> : <Redirect to={ROUTES.SIGN_IN} />}
        </Route>
        <Route path={ROUTES.SIGN_IN}>
          {!user ? <UserAuth /> : <Redirect to={ROUTES.NEW_APT} />}
        </Route>
      </Switch>
    </>
  );
}