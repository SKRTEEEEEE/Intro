import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from '../screens/publicScreens/Login';
import Signin from '../screens/publicScreens/Signin';

export default function PublicRoutes() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signin" element={<Signin />} />
    </Routes>
  );
}
