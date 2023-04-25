import React from 'react';
import { Route, Navigate } from 'react-router-dom';

function ProtectedRoute({ component: Component, ...props }) {
  // TODO: remove var after fixing authentication
  const isAuthenticated = false;
  return (
    <Route
      {...props}
      render={(props) =>
        isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Navigate to="/account/auth" />
        )
      }
    />
  );
}

export default ProtectedRoute;
