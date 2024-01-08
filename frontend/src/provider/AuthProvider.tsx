import React from 'react'
import { Navigate, Outlet } from "react-router-dom";

type Props = {}

const AuthProvider = ({ }: Props) => {
  let auth = { token: true };
  return auth.token ? <Outlet /> : <Navigate to="/" />;
}

export default AuthProvider