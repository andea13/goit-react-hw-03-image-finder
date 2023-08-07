import React, { Component } from 'react';
import Searchbar from './Searchbar/Searchbar';
import { ImageGallery } from '../components/ImageGallery/ImageGallery';
import { Button } from '../components/Button/Button';
import { fetchImagesByQuery } from 'service/utils';

class App extends Component {
  state = {
    input: '',
    images: [],
    page: 1,
  };

  // async componentDidMount() {
  //   try {
  //     let q = this.state.inputText;
  //     let data = await fetchImages(q);

  //     console.log(data);
  //     this.setState({
  //       images: data,
  //     });
  //   } catch (error) {
  //     console.log(error.message);
  //   }
  // }

  handleSearchbarSubmit = input => {
    console.log(input);
    this.setState({ input });
  };

  // componentDidMount() {
  //   this.handleData();
  // }

  componentDidUpdate(prevProps, prevState) {
    const prevInput = prevState.input;

    const nextInput = this.state.input;

    if (prevInput !== nextInput) {
      this.handleData(nextInput, 1).then(images => {
        this.setState({ page: 1, images });
      });

      // if (data.hits.length <= 0) {
      //   return;
      // }
      // this.setState({ images: data });
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
    const newImages = await this.handleData(this.state.input, newPage);
    this.setState(prevState => ({
      page: newPage,
      images: [...prevState.images, ...newImages],
    }));
  };

  // async componentDidMount() {
  //   const BASE_URL = 'https://pixabay.com/api/';
  //   const KEY = '36804541-6df310b69146ced50149f1ae2';

  //   try {
  //     let result = await axios.get(
  //       `${BASE_URL}?key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`
  //     );
  //     let data = result.data;

  //     this.setState({
  //       images: data,
  //     });
  //     // console.log(data);
  //   } catch (error) {
  //     console.log(error.message);
  //   }
  // }

  // componentDidUpdate(prev)

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
        <Searchbar onSubmit={this.handleSearchbarSubmit} />

        <ImageGallery images={this.state.images} />
        <Button onNextPage={this.onNextPage} />
      </div>
    );
  }
}

export default App;
