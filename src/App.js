import React, { useContext } from 'react';
import { AuthContext } from './context/AuthProvider';
import { Switch, Route, Redirect } from 'react-router-dom';
import { ROUTES } from './helpers/routes';
import { Navbar } from './components/Navbar/Navbar';
import './App.css';
import { UserAuthView } from './views/UserAuthView';

export const App = () => {
  const {user} = useContext(AuthContext);

  return (
    <>
      {user && <Navbar user={user} />}
      <Switch>
        <Route exact path={ROUTES.HOME}>
          {user ? <h1>Hello</h1> : <Redirect to={ROUTES.SIGN_IN} />}
        </Route>
        <Route path={ROUTES.SIGN_IN}>
          <UserAuthView />
        </Route>
      </Switch>
    </>
  );
}