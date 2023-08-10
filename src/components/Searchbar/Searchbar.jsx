import React, { Component } from 'react';
// import { FetchImages } from 'service/utils';
import {
  SearchWrapper,
  SearchForm,
  SearchFormButton,
  SearchFormButtonLabel,
  SearchFormInput,
} from './Searchbar.styled';

class Searchbar extends Component {
  state = {
    input: '',
  };

  handleInput = event => {
    let value = event.target.value.toLowerCase();
    console.log(value);
    this.setState({
      input: value,
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    if (this.state.input.trim() === '') {
      alert('Введіть запит пошуку!');
      return;
    }

    this.props.onSubmit(this.state.input);
    // this.setState({ input: '' });
  };

  // async componentDidUpdate(prevState) {
  //   if (prevState.input !== this.state.input) {
  //     let result = await fetchImages();
  //     let data = await result.data;
  //     console.log(data);
  //   }
  // }

  render() {
    return (
      <SearchWrapper>
        <SearchForm onSubmit={this.handleSubmit}>
          <SearchFormButton type="submit">
            <SearchFormButtonLabel>Search</SearchFormButtonLabel>
          </SearchFormButton>

          <SearchFormInput
            value={this.state.input}
            onChange={this.handleInput}
            className="input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </SearchForm>
      </SearchWrapper>
    );
  }
}

export default Searchbar;
