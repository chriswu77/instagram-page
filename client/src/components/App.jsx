import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import axios from 'axios';
import LoginPage from './LoginPage';
import SignupPage from './SignupPage';

const App = () => {
  const [user, setUser] = useState();

  return (
    <div id="app">
      <Switch>
        <Route exact path="/signup" component={SignupPage} />
        <Route exact path="/" component={LoginPage} />
      </Switch>
    </div>
  );
};

export default App;
