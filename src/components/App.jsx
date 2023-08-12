import React, { Component } from 'react';
import Searchbar from './Searchbar/Searchbar';
import { ImageGallery } from '../components/ImageGallery/ImageGallery';
import { Button } from '../components/Button/Button';
import { Loader } from './Loader/Loader';
import { fetchImagesByQuery } from 'service/utils';
import { AppContainer } from './App.styled';

class App extends Component {
  state = {
    input: '',
    images: [],
    page: 1,
  };

  handleSearchbarSubmit = input => {
    console.log(input);
    this.setState({ input });
  };

  componentDidUpdate(prevProps, prevState) {
    const prevInput = prevState.input;

    const nextInput = this.state.input;

    if (prevInput !== nextInput) {
      this.handleData(nextInput, 1).then(images => {
        this.setState({ page: 1, images });
      });
    }
  }

  handleData = async (query, page) => {
    try {
      this.setState({ isLoading: true });
      const data = await fetchImagesByQuery(query, page);
      console.log(data);
      this.setState({ isLoading: false });
      return data.hits;
    } catch (error) {
      this.setState({ error: error.message, isLoading: false });
    }
  };

  onNextPage = async () => {
    let newPage = this.state.page + 1;
    console.log(newPage);
    this.setState({ isLoading: true });
    const newImages = await this.handleData(this.state.input, newPage);
    this.setState(prevState => ({
      page: newPage,
      images: [...prevState.images, ...newImages],
      isLoading: false,
    }));
  };

  hideLoadMore() {
    console.log(this.state.page);
    if (this.state.images.length < 12) {
      return null;
    }
  }

  showLoadMore() {
    if (this.state.images.length > 12) {
    }
  }

  render() {
    console.log(this.state.images.length);

    return (
      <AppContainer>
        <Searchbar onSubmit={this.handleSearchbarSubmit} />
        {this.state.isLoading === true && <Loader />}
        <ImageGallery images={this.state.images} />
        {this.state.images.length >= 12 && (
          <Button onNextPage={this.onNextPage} />
        )}
        {this.state.isLoading === true && <Loader />}
      </AppContainer>
    );
  }
}

export default App;
