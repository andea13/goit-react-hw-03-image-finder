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
    showModal: false,
    total: 0,
    largeImageURL: null,
  };

  componentDidUpdate(prevProps, prevState) {
    const prevInput = prevState.input;

    const nextInput = this.state.input;

    // const newPage = this.onNextPage();

    if (prevInput !== nextInput) {
      this.setState({
        images: [],
        isLoading: true,
      });

      this.handleData(nextInput, 1).then(({ total, hits }) => {
        this.setState({ images: hits, total, isLoading: false });
      });
    }
    // if (prevState.page !== newPage) {
    // this.setState({ isLoading: true });

    // Call this.handleData with the newPage value
    // this.handleData(nextInput, newPage).then(({ hits }) => {
    //   this.setState(prevState => ({
    // page: newPage,
    //       images: [...prevState.images, ...hits],
    //       isLoading: false,
    //     }));
    //   });
    // }
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

  onNextPage = async newPage => {
    newPage = this.state.page + 1;
    console.log(newPage);

    this.setState({ isLoading: true });
    const { hits } = await this.handleData(this.state.input, newPage);
    this.setState(prevState => ({
      page: newPage,
      images: [...prevState.images, ...hits],
      isLoading: false,
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
            <Button
              onNextPage={this.onNextPage}
              // handleData={this.handleData}
              // input={this.state.input}
            />
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
