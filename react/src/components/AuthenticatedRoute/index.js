import React from 'react';
import {Redirect, Route} from 'react-router'

import routes from '../../constants/routes';

const isUserAuthenticated = () => !!sessionStorage.getItem('user_session');

const AuthenticatedRoute =({ component: Component, path, isPublicRoute, isPrivateRoute }) => {
  if(isPrivateRoute && !isUserAuthenticated()){
    return <Redirect to={routes.LOGIN()} />;
  }else if(isPublicRoute && isUserAuthenticated()){
    return <Redirect to={routes.HOME()} />;
  }
  return <Route path={path} component={Component} />;
};

export default AuthenticatedRoute;
