import React, { useContext, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import About from '../screens/mainScreens/About';
import Company from '../screens/mainScreens/Company';
import Contacts from '../components/contacts/Contacts';
import { MParallaxAutomatisation } from '../screens/mainScreens/moduleParallax/MParallaxAutomatisation';
import { MParallaxWebDesign } from '../screens/mainScreens/moduleParallax/MParallaxWebDesign';
import Layout from '../layouts/Layout';
import Blog from '../screens/mainScreens/Blog';
import { Article } from '../screens/mainScreens/Article';
import { PrivateRoutes } from './PrivateRoutes';
import PublicRoutes from './PublicRoutes';
import { AuthContext } from '../hooks/AuthContext';

export default function MainRoutes() {
  const { user } = useContext(AuthContext);

  useEffect(() => {
    if (user) {
      fetchUserInfo();
    }
  }, [user]);

  const fetchUserInfo = () => {
    fetch('http://localhost:5000/profile', {
      credentials: 'include',
    })
      .then((response) => response.json())
      .then((userInfo) => {
        console.log(userInfo);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // useEffect(() => {
  //   console.log('Username:', username);
  // }, [username]);
  return (
    <Routes>
      {user && <Route path="/*" element={<PrivateRoutes />} />}
      {!user && <Route path="/*" element={<PublicRoutes />} />}
      <Route
        path="/"
        element={
          <Layout>
            <About />
          </Layout>
        }
      />
      <Route
        path="/company"
        element={
          <Layout>
            <Company />
          </Layout>
        }
      >
        <Route
          path="contacts/:contactid"
          element={
            <Layout>
              <Contacts />
            </Layout>
          }
        />
      </Route>
      <Route
        path="/about/automatisation"
        element={
          <Layout>
            <MParallaxAutomatisation />
          </Layout>
        }
      />
      <Route
        path="/about/webdesign"
        element={
          <Layout>
            <MParallaxWebDesign />
          </Layout>
        }
      />

      <Route
        path="/blog/:_id"
        element={
          <Layout>
            <Article />
          </Layout>
        }
      />
      <Route path="/blog" element={<Blog />} />
    </Routes>
  );
}
