import React from 'react';
import { Route, Navigate } from 'react-router-dom';

const ProtectedRoute = ({ user, path, element:Element }) => {
  if (!user) {
    // If user is not authenticated, redirect to '/auth'
    return <Navigate to="/auth" />;
  }

  return <Route path={path} element={<Element />} />;
};

export default ProtectedRoute;
