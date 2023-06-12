import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import MainRoutes from './MainRoutes';
import { AuthProvider } from '../hooks/AuthContext';

export default function AppRouter() {
  return (
    <div>
      <BrowserRouter>
        <AuthProvider>
          <MainRoutes />
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}
