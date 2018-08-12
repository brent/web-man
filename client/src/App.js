import React, { Component } from 'react';
import logo from './img/logo.svg';
import './css/reset.css';
import './css/App.css';

import CommandSearch from './components/CommandSearch';
import ManPage from './components/ManPage';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      searchTerm: "",
      manPageHTML: "",
    };
  }

  handleSearchInputChange = (e) => {
    this.setState({ searchTerm: e.target.value });
    console.log('searchTerm: ', e.target.value);
  }

  handleSubmitSearch = (e) => {
    e.preventDefault();

    const searchUrl = `/${this.state.searchTerm}`;

    fetch(searchUrl)
      .then(res => res.json())
      .then((data) => {
        const html = this.parseHTMLString(data.manPageHTML);
        this.setState({ manPageHTML: html });
        console.log(data);
      });
  }

  parseHTMLString = (htmlString) => {
    return htmlString;
  }

  render() {
    return (
      <div className="app">
        <CommandSearch 
          onChange={ this.handleSearchInputChange } 
          onSubmit={ this.handleSubmitSearch } 
          searchTerm = { this.state.searchTerm }
        />
        <ManPage html={ this.state.manPageHTML } />
      </div>
    );
  }
}

export default App;
