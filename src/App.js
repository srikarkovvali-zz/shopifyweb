import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar'
import SearchComponent from './Components/SearchComponent'
import SearchButton from './Components/SearchButton'
import Table from './Components/Table'


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Shopify Web Challenge by Srikar Kovvali</h1>
        </header>

          <NavBar/>
          <SearchComponent/>
          <SearchButton/>
          <Table/>
      </div>
    );
  }
}

export default App;
