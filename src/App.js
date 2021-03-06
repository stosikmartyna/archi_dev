import React, { useContext } from 'react';
import { AuthContext } from './context/AuthProvider';
import { Switch, Route, Redirect } from 'react-router-dom';
import { ROUTES } from './constants/routes';
import { Navbar } from './components/Navbar/Navbar';
import { NewOfficeForm } from './components/NewOfficeForm/NewOfficeForm';
import { OfficesList } from './components/OfficesList/OfficesList';
import { UserAuth } from './components/UserAuth/UserAuth';
import { EditOffice } from './components/EditOffice/EditOffice';
import { Dashboard } from './components/Dashboard/Dashboard';
import { PageNotFound } from './components/PageNotFound/PageNotFound';
import './App.css';

export const App = () => {
  const {user} = useContext(AuthContext);

  return (
    <>
      {user && <Navbar user={user} />}
      <Switch>
        <Route exact path={ROUTES.HOME}>
          {user ? <Dashboard /> : <Redirect to={ROUTES.SIGN_IN} />}
        </Route>
        <Route path={ROUTES.NEW_OFFICE}>
          {user ? <NewOfficeForm /> : <Redirect to={ROUTES.SIGN_IN} />}
        </Route>
        <Route path={ROUTES.OFFICES}>
          {user ? <OfficesList /> : <Redirect to={ROUTES.SIGN_IN} />}
        </Route>
        <Route path={ROUTES.EDIT_OFFICE}>
          {user ? <EditOffice /> : <Redirect to={ROUTES.SIGN_IN} />}
        </Route>
        <Route path={ROUTES.SIGN_IN}>
          {!user ? <UserAuth /> : <Redirect to={ROUTES.HOME} />}
        </Route>
        <Route component={PageNotFound} />
      </Switch>
    </>
  );
}