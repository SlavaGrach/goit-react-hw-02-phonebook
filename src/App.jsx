import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';

import ContactForm from './components/ContactForm/ContactForm';
import ContactFilter from './components/ContactFilter/ContactFilter';
import ContactList from './components/ContactList/ContactList';
import filterContacts from './helpers/filterContacts';

export class App extends Component {
  state = {
    contacts: [],
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
      this.setState(prev => ({
        name: '',
        number: '',
      }));
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
