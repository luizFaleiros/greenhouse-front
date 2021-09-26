import React, { FC } from "react";
import { Redirect, Route, RouteProps } from 'react-router-dom';

export type ProtectedRouteProps = {
    isAuthenticated: boolean;
    authenticationPath: string;
  } & RouteProps;
 
export const ProtectedRoute: FC<ProtectedRouteProps> = ({ children, ...props }) => {
    return (<Route
        {...props}
        render={(propss) =>
          isAuthenticated ? <children {...propss} /> : <Redirect to="/signin" />
        }
      />  );
}
 
export default ProtectedRoute;