import React, { Component } from 'react';

export class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      number: '',
    };
  }

  handleSubmit = event => {
    event.preventDefault();
    const { name, number } = this.state;
    this.props.addContact(name, number);
    this.setState({ name: '', number: '' });
  };

  handleNameChange = event => {
    this.setState({ name: event.target.value });
  };

  handleNumberChange = event => {
    this.setState({ number: event.target.value });
  };

  render() {
    const { name, number } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Ім'я:
          <input
            type="text"
            name="name"
            value={name}
            onChange={this.handleNameChange}
            required
          />
        </label>
        <label>
          Телефон:
          <input
            type="tel"
            name="number"
            value={number}
            onChange={this.handleNumberChange}
            required
          />
        </label>
        <button type="submit">Додати контакт</button>
      </form>
    );
  }
}
