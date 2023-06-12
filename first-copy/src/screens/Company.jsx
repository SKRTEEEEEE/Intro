import React from 'react';
import { Outlet } from 'react-router-dom';
//import Contact from '../components/contacts/Contact';

import Contacts from '../components/contacts/Contacts';
import { SideMenu } from '../components/sidemenu/sidemenu';
import ThreeJs from '../components/startThreeJs/ThreeJs';

//import contacts from '../components/contacts/Contacts.module.css';

function Company() {
  return (
    <div>
      <SideMenu />
      <ThreeJs />
      <Outlet>
        <Contacts />
      </Outlet>
    </div>
  );
}

export default Company;
