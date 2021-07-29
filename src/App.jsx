import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';

import ContactForm from './components/ContactForm/ContactForm';
import ContactFilter from './components/ContactFilter/ContactFilter';
import ContactList from './components/ContactList/ContactList';
import filterContacts from './helpers/filterContacts';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    name: '',
    number: '',
  };

  handleSetUserInfo = evt => {
    this.setState({
      [evt.target.name]: evt.target.value,
    });
  };

  handleAddContact = evt => {
    evt.preventDefault();
    if (this.state.contacts.some(el => el.name === this.state.name)) {
      alert(`${this.state.name} is already in contacts`);
      return;
    }
    const contact = {
      id: uuidv4(),
      name: this.state.name,
      number: this.state.number,
    };
    this.setState(prev => ({
      contacts: [...prev.contacts, contact],
      name: '',
      number: '',
    }));
  };

  handleDeleteContacts = evt => {
    this.setState({
      contacts: this.state.contacts.filter(el => el.id !== evt.target.id),
    });
  };

  handleChangeFilter = evt => {
    this.setState({
      [evt.target.name]: evt.target.value,
    });
  };

  render() {
    // console.log(this.state.filter);
    const contacts = filterContacts(this.state.contacts, this.state.filter);

    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm
          name={this.state.name}
          number={this.state.number}
          onAddContact={this.handleAddContact}
          onSetUserInfo={this.handleSetUserInfo}
        ></ContactForm>
        <h2>Contacts</h2>
        <ContactFilter
          filretValue={this.state.filter}
          onSetFilter={this.handleChangeFilter}
        ></ContactFilter>
        <ContactList
          onDeleteContact={this.handleDeleteContacts}
          contacts={contacts}
        ></ContactList>
      </div>
    );
  }
}

export default App;
