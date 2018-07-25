import React, { Component } from 'react';
import './App.css';

import Form from './components/Form'
import Answer from './components/Answer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Form />
        {/* <Answer /> */}
      </div>
    );
  }
}

export default App;
