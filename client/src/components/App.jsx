import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import LoginPage from './LoginPage';
import SignupPage from './SignupPage';
import HomePage from './HomePage';
import PrivateRoute from './PrivateRoute';
import { authActions } from '../../store/auth';

const App = () => {
  const dispatch = useDispatch();
  const [wasInitialized, setWasInitialized] = useState(false);

  const getUser = async () => {
    const response = await axios.get('/api/users');
    if (response.data) {
      dispatch(authActions.logIn(response.data));
      // setUser(response.data);
      // setIsLoggedIn(true);
    } else {
      console.log('no user');
      dispatch(authActions.logOut());
      // setUser(null);
      // setIsLoggedIn(false);
    }
    setWasInitialized(true);
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <div id="app">
      <Switch>
        <Route exact path="/signup" component={SignupPage} />
        <Route exact path="/login" component={LoginPage} />
        <PrivateRoute
          path="/"
          component={HomePage}
          wasInitialized={wasInitialized}
        />
      </Switch>
    </div>
  );
};

export default App;
