import React, { Component } from 'react';
import './App.css';
import { Provider } from 'react-redux';


import Form from './components/Form';
import Answer from './components/Answer';

import store from './store'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Form />
          <Answer />
        </div>
      </Provider>
    );
  }
}

export default App;
