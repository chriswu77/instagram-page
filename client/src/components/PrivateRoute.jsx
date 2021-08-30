/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PrivateRoute = ({ component: Component, wasInitialized, ...rest }) => {
  const loggedIn = useSelector((state) => state.auth.isLoggedIn);

  return (
    wasInitialized && (
      <Route
        {...rest}
        render={(props) =>
          loggedIn ? <Component {...props} /> : <Redirect to="/login" />
        }
      />
    )
  );
};

export default PrivateRoute;
