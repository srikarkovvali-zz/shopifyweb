import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar'
import SearchComponent from './Components/SearchComponent'

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
      </div>
    );
  }
}

export default App;
