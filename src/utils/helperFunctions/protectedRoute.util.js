import React from 'react';
import { Route, Navigate } from 'react-router-dom';

function ProtectedRoute({ component: Component, ...props }) {
  // TODO (after MVP): remove var after fixing authentication (not really sure what the issue is though)
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
