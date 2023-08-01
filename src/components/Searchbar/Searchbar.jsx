import React, { Component } from 'react';

class Searchbar extends Component {
  state = {
    input: '',
  };

  handleInput = event => {
    let value = event.target.value;
    this.setState({
      input: value,
    });
  };

  render() {
    return (
      <header className="searchbar">
        <form
          className="form"
          onSubmit={() => this.props.onSubmit(this.state.input)}
        >
          <button type="submit" className="button">
            <span className="button-label">Search</span>
          </button>

          <input
            value={this.state.input}
            onChange={this.handleInput}
            className="input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;
