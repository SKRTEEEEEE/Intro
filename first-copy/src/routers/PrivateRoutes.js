import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Users from '../privateScreens/Users';
import { AccountPage } from '../privateScreens/AccountPage';
import CreateArticle from '../privateScreens/CreateArticle';

export const PrivateRoutes = () => {
  return (
    <Routes>
      <Route exact path="/admin/users" element={<Users />} />
      <Route exact path="/account" element={<AccountPage />} />
      <Route exact path="/createarticle" element={<CreateArticle />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};
