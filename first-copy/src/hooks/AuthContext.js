import React, { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    checkUserLoggedIn();
  }, []);

  const checkUserLoggedIn = () => {
    fetch('http://localhost:5000/profile', {
      credentials: 'include',
    })
      .then((response) => response.json())
      .then((userInfo) => {
        setUser(userInfo.email);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const logout = () => {
    fetch('http://localhost:5000/logout', {
      credentials: 'include',
      method: 'POST',
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Logout failed');
        }
      })
      .then(() => {
        setUser(null);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <AuthContext.Provider value={{ user, setUser, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
