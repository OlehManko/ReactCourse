import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AppContext } from '../context';
import { ROUTE_ABOUT } from '../utils/constants';

export const PrivateRoute = ({ children }) => {
  const { isAuth } = useContext(AppContext);
  if (isAuth && isAuth.length > 0) return children;
  return <Navigate to={ROUTE_ABOUT} />;
};
