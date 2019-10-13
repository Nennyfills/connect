import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

import checkAuth from '../helpers/checkAuth';

const PrivateRoute = ({ Component, location }) => (
  <Route render={(props) => (
    checkAuth.isAuthenticated ? (
      <Component props={props} />
    )
      : (
        <Redirect to={{
          pathname: '/',
          state: { from: location },
        }}
        />
      )
  )}
  />
);

PrivateRoute.propTypes = {
  Component: PropTypes.func.isRequired,
  location: PropTypes.shape({
    state: PropTypes.string.isRequired,
  }).isRequired,
};

export default PrivateRoute;
