import React, { Component } from 'react';
import Searchbar from './Searchbar/Searchbar';

class App extends Component {
  onSubmit = input => {};

  render() {
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <Searchbar onSubmit={this.onSubmit} />
      </div>
    );
  }
}

export default App;
