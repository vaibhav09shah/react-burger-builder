import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Blog from './containers/Blog/Blog';
import { router } from 'sw-toolbox';

class App extends Component {
  render() {
    return (
      <BrowserRouter basename="/my-app">
        <div className="App">
          <Blog />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
