//import './App.css';

//djsnsabndb

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import About from './screens/About';
import Blog from './screens/Blog';
import Company from './screens/Company';
// import Home from './screens/Home';
import { MParallaxAutomatisation } from './ModuleParrallax/MParallaxAutomatisation';
import { MParallaxWebDesign } from './ModuleParrallax/MParallaxWebDesign';
import Contacts from './components/contacts/Contacts';
import { Article } from './screens/Article';
import Login from './screens/Login';
import Signin from './screens/Signin';
import Users from './privateScreens/Users';
import { AccountPage } from './privateScreens/AccountPage';
import PrivateRoute from './routers/PrivateRoute';

function App() {
  return (
    <BrowserRouter>
      <>
        <Routes>
          {/* <Route path="/home" element={<Home />} /> */}

          {/* Parallax */}
          <Route
            path="/about/automatisation"
            element={<MParallaxAutomatisation />}
          />
          <Route path="about/webdesign" element={<MParallaxWebDesign />} />
          {/* Screens */}

          <Route path="/login" element={<Login />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/" element={<About />}></Route>
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<Article />} />
          <Route path="/company" element={<Company />}>
            <Route path="contacts/:contactid" element={<Contacts />} />
          </Route>
          {/* Private Screens 
          <PrivateRoute exact path="/admin/users" element={<Users />} />
          <PrivateRoute exact path="/account" element={<AccountPage />} />*/}
        </Routes>
      </>
    </BrowserRouter>
  );
}

export default App;
