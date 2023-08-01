import React, { Component } from 'react';
import Searchbar from './Searchbar/Searchbar';
import {ImageGallery} from '../components/ImageGallery/ImageGallery'
import axios from 'axios';

class App extends Component {

  state = {
    images: [],
  }


} 
  
async componentDidMount() {
const BASE_URL = `https://pixabay.com/api/`;

const searchParams = new URLSearchParams({
  key: '36804541-6df310b69146ced50149f1ae2',
  image_type: 'photo',
  orientation: 'horizontal',
  safesearch: 'true',
  page: 1,
  per_page: 12,
  q: 
});
  
  
  try {
    let result = await axios.get(`${BASE_URL}?${searchParams.toString()}`);
    let data = result.data;
    return data;
  }
  catch (error){console.log(error.message)} 
}

  onSubmit = () => {
    if (this.state.images.length > 1) {
      this.setState({
        images: data
    
      })
    }

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
      
        {this.state.images.length > 1 && <ImageGallery images={this.state.images} />}
          
      </div>
    );
  }
}

export default App;
