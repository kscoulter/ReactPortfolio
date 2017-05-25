import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import LinkButton from './components/LinkButton';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <LinkButton url="https://twitter.com/kscoult" name="twitter"/>
        <LinkButton url="https://medium.com/@kcoulter" name="medium"/>
        <LinkButton url="https://github.com/kscoulter" name="github"/>
        <LinkButton url="https://www.linkedin.com/in/kseniacoulter" name="linkedin"/>
      </div>
    );
  }
}

export default App;
