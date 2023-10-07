import React, { Component } from 'react';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from '../components/ImageGallery/ImageGallery';
import Button from '../components/Button/Button';
import { Loader } from './Loader/Loader';
import Modal from './Modal/Modal';

import { fetchImagesByQuery } from 'service/utils';
import { AppContainer } from './App.styled';

class App extends Component {
  state = {
    input: '',
    images: [],
    page: 1,
    isLoading: false,
    showModal: false,
    total: 0,
    largeImageURL: null,
  };

  componentDidUpdate(prevProps, prevState) {
    const prevInput = prevState.input;

    const nextInput = this.state.input;

    const prevPage = prevState.page;

    const nextPage = this.state.page;
    console.log(nextPage);

    if (prevInput !== nextInput) {
      this.setState({
        images: [],
        isLoading: true,
      });

      this.handleData(nextInput, 1).then(({ total, hits }) => {
        this.setState({ images: hits, total, isLoading: false });
      });
    } else if (prevPage !== nextPage) {
      this.handleData(nextInput, nextPage).then(({ total, hits }) => {
        this.setState(prevState => ({
          images: [...prevState.images, ...hits],
          total,
          isLoading: false,
        }));
      });
    }
  }

  handleSearchbarSubmit = input => {
    console.log(input);
    this.setState({
      input,
      page: 1,
    });
  };

  handleData = async (query, page) => {
    try {
      this.setState({ isLoading: true });
      const data = await fetchImagesByQuery(query, page);
      console.log(data);
      this.setState({ isLoading: false });
      return data;
    } catch (error) {
      this.setState({ error: error.message, isLoading: false });
    }
  };

  onNextPage = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  handleModal = image => {
    this.toggleModal();
    this.setState({ largeImageURL: image.largeImageURL });
  };

  render() {
    return (
      <AppContainer>
        <Searchbar onSubmit={this.handleSearchbarSubmit} />
        {this.state.images.length > 0 && (
          <ImageGallery
            images={this.state.images}
            handleModal={this.handleModal}
          />
        )}

        {this.state.isLoading && <Loader />}
        {this.state.isLoading === false &&
          this.state.images.length < this.state.total && (
            <Button onNextPage={this.onNextPage} />
          )}

        {this.state.showModal === true && (
          <Modal toggleModal={this.toggleModal}>
            <img src={this.state.largeImageURL} alt="" />
          </Modal>
        )}
      </AppContainer>
    );
  }
}

export default App;
