import React from 'react';
import { items } from '../../data/itemsContacts';
import { Link } from 'react-router-dom';
import Contact from './Contact';
import contacts from '../contacts/Contacts.module.css';
/*import { useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { getContact } from '../../data/itemsContacts';*/

function Contacts() {
  /*const params = useParams();
  const contact = useMemo(
    () => getContact(params.contactid),
    [params.contactid] );*/

  return (
    <div className={contacts.mainContainer}>
      <div className={contacts.sidebar}>
        {items.map((item) => (
          <div>
            <Link key={item.id} to={`/company/contacts/${item.id}`}>
              {' '}
              {item.name}
            </Link>{' '}
          </div>
        ))}
        {/*
        hola mundo
        <h1>{contact.name}</h1>
       */}{' '}
      </div>
      <div className={contacts.contactContainer}>
        <h2 className={contacts.tittle}>
          Company <Link to={'/company/contacts/1'}>Contacts</Link>
        </h2>
        <Contact />
      </div>
    </div>
  );
}

export default Contacts;
