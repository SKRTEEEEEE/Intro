import React from 'react';
import { useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { getContact } from '../../data/itemsContacts';

function Contact() {
  const params = useParams();
  const contact = useMemo(
    () => getContact(params.contactid),
    [params.contactid]
  );
  if (!contact) {
    throw new Error('Contact does not exist');
  }
  return (
    <div>
      <h1>{contact.name}</h1>
      <p>{contact.telephone}</p>
      <p>{contact.description}</p>
    </div>
  );
}

export default Contact;
