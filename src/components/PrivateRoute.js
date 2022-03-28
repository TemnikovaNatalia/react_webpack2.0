import React from 'react';
import { Redirect, Route } from 'react-router';
import { useSelector } from 'react-redux';


export function PrivateRoute(routeProps) {
  const isAuth = useSelector((state) => state.profile.isAuth);

  return isAuth ? <Route {...routeProps} /> : <Redirect to="signin" />;
};