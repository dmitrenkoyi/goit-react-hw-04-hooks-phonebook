import { useState } from 'react';
import shortid from 'shortid';

import Conteiner from './components/Container';
import Section from './components/Section';
import Form from './components/FormContacts';
import ContactsList from './components/ContactsList';
import Filter from './components/Filter';
import useLocalStorage from './hooks/useLocalStorage';

import './styles.scss';

const defaultContacts =[
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

const App = () => {
const [contacts, setContacts] = useLocalStorage('contacts', defaultContacts);
const [filter, setFilter] = useState('');

 

  const addContacts = (name, number) => {
    const contact = {
      id: shortid.generate(),
      name,
      number,
    };
   setContacts((contacts) => [contact, ...contacts]);
   };

  const changleFilter = e => {
    setFilter(e.currentTarget.value);
    };

  const getVisibleFilter = () => {   
    const normalizeFilter = filter.toLowerCase();
    return contacts.filter(contact =>
       contact.name.toLowerCase().includes(normalizeFilter),
    );
  };

  const deleteContact = contactId => {
    setContacts(contacts.filter(contact => contact.id !== contactId));   
  };

     
  return (
      <Conteiner>
        <h1>Phonebook</h1>
        <Section title="Create contact">
        <Form
          contacts={contacts}
          onSubmit={addContacts} />
        </Section>

        <Section title="Contacts">
          <Filter value={filter} onChange={changleFilter} />
          <ContactsList
            contacts={getVisibleFilter()}
            onDeleteContact={deleteContact}
          />
        </Section>
      </Conteiner>
    );
}



export default App;
