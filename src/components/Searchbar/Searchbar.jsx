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
      <header class="searchbar">
        <form
          class="form"
          onSubmit={() => this.props.onSubmit(this.state.input)}
        >
          <button type="submit" class="button">
            <span class="button-label">Search</span>
          </button>

          <input
            value={this.state.input}
            onChange={this.handleInput}
            class="input"
            type="text"
            autocomplete="off"
            autofocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;
